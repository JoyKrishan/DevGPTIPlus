import asyncio
from playwright.async_api import async_playwright
import logging
import re
import os, sys
import json
import datetime
from json import JSONDecodeError
import random
import time
import tiktoken
from bs4 import BeautifulSoup


project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../'))
sys.path.append(project_root)

from src.utils.constants import USER_AGENTS

# Configure logging
log_file = os.path.join(project_root, "data", "logs", "chatgpt_crawl.log")
os.makedirs(os.path.dirname(log_file), exist_ok=True)
FORMAT_STRING = "'%(asctime)s - %(name)s - %(levelname)s - %(message)s'"
logging.basicConfig(level=logging.DEBUG, format=FORMAT_STRING, force=True, handlers=[logging.FileHandler(log_file), logging.StreamHandler()])

# Suppress debug logging for urllib3
logging.getLogger("urllib3").setLevel(logging.WARNING)
logging.getLogger("asyncio").setLevel(logging.WARNING)
my_logger = logging.getLogger(__name__)

# Init global variable
browser = None

def read_json(filename):
    try:
        with open(filename, 'r') as file:
            return json.load(file)
    except Exception as e:
        my_logger.info(f"Error reading JSON file: {e}")
        return None  

def write_json(filename, data):
    try:
        with open(filename, 'w') as file:
            json.dump(data, file, indent=2)
    except Exception as e:
        my_logger(f"Error writing JSON file: {e}")

def get_num_tokens_from_string(text):
    encoding = tiktoken.encoding_for_model("gpt-3.5-turbo")
    tokens = encoding.encode(text)
    return len(tokens)

async def fetch_page(browser, url):
    context = await browser.new_context(user_agent = random.choice(USER_AGENTS))
    page = await context.new_page()
    response = await page.goto(url, wait_until='domcontentloaded', timeout=200000)
    if response.status != 200:
        await page.close()
        return response.status
    content = await page.content()
    await page.close()
    return content


