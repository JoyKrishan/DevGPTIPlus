import pymongo
import re
import os 
from bs4 import BeautifulSoup
from markdown import markdown
import goslate
import logging
import json
import time

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


def check_lang_and_convert_to_en(text):
    gs = goslate.Goslate(timeout=5) 
    lang = 'en'
    time.sleep(2)
    try:
        lang = gs.detect(text)
        if lang != 'en':
            text = gs.translate(text, 'en')
            time.sleep(4)
    except Exception as e:
        logger.error(f"Error in language detection and translation: {e}")

    return text, lang

def save_issue_details(issue_title, issue_body, issue_language):
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["devgpt_issues"]
    mycollection = mydb["issue_title_body"]
    mycollection.insert_one({"title": issue_title, "body": issue_body, "org_lang": issue_language})
    logger.info(f"{issue_title}--------- saved in DB")

def drop_collection():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["devgpt_issues"]
    mycollection = mydb["issue_title_body"]
    mycollection.drop()
    logger.info("Collection dropped")

if __name__ == "__main__":
    drop_collection()
    dataset_file = os.path.join(project_dir, 'data', 'complete_dataset', 'DevGPT_issues.json')
    with open(dataset_file, 'r') as f:
        data = json.load(f)

    for item in data:
        title = get_issue_title(item)
        body = get_issue_body(item)
        if body:
            body = create_tokens_for_code_blocks(body)
            body = convert_markdown_to_text(body)
            body = de_emojify(body)
            body, lang = check_lang_and_convert_to_en(body)
        if title:
            title = create_tokens_for_code_blocks(title)
            title = convert_markdown_to_text(title)
            title = de_emojify(title)
            title, lang = check_lang_and_convert_to_en(title)
        save_issue_details(body, title, lang)