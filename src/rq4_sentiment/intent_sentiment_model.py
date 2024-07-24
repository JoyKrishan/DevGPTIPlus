# TODO: There is a bug which needs to be fixed

import os, sys
project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../'))
sys.path.append(project_dir)

import warnings
warnings.filterwarnings("ignore", category=FutureWarning)

import torch
import pandas as pd
from scipy.special import softmax
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from src.rq1_usage.statistics_v2 import create_df_from_complete_quali_files
from tqdm import tqdm 
import logging

# Configure logging
FORMAT_STRING = "'%(asctime)s - %(name)s - %(levelname)s - %(message)s'"

log_file = os.path.join(project_dir, "data", "logs", "sentiment_analysis_intent.log")
logging.basicConfig(level=logging.DEBUG, format=FORMAT_STRING, force=True, handlers= [logging.FileHandler(log_file), 
                                                                                      logging.StreamHandler()])
my_logger = logging.getLogger(__name__)


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
    for conv in conversation:
        dev_sentiment = classify(conv['Prompt'])
        gpt_sentiment = classify(conv['Answer'])
        
        dev_sentiment_labels.append(LABELS[dev_sentiment.argmax()])
        gpt_sentiment_labels.append(LABELS[gpt_sentiment.argmax()])
        
        dev_aggregagted_score = (-1 * dev_sentiment[0]) + (0 * dev_sentiment[1]) + (1 * dev_sentiment[2])
        gpt_aggregagted_score = (-1 * gpt_sentiment[0]) + (0 * gpt_sentiment[1]) + (1 * gpt_sentiment[2])
        
        dev_sentiment_scores.append(dev_aggregagted_score)
        gpt_sentiment_scores.append(gpt_aggregagted_score)
        
    dev_sentiment_ema = ema(dev_sentiment_scores, n_prompts)
    gpt_sentiment_ema = ema(gpt_sentiment_scores, n_prompts)
    
    return dev_sentiment_scores, gpt_sentiment_scores, dev_sentiment_labels, gpt_sentiment_labels, dev_sentiment_ema, gpt_sentiment_ema


if __name__ == "__main__":
    data_dir = os.path.join(project_dir, 'data')
    quali_file_path = os.path.join(data_dir, 'rq1', 'RQ1-Analysis.xlsx')
    complete_data_file_path = os.path.join(data_dir, 'complete_dataset', 'DevGPT_issues.json')
    
    devgpt_issues_df = pd.read_json(complete_data_file_path)
    df = create_df_from_complete_quali_files(complete_data_file_path, quali_file_path)
    
    new_rows = []
    for _, row in tqdm(df.iterrows()):
        conv_URL = row['ConversationURL']
        
        for _, issue in devgpt_issues_df.iterrows():
            if any(conv_URL in sharing["URL"] for sharing in issue["ChatgptSharing"]):
                sharings = issue['ChatgptSharing']
                
                for sharing in sharings:
                    if 'Model' not in sharing:
                        continue
                    
                    if sharing["URL"] == conv_URL:
                        conversation = sharing["Conversations"]
                        dev_sentiment_scores, gpt_sentiment_scores, dev_sentiment_labels, gpt_sentiment_labels, dev_sentiment_ema, gpt_sentiment_ema  = sentiment_analysis(conversation)
                        
                        new_row = {
                            'IssueID': row['IssueID'],
                            'ConversationURL': conv_URL,
                            'Label': row['Label'],
                            'Model': row['Model'],
                            'TokensOfPrompts': row['TokensOfPrompts'],
                            'TokensOfAnswers': row['TokensOfAnswers'],
                            'PrimaryLanguage': row['PrimaryLanguage'],
                            'Dev Sentiment Scores': dev_sentiment_scores,
                            'GPT Sentiment Scores': gpt_sentiment_scores,
                            'Dev Sentiment Labels': dev_sentiment_labels,
                            'GPT Sentiment Labels': gpt_sentiment_labels,
                            'Dev Sentiment EMA': dev_sentiment_ema,
                            'GPT Sentiment EMA': gpt_sentiment_ema
                        }
                        new_rows.append(new_row)
                        logging.info(f"{key} = {value}" for key, value in new_row.items())
                                        
    pd.DataFrame(new_rows).to_csv('sentiment_analysis_results_intents.csv', index=False)   