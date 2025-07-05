import re
import os
import json
from json import JSONDecodeError
import logging
import random
from datetime import datetime

import asyncio
from playwright.async_api import async_playwright
import tiktoken
from tqdm import tqdm
from bs4 import BeautifulSoup

from devgptiplus.utils.constants import USER_AGENTS
from devgptiplus.config.path_constants import ROOT_DIR
from devgptiplus.utils.helpers import setup_logger

def get_num_tokens_from_string(text):
    encoding = tiktoken.encoding_for_model("gpt-3.5-turbo")
    tokens = encoding.encode(text)
    return len(tokens)

async def fetch_page(browser, url):
    context = await browser.new_context(user_agent = random.choice(USER_AGENTS))
    page = await context.new_page()
    response = await page.goto(url, wait_until="networkidle", timeout=200000)
    if response.status != 200:
        await page.close()
        return response.status
    content = await page.content()
    await page.close()
    return content

def extract_json_from_script(script_content):
    match = re.search(r'enqueue\("(.+?)"\)', script_content)
    json_str = ''
    if match:
        json_str = match.group(1)
        json_str = json_str.replace('\\\\', '\\')  
        json_str = json_str.replace('\\"', '"')
        if json_str.endswith('\\n'):
            json_str = json_str[:-2]
            
        json_str = json_str.rstrip('\n') 
        try:
            return json.loads(json_str)
        except JSONDecodeError:
            raise json.JSONDecodeError("No valid JSON found in the script content", json_str, 0)
    raise json.JSONDecodeError("No valid JSON found in the script content", json_str, 0)

def remove_all_dicts(data):
    if isinstance(data, dict):
        return None
    elif isinstance(data, list):
        result = []
        for item in data:
            if isinstance(item, dict):
                continue
            elif isinstance(item, list):
                processed_item = remove_all_dicts(item)
                if processed_item:  
                    result.append(processed_item)
            else:
                result.append(item)
        return result
    else:
        return data

def parse_conversation_from_raw(data):
    server_response_idx = data.index('serverResponse')
    system_idx = data.index('system')
    data = data[server_response_idx: system_idx + 1]
    prompts = []
    answers = []
    conversations = []
    data = remove_all_dicts(data)
    uuid_pattern = r'^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
    index = 0
    code_blocks = []
    if data: 
        data.reverse()
        for i in range(len(data)):
            answer, prompt = None, None
            if data[i] == 'finished_successfully' and data[i+1] == 'status':
                answer = data[i+2]
                code_contents = re.findall(r'```[\s\S]*?```', answer, re.DOTALL)
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
                    
                answers.append(answer)
   
                if prompts and answers and len(prompts) == len(answers):
                    conversations.append({
                        "Prompt": prompts[-1],
                        "Answer": answers[-1],
                        "ListOfCode": code_blocks
                    })
                code_blocks = []
                answer = None
                prompt = None
            
            if isinstance(data[i], list) and isinstance(data[i+1], str) and re.match(uuid_pattern, data[i+1], re.IGNORECASE):
                if len(prompts) > len(answers):
                    answer  = data[i+2]
                    code_contents = re.findall(r'```[\s\S]*?```', answer, re.DOTALL)
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
                    answers.append(answer)  
                else:        
                    prompt = data[i+2]
                    prompts.append(prompt)
                    
                if prompts and answers and len(prompts) == len(answers):
                    conversations.append({
                        "Prompt": prompts[-1],
                        "Answer": answers[-1],
                        "ListOfCode": code_blocks
                    })
                code_blocks = []
                answer = None
                prompt = None
                
    return conversations


