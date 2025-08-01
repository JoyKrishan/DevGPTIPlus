import os 
import json
import time
import re
import requests
from tqdm import tqdm
from datetime import datetime, timedelta

import asyncio
from dotenv import load_dotenv

from devgptiplus.config.path_constants import ROOT_DIR
from devgptiplus.utils.helpers import setup_logger
from devgptiplus.data_mining.devgpt_scrape import scrape_dev_gpt_conversations

def save_checkpoint(checkpoint_data, checkpoint_path):
    try:
        with open(checkpoint_path, 'w', encoding='utf-8') as f:
            json.dump(checkpoint_data, f, indent=2)
        logger.info(f"Checkpoint saved to {checkpoint_path}")
    except Exception as e:
        logger.error(f"Error saving checkpoint: {e}")

def load_checkpoint(checkpoint_path):
    if os.path.exists(checkpoint_path):
        try:
            with open(checkpoint_path, 'r', encoding='utf-8') as f:
                checkpoint_data = json.load(f)
            logger.info(f"Checkpoint loaded from {checkpoint_path}")
            return checkpoint_data
        except Exception as e:
            logger.error(f"Error loading checkpoint: {e}")
            return None
    return None

def save_incremental_data(all_issues, output_path):
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(all_issues, f, indent=2)
        logger.info(f"Data saved incrementally to {output_path}")
    except Exception as e:
        logger.error(f"Error saving incremental data: {e}")

def check_rate_limit(token):
    url = 'https://api.github.com/rate_limit'
    headers = {'Authorization': f'Bearer {token}'}
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        data = response.json()
        remaining = data['rate']['remaining']
        reset = data['rate']['reset']
        return remaining, reset
    return 0, None

def get_active_token():
    current_token_index = 0
    while True:
        current_token = github_tokens[current_token_index]
        remaining, reset = check_rate_limit(current_token)
        if remaining > 0:
            return current_token

        current_token_index = (current_token_index + 1) % len(github_tokens)
        if current_token_index == 0:
            if reset is None:
                wait_time = 60  # default wait time if reset is None
            else:
                reset_time = datetime.fromtimestamp(reset)
                wait_time = (reset_time - datetime.now()).total_seconds()
            print(f"All tokens exhausted. Waiting for {wait_time // 60:.0f} minutes.")
            time.sleep(wait_time)
            
def fetch_issue_timeline(timeline_url): 
    current_token = get_active_token()
    headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': f'token {current_token}'}
    response = requests.get(timeline_url, headers=headers)
    if response.status_code != 200:
        logger.error(f"Error fetching results: {response.status_code}")
        logger.error(response.text)

    timeline_data = response.json()
    return timeline_data 

def fetch_repo_primary_language(repo_url):
    current_token = get_active_token()
    headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': f'token {current_token}'}
    repo_language_url = repo_url + '/languages'
    response = requests.get(repo_language_url, headers=headers)
    if response.status_code != 200:
        logger.error(f"Error fetching results: {response.status_code}")
        logger.error(response.text)

    data = response.json()
    if data:
        primary_language = max(data, key=data.get)
        return primary_language
    else:
        return None
    
def fetch_issue_comments(comment_url):
    current_token = get_active_token()
    headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': f'token {current_token}'}
    response = requests.get(comment_url, headers=headers)
    if response.status_code != 200:
        logger.error(f"Error fetching results: {response.status_code}")
        logger.error(response.text)

    comment_data = response.json()
    return comment_data 

def check_for_sharedLLM_links(text) -> list:
    matches = []
    if text is not None:
        url_pattern = re.compile(r'https:\/\/chat\.openai\.com\/share\/[a-zA-Z0-9-]{36}')
        url_pattern_v2 = re.compile(r'https:\/\/chatgpt\.com\/share\/[a-zA-Z0-9-]{36}')
        matches.extend(url_pattern.findall(text))
        matches.extend(url_pattern_v2.findall(text))

    return matches

def check_item_already_exists(item) -> bool:
    global existing_issue_urls
    
    issue_url = item['url']
    if issue_url in existing_issue_urls:
        logger.info(f"Skipping existing issue: {issue_url}")
        return True
    return False

