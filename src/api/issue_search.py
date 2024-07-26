import requests, os
from dotenv import load_dotenv
from datetime import datetime, timedelta
import json
import time
import logging
import sys
import re


# Define global variables
github_tokens = []
current_token_index = 0
my_logger = None

# Configure logging
FORMAT_STRING = "'%(asctime)s - %(name)s - %(levelname)s - %(message)s'"
logging.basicConfig(level=logging.DEBUG, format=FORMAT_STRING, force=True)

# Suppress debug logging for urllib3
logging.getLogger("urllib3").setLevel(logging.WARNING)

my_logger = logging.getLogger(__name__)


# Function to check the rate limit for the current token
def check_rate_limit(token):
    url = 'https://api.github.com/rate_limit'
    headers = {'Authorization': f'token {token}'}
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        data = response.json()
        remaining = data['rate']['remaining']
        reset = data['rate']['reset']
        return remaining, reset
    return 0, None


# Get the active token from the list of tokens
def get_active_token():
    global current_token_index

    while True:
        current_token = github_tokens[current_token_index]
        remaining, reset = check_rate_limit(current_token)

        if remaining > 0:
            return current_token

        current_token_index = (current_token_index + 1) % len(github_tokens)

        if current_token_index == 0:
            reset_time = datetime.datetime.fromtimestamp(reset)
            wait_time = (reset_time - datetime.datetime.now()).total_seconds()
            print(f"All tokens exhausted. Waiting for {wait_time // 60:.0f} minutes.")
            time.sleep(wait_time)


# API request One: To fetch the issue timeline details
def fetch_issue_timeline(timeline_url): 
    current_token = get_active_token()
    headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': f'token {current_token}'}

    response = requests.get(timeline_url, headers=headers)

    if response.status_code != 200:
        my_logger.error(f"Error fetching results: {response.status_code}")
        my_logger.error(response.text)

    timeline_data = response.json()
    return timeline_data          


# API request Two: To fetch the repository's primary language from where the issue originated
def fetch_repo_primary_language(repo_url): # API request Two
    current_token = get_active_token()
    headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': f'token {current_token}'}
    repo_language_url = repo_url + '/languages'
    response = requests.get(repo_language_url, headers=headers)

    if response.status_code != 200:
        my_logger.error(f"Error fetching results: {response.status_code}")
        my_logger.error(response.text)

    data = response.json()

    if data:
        primary_language = max(data, key=data.get)
        return primary_language
    else:
        return None

# API request Three: To fetch the comments in a particular issue
def fetch_issue_comments(comment_url):
    current_token = get_active_token()
    headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': f'token {current_token}'}
    response = requests.get(comment_url, headers=headers)

    if response.status_code != 200:
        my_logger.error(f"Error fetching results: {response.status_code}")
        my_logger.error(response.text)

    comment_data = response.json()
    return comment_data 
       

def check_for_sharedLLM_links(text) -> list:
    if text:
        url_pattern = re.compile(r'https:\/\/chat.openai.com\/share\/[a-zA-Z0-9-]{36}')

        matches = url_pattern.findall(text)

        if matches:
            # my_logger.info(matches) # to check if many urls are retrieved
            return matches
        else:
            return []
    return []


def save_to_file(data, filename):
    try:
        with open(filename, 'r') as f:
            existing_data = json.load(f)
    except FileNotFoundError:
        existing_data = []

    if not isinstance(existing_data, list):
        existing_data = []

    existing_data.extend(data)

    with open(filename, 'w') as f:
        json.dump(existing_data, f, indent=2)
    
    # my_logger.info(f"Appended data to {filename}")


