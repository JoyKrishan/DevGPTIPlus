import os
import json
import re
from googletrans import Translator
from langdetect import detect
import logging
import nltk
nltk.download('words')

project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ("../../")))

log_file = os.path.join(project_dir, "data", "logs", "prepare_data_for_automated_analysis.log")
FORMAT_STRING = "'%(asctime)s - %(name)s - %(levelname)s - %(message)s'"
logging.basicConfig(level=logging.DEBUG, format=FORMAT_STRING, force=True, handlers=[logging.FileHandler(log_file), logging.StreamHandler()])
logger = logging.getLogger(__name__)

total_status_errors = 0 
total_translation_errors = 0

def translate_to_english(text):
    global total_translation_errors

    try:
        lang = detect(text)
    except Exception as e:
        total_translation_errors += 1
        logger.error(f"Error in detecting language of text: {text}")
        logger.error(f"Error in: {e}")
        return ""
    
    if lang != 'en':
        try:
            en_text = translator.translate(text, dest='en').text
            return en_text
        except Exception as e:
            total_translation_errors += 1
            logger.error(f"Error in translating text: {text}")
            logger.error(f"Error in: {e}")
            return ""
    else:
        return text    


def filter_english_words(text):
    from nltk.corpus import words
    import nltk

    # Download the words corpus if not already done
    nltk.download('words', quiet=True)

    # Get the set of English words
    english_words = set(words.words())
    
    # Split the text into words
    word_list = text.split()

    # Filter the words that are in the English words list
    filtered_words = [word for word in word_list if word.lower() in english_words]
    
    # Join the filtered words back into a string
    filtered_text = ' '.join(filtered_words)
    
    return filtered_text

def clean_text(text):
    code_contents = re.findall(r'```[\s\S]*?```', text, re.DOTALL)
    inline_codes = re.findall(r'`[^`]+`', text)
    links = re.findall(r'/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm', text)
    
    # Remove non-ASCII characters
    text = re.sub(r'[^\x00-\x7F]+', '', text)

    # Create a mapping for replacement
    replacements = {}

    # Replace inline codes
    for index, inline_code in enumerate(inline_codes):
        replacements[inline_code] = f"[INLINE_CODE_{index}]"
    
    # Replace links
    for index, link in enumerate(links):
        replacements[link] = f"[LINK_{index}]"
    
    # Replace code blocks
    for index, code_content in enumerate(code_contents):
        replacements[code_content] = f"[CODE_BLOCK_{index}]"

    # Perform all replacements in one step
    for key, value in replacements.items():
        text = text.replace(key, value)

    # Keep only English words and remove line breakers
    text = re.sub(r'[^a-zA-Z\s]', '', text)
    text = re.sub(r'(\r\n|\r|\n)', '', text)
    
    return filter_english_words(text)



def organize_data(mention_item, devgpt_item): # takes one mention item as input
    global total_status_errors

    mention_text = mention_item["mentioned_text"]
    mention_text_en = translate_to_english(mention_text)

    prompt = []
    answer = []
    if devgpt_item["Status"] != 404:    
        devgpt_conversations = devgpt_item["Conversations"]
        for conversation in devgpt_conversations:
            prompt.append(conversation["Prompt"])
            answer.append(conversation["Answer"])

        # Join all sentences of mention_text_en, prompt, and answer with "\n" into one string
        combined_text = " ".join([mention_text_en] + prompt + answer)
        cleaned_text = clean_text(combined_text)
        return cleaned_text
    else:
        total_status_errors += 1
        logger.debug(f'Status 404 for mention: {mention_item["mentioned_url"]}')
        return ""


if __name__ == "__main__":
    datapath = os.path.join(project_dir, "data", "complete_dataset")
    translator = Translator()

    with open(os.path.join(datapath, "DevGPT_issues.json"), "r") as f:
        data = json.load(f)
    
    dataset = {'text': []}  # Initialize the dataset as a dictionary

    # For each mention in the dataset, check if the mention body
    for item in data:
        mentions = item["mentions"]
        chatgptsharings = item["ChatgptSharing"]
        for mention, chatgptsharing in zip(mentions, chatgptsharings):
            cleaned_data = organize_data(mention, chatgptsharing)
            dataset['text'].append(cleaned_data)  

    with open(os.path.join(datapath, "dataset_for_automated_analysis.json"), "w") as f:
        json.dump(dataset, f)
    
    logger.info(f"Total translation error: {total_translation_errors}")
    logger.info(f"Total status 404 errors: {total_status_errors}")