def fetch_issues(query, start_date, end_date):
    page = 1
    new_issues = []
    while True:
        params = {
            'q': f'{query} created:{start_date}..{end_date}',
            'per_page': PER_PAGE,
            'page': page
        }
        current_token = get_active_token()
        headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': f'Bearer {current_token}'}
        response = requests.get(ISSUE_API_ENDPOINT, params=params, headers=headers) 
        
        if response.status_code != 200:
            logger.error(f"Error fetching results: {response.status_code, response.text}")
            break

        response_data = response.json()
        all_items = response_data.get('items', [])
        if not all_items:
            logger.debug(f"No items retreived from {page} when start date: {start_date} and end date: {end_date}") 
            break

        for item in all_items:
            if check_item_already_exists(item): # Skip if issue item already exists
                continue
            
            issue_data = {
                "issue_URL": item['url'],
                "issue_author": item['user']['login'],
                "issue_number": item['number'],
                "issue_html_URL": item['html_url'],
                "repo_name": item['repository_url'].split('/')[-1],
                "repo_URL": item['repository_url'],
                "title": item['title'],
                "created_at": item['created_at'],
                "updated_at": item['updated_at'],
                "closed_at": item.get('closed_at'),
                "state": item['state'].upper(),
                "total_comments": item['comments'],
                "labels": [label_item.get('name', '') for label_item in item['labels']],
                "body": item['body']
            }

            shared_llm_sharings = []
            found_LLM_links = check_for_sharedLLM_links(item['body']) # Check for ChatGPT links in the issue body
            if found_LLM_links:
                for link in found_LLM_links:                     
                    shared_llm_sharings.append({
                        'URL': link,
                        'author': item['user']['login'],
                        'mentioned_text': item['body'],
                        'mentioned_place': 'body',
                        'reactions': item['reactions'],
                    })

            time.sleep(2) 
            repo_primary_language = fetch_repo_primary_language(item['repository_url'])
            time.sleep(2) 
            all_timeline_data = fetch_issue_timeline(item['timeline_url']) 
            committers, commit_shas, commit_urls, commit_messages = [], [], [], []
            for timeline_data in all_timeline_data:
                event_name = timeline_data.get('event', '')
                    
                if event_name == "committed":
                    commit_shas.append(timeline_data['sha'][:7])
                    commit_urls.append(timeline_data['url'])
                    committers.append(timeline_data['committer']['name'])
                    commit_messages.append(timeline_data['message'])

            time.sleep(2)
            all_comment_data = fetch_issue_comments(item['comments_url'])
            if all_comment_data:
                for comment_data in all_comment_data:
                    found_LLM_links = check_for_sharedLLM_links(comment_data["body"]) # Check for ChatGPT links in the comment body
                    if found_LLM_links:
                        for link in found_LLM_links:                        
                            shared_llm_sharings.append({
                                'URL': link,
                                'author': comment_data["user"]["login"],
                                'mentioned_text': comment_data["body"],
                                'mentioned_place': 'comment',
                                'reactions': item['reactions'],
                            })

            issue_data['repo_primary_language'] = repo_primary_language
            issue_data['committers'] = committers
            issue_data['commit_shas'] = commit_shas
            issue_data['commit_URLs'] = commit_urls
            issue_data['commit_messages'] = commit_messages 
            issue_data['ChatgptSharing'] = []
            
            for sharing in tqdm(shared_llm_sharings, desc=f"Processing DevGPT conversation for {item['url']}"):
                url = sharing['URL']
                mention = sharing['author']
                chatgpt_sharing = asyncio.run(scrape_dev_gpt_conversations(url, mention, sharing, logger))
                if chatgpt_sharing:
                    issue_data['ChatgptSharing'].append(chatgpt_sharing)
                    
            if any(issue_data['ChatgptSharing']):
                new_issues.append(issue_data)
                
                logger.info(f"Fetched issue: {issue_data['issue_URL']} with {len(issue_data['ChatgptSharing'])} ChatGPT sharing(s)")
                 
        if len(response_data.get('items', [])) < PER_PAGE:
            break
        
        page += 1
        time.sleep(3)
    return new_issues

