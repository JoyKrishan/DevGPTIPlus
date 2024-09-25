import os 
import pandas as pd

import torch
from scipy.special import softmax
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from sentence_transformers import SentenceTransformer


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

def get_scores(conv_url, clone_type):
    for _, row in devgpt_issues_df.iterrows():
        sharings = row['ChatgptSharing']
        for sharing in sharings:
            if sharing['URL'] == conv_url:
                conversation = sharing['Conversations']
                clone = clone_type
                dev_sentiment_scores, gpt_sentiment_scores, dev_sentiment_labels, gpt_sentiment_labels, dev_sentiment_ema, gpt_sentiment_ema = sentiment_analysis(conversation)
                    
                new_row = {
                    'ConversationURL': sharing['URL'],
                    'CloneType': clone,
                    'dev_sentiment_scores': dev_sentiment_scores,
                    'gpt_sentiment_scores': gpt_sentiment_scores,
                    'dev_sentiment_labels': dev_sentiment_labels,
                    'gpt_sentiment_labels': gpt_sentiment_labels,
                    'dev_sentiment_ema': dev_sentiment_ema,
                    'gpt_sentiment_ema': gpt_sentiment_ema
                }
                return new_row
    return None


def get_sentiment_and_save(conv_urls, clone_types):
    new_rows = []
    
    for conv_url, clone_type in zip(conv_urls, clone_types):
        new_rows.append(get_scores(conv_url, clone_type))
                
    new_df = pd.DataFrame(new_rows)
    new_df.to_csv('code_inclusion_sentiment_scores.csv', index=False)


# def get_sentiment_code_not_included_and_save(conv_urls, clone_types):
#     new_rows = []
#     unique_conversations = set()
#     for _, row in devgpt_issues_df.iterrows():
#         if row['committers']:  # check if the issue is committed
#             sharings = row['ChatgptSharing']
#             for sharing in sharings:
                
#                 if sharing['URL'] not in unique_conversations and sharing['URL'] not in conv_urls: # GPT generated code not included
#                     unique_conversations.add(sharing['URL'])
#                     conversation = sharing['Conversations']
#                     clone = clone_types[conv_urls.index(sharing['URL'])]
#                     dev_sentiment_scores, gpt_sentiment_scores, dev_sentiment_labels, gpt_sentiment_labels, dev_sentiment_ema, gpt_sentiment_ema = sentiment_analysis(conversation)
                    
#                     new_row = {
#                         'ConversationURL': sharing['URL'],
#                         'CloneType': clone,
#                         'dev_sentiment_scores': dev_sentiment_scores,
#                         'gpt_sentiment_scores': gpt_sentiment_scores,
#                         'dev_sentiment_labels': dev_sentiment_labels,
#                         'gpt_sentiment_labels': gpt_sentiment_labels,
#                         'dev_sentiment_ema': dev_sentiment_ema,
#                         'gpt_sentiment_ema': gpt_sentiment_ema
#                     }
                    
#                     new_rows.append(new_row)
#     new_df = pd.DataFrame(new_rows)
#     new_df.to_csv('code_no_inclusion_sentiment_scores.csv', index=False)

if __name__ == "__main__":
    project_dir = os.path.join(os.path.abspath(os.path.join(__file__, '../../../')))
    data_dir = os.path.join(project_dir, 'data')
    complete_data_file_path = os.path.join(data_dir, 'complete_dataset', 'DevGPT_issues.json')
    devgpt_issues_df = pd.read_json(complete_data_file_path)
    model_filename = "stellav5"
    sentence_model = SentenceTransformer("dunzhang/stella_en_1.5B_v5", device=device)
    clone_types_df = pd.read_excel(os.path.join(project_dir, 'clone_type_slug.xlsx'), names=['slug', 'type', 'url','conversation']) 
    conv_urls = clone_types_df['url'].tolist()
    clone_types = clone_types_df['type'].tolist()
  
    get_sentiment_and_save(conv_urls, clone_types)