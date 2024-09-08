import time
import pymongo
import re
import os 
from bs4 import BeautifulSoup
from markdown import markdown
import logging
import json
from langdetect import detect
from deep_translator import GoogleTranslator

project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../'))

log_file = os.path.join(project_dir, 'data', 'logs', 'issue_details_tm.log')
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', handlers=[logging.FileHandler(log_file), logging.StreamHandler()])
logger = logging.getLogger(__name__)

def get_issue_title(item):
    return item["title"]

def get_issue_body(item):
    return item["body"]

def create_tokens_for_code_blocks(text):
    text_without_code = re.sub(r"^```[^\S\r\n]*[a-z]*(?:\n(?!```$).*)*\n```", '', text, 0, re.MULTILINE)
    return text_without_code

def convert_markdown_to_text(md_text):
    html = markdown(md_text)
    text_without_markdown = ''.join(BeautifulSoup(html, features="html.parser").findAll(text=True))
    return text_without_markdown

def de_emojify(text):
    regrex_pattern = re.compile(pattern = "["
        u"\U0001F600-\U0001F64F"  # emoticons
        u"\U0001F300-\U0001F5FF"  # symbols & pictographs
        u"\U0001F680-\U0001F6FF"  # transport & map symbols
        u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
                           "]+", flags = re.UNICODE)
    return regrex_pattern.sub(r'',text)

def language_translation_to_en(text):
    if text is None:
        return text

    try:
        if detect(text) == 'en':
            return text
    except Exception as e:
        logger.error(f"Error detecting language: {text[:10]} - {str(e)}")
        return text

    # Retry mechanism
    max_retries = 3
    for attempt in range(max_retries):
        try:
            text = GoogleTranslator(source='auto', target='en').translate(text)
            break
        except Exception as e:
            if attempt < max_retries - 1:
                time.sleep(5)  # Wait for 5 seconds before retrying
            else:
                logger.error(f"Error in translation with Google Translate: {text[:10]} to en - {str(e)}")
                return text
    return text

def preprocess_text(text):
    text = convert_markdown_to_text(text)
    text = create_tokens_for_code_blocks(text)
    text = de_emojify(text)
    text = language_translation_to_en(text)
    return text

# prev
# def get_devgpt_conversation(sharing):
#     if sharing['Status'] == 404:
#         return None
#     else:
#         data = {}
#         conversation_title = sharing['Title']
#         data['Title'] = conversation_title
#         data["Conversation"] = []
#         for conversation in sharing['Conversations']:
#             data["Conversation"].append(language_translation_to_en(conversation["Prompt"]) + language_translation_to_en(conversation["Answer"]))
#         # TODO: Solve the Bug here and run the code again
#         data["Conversation"] = " ".join(data["Conversation"])
#         return data

def get_devgpt_conversation(sharing):
    if sharing['Status'] == 404:
        return None
    else:
        data = {}
        conversation_title = sharing['Title']
        data['Conversation_Title'] = conversation_title
        data["Conversations"] = []

        for conversation in sharing['Conversations']:
            conversation.pop("ListOfCode", None)
            data["Conversations"].append(conversation)
        return data

# def get_mention_and_conv(item):
#     mentions = item["mentions"]
#     data = {}
#     for idx, mention in enumerate(mentions):
#         if "mention" not in data:

#             data["Mention"] = {}
#             data["Mention"]["Text"] = preprocess_text(mention["mentioned_text"])
#             data["Mention"]["Conversation"] = get_devgpt_conversation(item["ChatgptSharing"][idx])
#         else:
#             data[f"Mention_{idx}"] = {}
#             data[f"Mention_{idx}"]["Text"] = preprocess_text(mention["mentioned_text"])
#             data["Mention"]["Conversation"] = get_devgpt_conversation(item["ChatgptSharing"][idx])

#     return data

def get_save_conversation_details(item):
    issue_html_url = item["issue_html_URL"]
    title = get_issue_title(item)
    body = get_issue_body(item)
    if body:
        body = preprocess_text(body)
        title = preprocess_text(title)

    for idx, mention in enumerate(item["mentions"]):
        mention_text = preprocess_text(mention["mentioned_text"])
        chatgpt_sharing = get_devgpt_conversation(item["ChatgptSharing"][idx])
        if chatgpt_sharing is not None:
            data = {
                "Mention_Text": mention_text,
                "Conversation_Title": chatgpt_sharing['Conversation_Title'],
                "Conversations": chatgpt_sharing['Conversations']
            }
            save_issue_details(issue_html_url, title, body, data)
        else:
            logger.info(f"Status 404 for mention (NO CONVERSATION FOUND): {issue_html_url}")

def save_issue_details(issue_html_url, issue_title, issue_body, conv_data):
    mycollection.insert_one({"Issue_HTML_URL": issue_html_url,"Title": issue_title, "Body": issue_body, "Mention_Text": conv_data["Mention_Text"], 
                             "Conversation_Title": conv_data["Conversation_Title"], "Conversations": conv_data["Conversations"]})
    logger.info(f"{issue_title}--------- saved in DB")

if __name__ == "__main__":
    dataset_file = os.path.join(project_dir, 'data', 'complete_dataset', 'DevGPT_issues.json')
    
    with open(dataset_file, 'r') as f:
        data = json.load(f)
    
    myclient = pymongo.MongoClient("mongodb://10.136.219.115:27017/")
    mydb = myclient["devgpt_issues"]
    mycollection = mydb["Issues_TP_v2"]
    mycollection.delete_many({})

    for item in data:
        get_save_conversation_details(item)
        # # cleaning the body and title
        # if body:
        #     body = preprocess_text(body)
        # title = preprocess_text(title)

        # save_issue_details(body, title, mention_conversation)