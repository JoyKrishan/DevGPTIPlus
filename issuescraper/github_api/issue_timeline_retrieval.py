import os
import requests
import json
import datetime
import time
from dotenv import load_dotenv
import logging
import csv

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

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


def get_active_token(github_tokens):
    current_token_index = 0
    
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


def fetch_issue_timeline(issue_url, github_token): # API request One
    headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': f'token {github_token}'}
    issue_timeline_url = issue_url + '/timeline'
    response = requests.get(issue_timeline_url, headers=headers)

    if response.status_code != 200:
        print(f"Error fetching results: {response.status_code}")
        print(response.text)

    data = response.json()
    return data          


def fetch_repo_primary_language(repo_url, github_token): # API request Two
    headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': f'token {github_token}'}
    repo_language_url = repo_url + '/languages'
    response = requests.get(repo_language_url, headers=headers)

    if response.status_code != 200:
        print(f"Error fetching results: {response.status_code}")
        print(response.text)

    data = response.json()

    if data:
        primary_language = max(data, key=data.get)
        return primary_language
    else:
        return None



def read_and_process_json(file_path, github_tokens, output_json_path, output_csv_path):
    with open(file_path, 'r') as f:
        data = json.load(f)

    total_items = len(data)
    processed_count = 0
    start_time = time.time()

    for item in data:
        current_token = get_active_token(github_tokens)

        issue_url = item['url']
        author = item['user']['login']
        repo_name = item['repository_url'].split('/')[-1]
        repo_language = fetch_repo_primary_language(item['repository_url'], current_token)
        issue_number = item['number']
        title = item['title']
        body = item['body']
        created_at = item['created_at']
        updated_at = item['updated_at']
        closed_at = item['closed_at']
        state = item['state'].upper()
        labels = [label_item.get('name', '') for label_item in item['labels']]
        time.sleep(3)
        timeline_data = fetch_issue_timeline(issue_url, current_token)
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

        processed_item = {
            'issue_url': issue_url,
            'author': author,
            'repo_name': repo_name,
            'repo_language': repo_language,
            'issue_number': issue_number,
            'title': title,
            'body': body,
            'created_at': created_at,
            'updated_at': updated_at,
            'closed_at': closed_at,
            'state': state,
            'labels': labels,
            'events': events,
            'event_actors': event_actors,
            'committers': committers,
            'commit_shas': commit_shas,
            'commit_urls': commit_urls,
            'commit_messages': commit_messages
        }

        save_to_json(processed_item, output_json_path)
        save_to_csv(processed_item, output_csv_path)
        processed_count += 1

        # Log progress every 10 items
        if processed_count % 10 == 0:
            logging.info(f"{processed_count} items processed out of {total_items}")

    total_time = time.time() - start_time
    logging.info(f"Processing complete. Total items processed: {processed_count}")
    logging.info(f"Total time taken: {total_time:.2f} seconds")


def save_to_json(data, output_file_path):
    with open(output_file_path, 'a') as f:
        json.dump(data, f)
        f.write('\n')


def save_to_csv(data, output_file_path):
    header = ['issue_url', 'author', 'repo_name', 'repo_language', 'issue_number', 'title', 'body', 'created_at', 'updated_at', 'closed_at', 'state', 'labels', 'events', 'event_actors', 'committers', 'commit_shas', 'commit_urls', 'commit_messages']

    # Check if file exists to write header or not
    file_exists = os.path.isfile(output_file_path)
    with open(output_file_path, 'a', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=header)

        if not file_exists:
            writer.writeheader()
        # Convert list fields to strings
        for key in ['labels', 'events', 'event_actors', 'committers', 'commit_shas', 'commit_urls', 'commit_messages']:
            data[key] = " ".join(data[key])

        writer.writerow(data)
        
if __name__ == '__main__':
    load_dotenv()

    github_tokens = [
        os.getenv("GITHUB_TOKEN_ONE"),
        os.getenv("GITHUB_TOKEN_TWO"),
        os.getenv("GITHUB_TOKEN_THREE")
    ]

    # Validate the GitHub token
    github_tokens = [token for token in github_tokens if token]
    if not github_tokens:
        raise ValueError("No valid GitHub tokens found. Please set the GITHUB_TOKEN_x environment variables.")
    
    input_file_path = 'ChatGPT_issues.json'

    output_json_file_path = 'ChatGPT_processed_issues.json'
    output_csv_file_path = 'ChatGPT_processed_issues.csv'

    read_and_process_json(input_file_path, github_tokens, output_json_file_path, output_csv_file_path)