def main_fetch_new_data(existing_data):
    conversation_queries = {
        'ChatGPT': '\"https://chat.openai.com/share\"',
        'ChatGPT_v2': '\"https://chatgpt.com/share\"',
        }
    all_issues = existing_data.copy()  
    
    output_path = os.path.join(ROOT_DIR, 'files/new_data', 'DevGPTIPlus_v3.json')
    checkpoint_path = os.path.join(ROOT_DIR, 'files/new_data/checkpoints', 'checkpoint.json')
    checkpoint = load_checkpoint(checkpoint_path)
    
    if checkpoint:
        all_issues = checkpoint.get('all_issues', existing_data.copy())
        completed_ranges = checkpoint.get('completed_ranges', [])
        current_query_index = checkpoint.get('current_query_index', 0)
        logger.info(f"Resuming from checkpoint: {len(completed_ranges)} ranges completed, starting from query index {current_query_index}")
    else:
        all_issues = existing_data.copy()
        completed_ranges = []
        current_query_index = 0
        logger.info("Starting data collection")
    
    query_items = list(conversation_queries.items())
    for query_idx in range(current_query_index, len(query_items)):
        query_name, search_params = query_items[query_idx]
        logger.info(f"Fetching issues for ChatGPT with search params: {search_params}")
        
        start_date = datetime(2022, 11, 1)  # month on when ChatGPT was released
        end_date = datetime(2025, 6, 19) # June 19, 2025
        interval = timedelta(days=30)
        current_start = start_date
        total_days = (end_date - start_date).days
        runs = total_days // interval.days + (1 if total_days % interval.days > 0 else 0)
        
        date_ranges = []
        temp_start = start_date
        while temp_start < end_date:
            temp_end = temp_start + interval
            if temp_end > end_date:
                temp_end = end_date
            date_ranges.append((temp_start, temp_end))
            temp_start = temp_end

        pbar = tqdm(total=len(date_ranges), desc=f"Processing {query_name}")
        
        for _, (current_start, current_end) in enumerate(date_ranges):
            range_key = f"{query_name}_{current_start.strftime('%Y-%m-%d')}_{current_end.strftime('%Y-%m-%d')}"
            if range_key in completed_ranges:
                logger.info(f"Skipping already completed range: {range_key}")
                pbar.update(1)
                continue
                
            try:
                logger.info(f"Processing date range: {current_start.strftime('%Y-%m-%d')} to {current_end.strftime('%Y-%m-%d')}")
                issues = fetch_issues(search_params, current_start.strftime('%Y-%m-%d'), current_end.strftime('%Y-%m-%d'))
                
                all_issues.extend(issues)
                completed_ranges.append(range_key)
                
                logger.info(f"Fetched {len(issues)} issues from {current_start.strftime('%Y-%m-%d')} to {current_end.strftime('%Y-%m-%d')}")
                
                checkpoint_data = {
                    'all_issues': all_issues,
                    'completed_ranges': completed_ranges,
                    'current_query_index': query_idx,
                    'last_updated': datetime.now().isoformat(),
                    'total_issues_so_far': len(all_issues)
                }
                save_checkpoint(checkpoint_data, checkpoint_path)
                save_incremental_data(all_issues, output_path)
                
            except Exception as e:
                logger.error(f"Error fetching issues for date range {current_start.strftime('%Y-%m-%d')} to {current_end.strftime('%Y-%m-%d')}: {e}")
                
                checkpoint_data = {
                    'all_issues': all_issues,
                    'completed_ranges': completed_ranges,
                    'current_query_index': query_idx,
                    'last_updated': datetime.now().isoformat(),
                    'total_issues_so_far': len(all_issues),
                    'last_error': str(e),
                    'error_range': f"{current_start.strftime('%Y-%m-%d')} to {current_end.strftime('%Y-%m-%d')}"
                }
                save_checkpoint(checkpoint_data, checkpoint_path)
                
            pbar.update(1)
        pbar.close()

    save_incremental_data(all_issues, output_path)
    logger.info(f"Data collection completed. Total issues fetched: {len(all_issues)}")
    
    try:
        if os.path.exists(checkpoint_path):
            os.remove(checkpoint_path)
            logger.info("Checkpoint file removed after successful completion")
    except Exception as e:
        logger.warning(f"Could not remove checkpoint file: {e}")
    os.chdir(ROOT_DIR)
    
if __name__ == "__main__":
    load_dotenv(override=True)
    ISSUE_API_ENDPOINT = 'https://api.github.com/search/issues'
    PER_PAGE = 100
    github_tokens = []
    i = 1
    while True:
        token_name = f"GITHUB_TOKEN_{i}"
        if token_name in os.environ:
            github_tokens.append(os.environ[token_name])
            i += 1
        else:
            break
    
    if not github_tokens:
        raise ValueError("No GitHub tokens found. Please set GITHUB_TOKEN_1, GITHUB_TOKEN_2, etc. in your environment variables.")
    
    old_dataset_path = os.path.join(ROOT_DIR, "files/prev_data/dataset/DevGPTIPlus.json")
    with open(old_dataset_path, 'r') as f:
        existing_data = json.load(f)
    
    existing_data = [
            {k: v for k, v in item.items() if k != 'events' and k != 'event_actors'} 
            if isinstance(item, dict) else item 
            for item in existing_data
        ]
    
    existing_issue_urls = [item['issue_URL'] for item in existing_data]
    logger = setup_logger('data_collection', console_handler=False)
    main_fetch_new_data(existing_data)