async def obtain_from_chatgpt_sharing(url, mention):
    revised_url = url.replace('https://chat.openai.com/share/','https://chatgpt.com/share/')
    content = await fetch_page(browser, revised_url)
    if isinstance(content, int): 
        return {
                        "URL": url,
                        "Mention": mention,
                        "Status": content,
                    }
    else:
        
        try:
            soup = BeautifulSoup(content, "html.parser")
            data = json.loads(soup.find('script', type='application/json').text)
        except JSONDecodeError: 
            content = await fetch_page(browser, revised_url)
            if isinstance(content, int): 
                return {
                                "URL": url,
                                "Mention": mention,
                                "Status": content,
                            }
            else:
                try:
                    soup = BeautifulSoup(content, "html.parser")
                    data = json.loads(soup.find('script', type='application/json').text)
                except JSONDecodeError:
                    my_logger.error(f"Error parsing the request for URL: {url}")
                    return {
                            "URL": url,
                            "Mention": mention,
                            "Status": 404,
                        }
        values = list(data['props']['pageProps']['serverResponse']['data']['mapping'].values())
        values.reverse()
        conversations = []
        prompts = []
        answer, prompt = None, None
        answer_tokens = 0
        is_assistant = False
        model = None
        turn = 0
        for mapping in values:
            if 'message' in mapping:
                if 'model_slug' in mapping['message']['metadata'] and model is None:
                    if "text-davinci-002-render-sha" in mapping['message']['metadata']['model_slug']:
                        model = 'GPT-3.5'
                    else:
                        model = mapping['message']['metadata']['model_slug'].upper()
                if mapping['message']['content']['content_type'] == 'code': continue                 
                if mapping['message']['author']['role'] == 'user':
                    prompt = mapping['message']['content']['parts'][0]
                    prompts.append(prompt)
                    is_assistant = False
                if mapping['message']['author']['role'] == 'assistant':
                    if 'parts' not in mapping['message']['content']: continue
                    if is_assistant and len(conversations) > 0:
                        last_answer = conversations[-1]['Answer']
                        last_code_blocks = conversations[-1]['ListOfCode']
                        answer = mapping['message']['content']['parts'][0]
                        answer_tokens += get_num_tokens_from_string(answer)
                        code_contents = re.findall(r'```[\s\S]*?```', answer, re.DOTALL)
                        code_blocks = []
                        for code_content in code_contents:
                            code_type = code_content.split('\n')[0][3:]
                            code_type = code_type if code_type != '' else None
                            answer = answer.replace(code_content, f"[CODE_BLOCK_{index}]")
                            code_content = '\n'.join(code_content.split('\n')[1:-1])
                            code_block = {
                                            "ReplaceString": f"[CODE_BLOCK_{index}]",
                                            "Type": code_type,
                                            "Content": code_content
                                            }
                            code_blocks.append(code_block)
                            index += 1
                        answer = last_answer + '\n' + answer
                        conversations[-1]['Answer'] = answer
                        last_code_blocks.extend(code_blocks)
                        conversations[-1]['ListOfCode'] = code_blocks
                    else:
                        answer = mapping['message']['content']['parts'][0] 
                        answer_tokens += get_num_tokens_from_string(answer)
                        code_contents = re.findall(r'```[\s\S]*?```', answer, re.DOTALL)
                        code_blocks = []
                        index = 0
                        for code_content in code_contents:
                            code_type = code_content.split('\n')[0][3:]
                            code_type = code_type if code_type != '' else None
                            answer = answer.replace(code_content, f"[CODE_BLOCK_{index}]")
                            code_content = '\n'.join(code_content.split('\n')[1:-1])
                            code_block = {
                                            "ReplaceString": f"[CODE_BLOCK_{index}]",
                                            "Type": code_type,
                                            "Content": code_content
                                            }
                            code_blocks.append(code_block)
                            index += 1
                    is_assistant = True

        
            if answer is not None and prompt is not None:
                turn += 1
                conversations.append(
                    {
                        "Prompt": prompt,
                        "Answer": answer,
                        "ListOfCode": code_blocks,
                        # "ConvIndex": create_hash_index(url, turn) # TODO: Write Funtion: create_hash_index (SKIPPING FOR NOW)
                    })
                answer, prompt = None, None

        my_logger.info(f"Processed issue: {url}")
        return {
            "URL": url,
            "Mention": mention,
            "Status": 200,
            "DateOfConversation": datetime.datetime.fromtimestamp(data['props']['pageProps']['serverResponse']['data']['create_time']).strftime('%B %-d, %Y'),
            "Title": data['props']['pageProps']['serverResponse']['data']['title'],
            "NumberOfPrompts": len(prompts),
            "TokensOfPrompts": sum([get_num_tokens_from_string(prompt) for prompt in prompts]),
            "TokensOfAnswers": answer_tokens,
            "Model": model,
            "Conversations": conversations,
            # "HTMLContent": str(soup)
        }

async def run_scrawl(url, mention, issue_data):
    global browser

    async with async_playwright() as playwright:
        firefox = playwright.firefox
        browser = await firefox.launch(headless=True)
        processed_content = await obtain_from_chatgpt_sharing(url, mention) 
        issue_data['ChatgptSharing'].append(processed_content)
        await browser.close()


if __name__ == "__main__":
    devgpt_api_data = os.path.join(project_root, "data", "cleaned_data", "gitHub_DevGPT_issues_cleaned.json")
    full_devgpt_api_data = os.path.join(project_root, "data", "complete_dataset", "DevGPT_issues.json")

    data = read_json(devgpt_api_data)
    if not data:
        my_logger.error("JSON file data is empty")
    else: 
        processed_issues_count = 0 # keeping this variable just for some extra debugging
        start_time = time.time()

        # for each issues, we find the ChatGPT sharings
        for issue_data in data:
            try:
                llm_sharings = issue_data["LLM_sharing"]
                issue_data['ChatgptSharing'] = []
                for sharing in llm_sharings:
                    url =  sharing['URL']
                    mention_author = sharing['author']
                    asyncio.run(run_scrawl(url, mention_author, issue_data))
                
                processed_issues_count += 1
                # Log progress every 10 issues
                if processed_issues_count % 10 == 0:
                    my_logger.info(f"Processed {processed_issues_count} issues")

            except Exception as e:
                my_logger.error(e)


        write_json(full_devgpt_api_data, data)
        my_logger.info(f"Updated JSON data saved to {full_devgpt_api_data}")
        my_logger.info(f"Total issues with LLM sharing processed: {processed_issues_count}")

        end_time = time.time()
        total_time = end_time - start_time
        my_logger.info(f"Total time taken: {total_time:.2f} seconds")