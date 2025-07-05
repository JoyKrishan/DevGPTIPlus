import os 
import json
import time
import re
import requests
from tqdm import tqdm
from datetime import datetime, timedelta

from dotenv import load_dotenv

from devgptiplus.config.path_constants import ROOT_DIR
from devgptiplus.utils.helpers import setup_logger

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

def fetch_issues(query, start_date, end_date):
    page = 1
    processed_issues = []
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
            logger.error(f"Error fetching results: {response.status_code}")
            logger.error(response.text)
            break

        response_data = response.json()
        all_items = response_data.get('items', [])
        if not all_items:
            logger.debug(f"No items retreived from {page} when start date: {start_date} and end date: {end_date}") 
            break

        for item in all_items:
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
            found_LLM_links = check_for_sharedLLM_links(item['body'])
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
            events = []
            event_actors = []
            for timeline_data in all_timeline_data:
                event_name = timeline_data.get('event', '')
                
                if event_name:
                    events.append(event_name)
                    
                if event_name == "committed":
                    commit_shas.append(timeline_data['sha'][:7])
                    commit_urls.append(timeline_data['url'])
                    committers.append(timeline_data['committer']['name'])
                    commit_messages.append(timeline_data['message'])

            time.sleep(2)
            all_comment_data = fetch_issue_comments(item['comments_url'])
            if all_comment_data:
                for comment_data in all_comment_data:
                    found_LLM_links = check_for_sharedLLM_links(comment_data["body"])
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
            issue_data['events'] = events
            issue_data['event_actors'] = event_actors  
            issue_data['committers'] = committers
            issue_data['commit_shas'] = commit_shas
            issue_data['commit_URLs'] = commit_urls
            issue_data['commit_messages'] = commit_messages     
            issue_data['LLM_sharing'] = shared_llm_sharings
            processed_issues.append(issue_data)
            
        if len(response_data.get('items', [])) < PER_PAGE:
            break
        
        page += 1
        time.sleep(3)
    return processed_issues

def main_fetch_data():
    conversation_queries = {
        'ChatGPT': '\"https://chat.openai.com/share\"',
        'ChatGPT_v2': '\"https://chatgpt.com/share\"',
        }

    for llm, search_params in conversation_queries.items():
        logger.info(f"Fetching issues for ChatGPT with search params: {search_params}")
        start_date = datetime(2022, 11, 1)  # month on when ChatGPT was released
        end_date = datetime.now()
        interval = timedelta(days=30)
        all_issues = []
        current_start = start_date
        total_days = (end_date - start_date).days
        runs = total_days // interval.days + (1 if total_days % interval.days > 0 else 0)

        pbar = tqdm(total=runs)
        while current_start < end_date:
            current_end = current_start + interval
            if current_end > end_date:
                current_end = end_date
            try:
                issues = fetch_issues(search_params, current_start.strftime('%Y-%m-%d'), current_end.strftime('%Y-%m-%d'))
            except Exception as e:
                logger.error(f"Error fetching issues for date range {current_start.strftime('%Y-%m-%d')} to {current_end.strftime('%Y-%m-%d')}: {e}")
                issues = []
                
            all_issues.extend(issues)
            logger.info(f"Fetched {len(issues)} issues from {current_start.strftime('%Y-%m-%d')} to {current_end.strftime('%Y-%m-%d')}")
            current_start = current_end
            pbar.update(1)

        output_path = os.path.join(ROOT_DIR, 'files/new_data', f'DevGPTIPlus_v2_{llm}.json')
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(all_issues, f, indent=2)

def merge_and_clean_json_files(input_files, output_file):
    merged_data = []
    
    for file in input_files:
        with open(os.path.join(ROOT_DIR, 'files/new_data', file), 'r') as f:
            data = json.load(f)
            merged_data.extend(data)
    
    print(f"Total number of issues before cleaning: {len(merged_data)}")
    desired_languages = ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#" ]
    merged_data = [item for item in merged_data if 'LLM_sharing' in item and item['LLM_sharing']]
    merged_data = [item for item in merged_data if item.get('repo_primary_language') in desired_languages]
    
    print(f"Total number of issues after cleaning on language-basis: {len(merged_data)}")
    with open(os.path.join(ROOT_DIR, 'files/new_data', output_file), 'w') as f:
        json.dump(merged_data, f, indent=2)

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
    
    logger = setup_logger('data_collection')
    # main_fetch_data()
     
    input_files = ['DevGPTIPlus_v2_ChatGPT.json', 'DevGPTIPlus_v2_ChatGPT_v2.json']
    output_file = 'DevGPTIPlus_v2.json'
    merge_and_clean_json_files(input_files, output_file)