# Function to fetch issues within a given date range
def fetch_issues(query, start_date, end_date):
    MAIN_ISSUE_URL = 'https://api.github.com/search/issues'
    JSON_FILENAME = 'ChatGPT_issues_v2.0_MOD.json'
    PER_PAGE = 100
    page = 1
    processed_issues = []

    while True:
        params = {
            'q': f'{query} created:{start_date}..{end_date}',
            'per_page': PER_PAGE,
            'page': page
        }
        current_token = get_active_token()
        headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': f'token {current_token}'}
        response = requests.get(MAIN_ISSUE_URL, params=params, headers=headers) # api_hit

        if response.status_code != 200:
            my_logger.error(f"Error fetching results: {response.status_code}")
            my_logger.error(response.text)
            break

        data = response.json()
        all_items = data.get('items')


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
                "issue_body_reactions": item['reactions'],
                "body": item['body']
            }


            mentions = []
            shared_llm_sharings = []

            # Check if body contains any shared LLM links
            found_LLM_links = check_for_sharedLLM_links(item['body'])

            if found_LLM_links:

                # For each link we update the mentions and shared_llm_sharings 
                for link in found_LLM_links:
                    
                    mentions.append({
                        'mentioned_url': link,
                        'mentioned_author': item['user']['login'],
                        'mentioned_text': item['body'],
                        'reactions': item['reactions'],
                        'mentioned_upvote_count': item['reactions']["+1"]
                    })
                    shared_llm_sharings.append({
                        'URL': link,
                        'author': item['user']['login']
                    })

            time.sleep(2) # slight pause before another request
            repo_primary_language = fetch_repo_primary_language(item['repository_url']) # api_hit

            time.sleep(2) # slight pause before another request
            timeline_data = fetch_issue_timeline(item['timeline_url']) # api_hit

            # variables to retrieve data from the timeline data
            committers, commit_shas, commit_urls, commit_messages = [], [], [], []
            events = []
            event_actors = []

            for data in timeline_data:
                event_name = data.get('event', '')
                if event_name:
                    events.append(event_name)

                event_actor = data.get('actor', '')
                if event_actor:
                    event_actors.append(event_actor['login'])

                if event_name == "committed":
                    commit_shas.append(data['sha'][:7]) # first seven chars
                    commit_urls.append(data['url'])
                    committers.append(data['committer']['name'])
                    commit_messages.append(data['message'])

            time.sleep(2) # slight pause before another request
            all_comment_data = fetch_issue_comments(item['comments_url']) #TODO write the fetch comment method
            comments_list = []

            if all_comment_data:
                for comment_data in all_comment_data:

                    comments_list.append({
                            "user_login": comment_data["user"]["login"],
                            "author_association": comment_data["author_association"],
                            "html_URL": comment_data["html_url"],
                            "body": comment_data["body"],
                            "reactions": comment_data["reactions"],
                            "comments_upvote_count": comment_data['reactions']["+1"]
                        })
                    
                    found_LLM_links = check_for_sharedLLM_links(comment_data["body"])

                    if found_LLM_links:
                        # For each link we update the mentions and shared_llm_sharings 
                        for link in found_LLM_links:

                            mentions.append({
                                'mentioned_url': link,
                                'mentioned_author': comment_data["user"]["login"],
                                'mentioned_text': comment_data["body"],
                                'reactions':  comment_data["reactions"],
                                'mentioned_upvote_count': comment_data['reactions']["+1"] 
                            })

                            shared_llm_sharings.append({
                                'URL': link,
                                'author': comment_data["user"]["login"]  
                            })
            issue_data['repo_primary_language'] = repo_primary_language       
            issue_data["comments"] = comments_list
            issue_data['mentions'] = mentions
            issue_data['LLM_sharing'] = shared_llm_sharings

            processed_issues.append(issue_data)

        save_to_file(processed_issues, JSON_FILENAME)
        if len(data.get('items', [])) < PER_PAGE:
            break
        
        page += 1
        time.sleep(3)
    return processed_issues


def run_api_fetches():
    # Define the query and the total date range
    queries = {
        'ChatGPT':'https://chat.openai.com/share',
        # 'Gemini': 'g.co/gemini/share'
    }

    for name, search_params in queries.items():
        
        if name == "ChatGPT":
            start_date = datetime(2022, 11, 1) #year, #month, #day
            end_date = datetime(2024, 7, 1)
        else: # this block of code is for Gemini 
            start_date = datetime(2023, 3, 1)
            end_date = datetime(2024, 7, 1)

        # Define the interval for each sub-query (e.g., 30 days)
        interval = timedelta(days=30)

        all_issues = []
        current_start = start_date

        start_time = time.time()

        # Loop through the entire date range, fetching issues in intervals
        while current_start < end_date:
            current_end = current_start + interval

            if current_end > end_date:
                current_end = end_date

            issues = fetch_issues(search_params, current_start.strftime('%Y-%m-%d'), current_end.strftime('%Y-%m-%d'))
            all_issues.extend(issues)
            my_logger.info(f"Fetched {len(issues)} issues from {current_start.strftime('%Y-%m-%d')} to {current_end.strftime('%Y-%m-%d')}")
            current_start = current_end + timedelta(days=1)

        end_time = time.time()
        total_time = end_time - start_time

        my_logger.info(f"Total issues fetched: {len(all_issues)}")
        my_logger.info(f"Total time taken: {total_time:.2f} seconds")

        # Save the results to a file
        with open(f'{name}_issues_v2.0.json', 'w') as f:
            json.dump(all_issues, f, indent=2)


if __name__ == "__main__":

    # Validate the GitHub token
    load_dotenv()
    github_tokens = os.getenv("GITHUB_TOKENS")
    
    if github_tokens:
        github_tokens = github_tokens.split(",")
    else:
        raise ValueError("No valid GitHub tokens found. Please set the GITHUB_TOKEN_x environment variables.")
    
    current_token_index = 0
    run_api_fetches()