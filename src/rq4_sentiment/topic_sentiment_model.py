import os, sys
project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../'))
sys.path.append(project_dir)

import torch
import pandas as pd
from scipy.special import softmax
from bertopic import BERTopic
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from sentence_transformers import SentenceTransformer
from tqdm import tqdm 
import logging
import uuid
import pymongo
import socket

from src.utils.constants import TOPIC_ID_TO_NAME

import warnings
warnings.filterwarnings("ignore", category=FutureWarning)

# Configure logging
FORMAT_STRING = "'%(asctime)s - %(name)s - %(levelname)s - %(message)s'"

log_file = os.path.join(project_dir, "data", "logs", "sentiment_analysis_topic.log")
logging.basicConfig(level=logging.DEBUG, format=FORMAT_STRING, force=True, handlers= [logging.FileHandler(log_file), 
                                                                                      logging.StreamHandler()])
my_logger = logging.getLogger(__name__)
logging.getLogger('urllib3').setLevel(logging.WARNING)
logging.getLogger('pymongo').setLevel(logging.WARNING)


os.environ["CUDA_VISIBLE_DEVICES"] = "0,1,2,3"
os.environ["TOKENIZERS_PARALLELISM"] = "true"

device = "cuda" if torch.cuda.is_available() else "cpu"
LABELS = {0: 'Negative', 1: 'Neutral', 2: 'Positive'}

def classify(text):
    MODEL = 'Cloudy1225/stackoverflow-roberta-base-sentiment'
    tokenizer = AutoTokenizer.from_pretrained(MODEL)
    model = AutoModelForSequenceClassification.from_pretrained(MODEL).to(device)
    
    encoded_input = tokenizer(text, max_length=512, padding='max_length', truncation=True, return_tensors='pt').to(device)
    output = model(**encoded_input)
    scores = output[0][0].cpu().detach().numpy()
    scores = softmax(scores)
    return scores

def ema(sentiment_list, n_prompts):
    alpha = 2 / (n_prompts + 1)
    ema = [sentiment_list[0]]
    
    for i in range(1, len(sentiment_list)):
        ema_value = alpha * sentiment_list[i] + (1 - alpha) * ema[i-1]
        ema.append(ema_value)
    
    return ema[-1]


def sentiment_analysis(conversation):
    dev_sentiment_scores = []
    gpt_sentiment_scores = []
    dev_sentiment_labels = []
    gpt_sentiment_labels = []
    
    n_prompts = len(conversation)
    
    for turn in conversation:
        dev_sentiment = classify(turn['Prompt'])
        gpt_sentiment = classify(turn['Answer'])
        
        dev_sentiment_labels.append(LABELS[dev_sentiment.argmax()])
        gpt_sentiment_labels.append(LABELS[gpt_sentiment.argmax()])
        dev_aggregagted_score = (-1 * dev_sentiment[0]) + (0 * dev_sentiment[1]) + (1 * dev_sentiment[2])
        gpt_aggregagted_score = (-1 * gpt_sentiment[0]) + (0 * gpt_sentiment[1]) + (1 * gpt_sentiment[2])
        
        dev_sentiment_scores.append(dev_aggregagted_score)
        gpt_sentiment_scores.append(gpt_aggregagted_score)
        
    dev_sentiment_ema = ema(dev_sentiment_scores, n_prompts)
    gpt_sentiment_ema = ema(gpt_sentiment_scores, n_prompts)
    print(dev_sentiment_ema, gpt_sentiment_ema)
    return dev_sentiment_scores, gpt_sentiment_scores, dev_sentiment_labels, gpt_sentiment_labels, dev_sentiment_ema, gpt_sentiment_ema

def get_connected_to_db():
    hostname = socket.gethostname()
    if hostname == "srlab02":
        myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    else:
        myclient = pymongo.MongoClient("mongodb://10.136.219.134:27017/")   
    mydb = myclient["devgpt_issues"]
    mycol = mydb["Issues_TP_v2"]
    return mydb, mycol

def load_topic_model(model_name):
    model_path = f"model_dir/topic_model_{model_name}"
    if not os.path.exists(model_path):
        raise ValueError(f"Model path does not exist: {model_path}")
    topic_model = BERTopic.load(model_path, embedding_model='dunzhang/stella_en_1.5B_v5')
    return topic_model

def find_topic(topic_model, issue_html_url, title, mycol, sentence_model):
    x = mycol.find_one({
        'Issue_HTML_URL': issue_html_url,
        'Conversation_Title': title,
        })
    conversations = x['Conversations']
    doc = []
    
    for conversation in conversations:
        doc.append(conversation['Prompt'])
        doc.append(conversation['Answer'])
    conversation = '\n'.join(doc)
    
    embeddings = sentence_model.encode([conversation], show_progress_bar=False)
    topic = topic_model.transform([conversation], embeddings)
    topic_id = topic[0][0]
    topic_name = TOPIC_ID_TO_NAME.get(topic_id, 'Unknown')
    logging.info(f"Topic_ID: {topic_id}, Topic_Name: {topic_name} for Issue_HTML_URL: {issue_html_url} and Conversation_Title: {title}")
    return topic

if __name__ == "__main__":
    data_dir = os.path.join(project_dir, 'data')
    complete_data_file_path = os.path.join(data_dir, 'complete_dataset', 'DevGPT_issues.json')
    devgpt_issues_df = pd.read_json(complete_data_file_path)
    model_filename = "stellav5"
    sentence_model = SentenceTransformer("dunzhang/stella_en_1.5B_v5", device=device)
    topic_model = load_topic_model(model_filename)

    mydb, mycol = get_connected_to_db()
    
    new_rows = []
    unique_conversations = set()
    for _, row in tqdm(devgpt_issues_df.iterrows()):
        sharings = row['ChatgptSharing']
        
        for sharing in sharings:
            if 'Model' not in sharing:
                continue
            
            conv_URL = sharing["URL"]
            conversation = sharing["Conversations"]
            dev_sentiment_scores, gpt_sentiment_scores, dev_sentiment_labels, gpt_sentiment_labels, dev_sentiment_ema, gpt_sentiment_ema  = sentiment_analysis(conversation)
            if conv_URL in unique_conversations:
                continue
            else:
                unique_conversations.add(conv_URL)
            new_row = {
                'Issue_URL': row['issue_URL'],
                'Conversation_ID':  str(uuid.uuid4()).split('-')[0],
                'ConversationURL': conv_URL,
                'PrimaryLanguage': row['repo_primary_language'],
                'Model': sharing['Model'],
                'TokensOfPrompts': sharing['TokensOfPrompts'],
                'TokensOfAnswers': sharing['TokensOfAnswers'],
                'TokensDiff': sharing['TokensOfAnswers'] - sharing['TokensOfPrompts'],
                'Dev Sentiment Scores': dev_sentiment_scores,
                'GPT Sentiment Scores': gpt_sentiment_scores,
                'Dev Sentiment Labels': dev_sentiment_labels,
                'GPT Sentiment Labels': gpt_sentiment_labels,
                'Dev Sentiment EMA': dev_sentiment_ema,
                'GPT Sentiment EMA': gpt_sentiment_ema,
                # 'Topic': find_topic(topic_model, row['issue_html_URL'], sharing['Title'], mycol, sentence_model)
            }

            new_rows.append(new_row)
            logging.info(f"Added new row for Issue_URL: {row['issue_URL']} and Conversation_URL: {conv_URL}")

    new_df = pd.DataFrame(new_rows)
    new_df.to_csv(os.path.join(data_dir, 'rq4', 'DevGPT_issues_with_sentiment.csv'), index=False)