async def obtain_from_chatgpt_sharing(url, mention, sharing):
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
            scripts = soup.find_all('script')
            for i in range(len(scripts) - 1):
                current_script = scripts[i]
                next_script = scripts[i + 1]
                if current_script.get('type') == "module" and current_script.get('async') == '':
                    data = extract_json_from_script(next_script.text)          
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
                    scripts = soup.find_all('script')
                    for i in range(len(scripts) - 1):
                        current_script = scripts[i]
                        next_script = scripts[i + 1]
                        if current_script.get('type') == "module" and current_script.get('async') == '':
                            data = extract_json_from_script(next_script.text)  
                except JSONDecodeError:
                    logger.error(f"Error parsing the request for URL: {url}, Status: 404")
                    return {
                            "URL": url,
                            "Mention": mention,
                            "Status": 404,
                            }
        
        server_response_idx = data.index('serverResponse')
        system_idx = data.index('system')
        data = data[server_response_idx: system_idx + 1]
        data = remove_all_dicts(data)
        prompts = []
        answers = []
        conversations = []
        answer_tokens = 0
        turn = 0
        model =  None
        uuid_pattern = r'^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
        index = 0
        code_blocks = []
        if data: 
            data.reverse()
        else:
            logger.error(f"Error parsing the request for URL: {url}, Status: 404")
            return {
                    "URL": url,
                    "Mention": mention,
                    "Status": 404,
                    }
        model = data[data.index('model_slug') - 1].upper()
        if "text-davinci-002-render-sha" in model:
            model = 'GPT-3.5'    
        for i in range(len(data)):
            if data[i] == 'finished_successfully' and data[i+1] == 'status':
                answer = data[i+2]
                answer_tokens += get_num_tokens_from_string(answer)
                code_contents = re.findall(r'```[\s\S]*?```', answer, re.DOTALL)
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
                    
                answers.append(answer)
   
                if prompts and answers and len(prompts) == len(answers):
                    conversations.append({
                        "Prompt": prompts[-1],
                        "Answer": answers[-1],
                        "ListOfCode": code_blocks
                    })
                    turn += 1
                answer, prompt, code_blocks = None, None, []
            
            if isinstance(data[i], list) and isinstance(data[i+1], str) and re.match(uuid_pattern, data[i+1], re.IGNORECASE):
                if len(prompts) > len(answers):
                    answer  = data[i+2]
                    answer_tokens += get_num_tokens_from_string(answer)
                    code_contents = re.findall(r'```[\s\S]*?```', answer, re.DOTALL)
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
                    answers.append(answer)  
                else:        
                    prompt = data[i+2]
                    prompts.append(prompt)
                    
                if prompts and answers and len(prompts) == len(answers):
                    conversations.append({
                        "Prompt": prompts[-1],
                        "Answer": answers[-1],
                        "ListOfCode": code_blocks
                    })
                    turn += 1
                answer, prompt, code_blocks = None, None, []
        
        logger.info(f"Processed issue: {url}")
        
        return {
            "URL": url,
            "Mention": mention,
            "MentionedText": sharing['mentioned_text'],
            "MentionedPlace": sharing['mentioned_place'],
            "Reactions": {
                "total": sharing['reactions']['total_count'],
                "likes": sharing['reactions']['+1'],
                "dislikes": sharing['reactions']['-1']},
            "Status": 200,
            "DateOfConversation": datetime.fromtimestamp(data[data.index('create_time') - 1]).strftime('%B %-d, %Y'),
            "Title": data[data.index('title') - 1],
            "NumberOfPrompts": len(prompts),
            "TokensOfPrompts": sum([get_num_tokens_from_string(prompt) for prompt in prompts]),
            "TokensOfAnswers": answer_tokens,
            "Model": model,
            "Conversations": conversations,
        }

async def run_scrawl(url, mention, issue_data, sharing):
    global browser
    
    async with async_playwright() as playwright:
        firefox = playwright.firefox
        browser = await firefox.launch(headless=True)
        processed_content = await obtain_from_chatgpt_sharing(url, mention, sharing)
        logger.info(processed_content) 
        issue_data['ChatgptSharing'].append(processed_content)
        await browser.close()


if __name__ == "__main__":
    browser = None
    logger = setup_logger('ChatGPT_crawl', console_handler=False)
    logging.getLogger("urllib3").setLevel(logging.WARNING)     # Suppress debug logging for urllib3
    logging.getLogger("asyncio").setLevel(logging.WARNING)     # 
    
    data_filename = os.path.join(ROOT_DIR, 'files', 'new_data', 'DevGPTIPlus_v2.json')
    full_data_filename = os.path.join(ROOT_DIR, 'files', 'new_data', 'DevGPTIPlus_v2_full.json')
    with open(data_filename, 'r') as file:
            data = json.load(file)
            
    for issue_data in tqdm(data, desc="Processing issues", unit="issue"):  # for each issues, we find the ChatGPT sharings
        try:
            llm_sharings = issue_data["LLM_sharing"]
            issue_data['ChatgptSharing'] = []
            for sharing in llm_sharings:
                url =  sharing['URL']
                mention_author = sharing['author']
                asyncio.run(run_scrawl(url, mention_author, issue_data, sharing))
        except Exception as e:
            logger.error(f"Error processing issue: {e}")
            
    with open(full_data_filename, 'w') as file:
        json.dump(data, file, indent=2)    
        