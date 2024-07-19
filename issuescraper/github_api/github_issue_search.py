import requests, os
from dotenv import load_dotenv
from datetime import datetime, timedelta
import json
import time


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

# Function to fetch issues within a given date range
def fetch_issues(query, start_date, end_date, github_token):
    url = 'https://api.github.com/search/issues'
    headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': f'token {github_token}'}
    per_page = 100
    page = 1
    issues = []

    while True:
        params = {
            'q': f'{query} created:{start_date}..{end_date}',
            'per_page': per_page,
            'page': page
        }
        response = requests.get(url, params=params, headers=headers)
        if response.status_code != 200:
            print(f"Error fetching results: {response.status_code}")
            print(response.text)
            break
        data = response.json()
        issues.extend(data.get('items', []))
        if len(data.get('items', [])) < per_page:
            break
        page += 1
        time.sleep(5)

    return issues


if __name__ == "__main__":
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
 
    # Define the query and the total date range
    queries = {
        'ChatGPT':'https://chat.openai.com/share',
        'Gemini': 'g.co/gemini/share'}

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
        current_token_index = 1

        # Loop through the entire date range, fetching issues in intervals
        while current_start < end_date:
    
            current_token = github_tokens[current_token_index]
            remaining, reset = check_rate_limit(current_token)
            current_end = current_start + interval

            if remaining == 0:
                # If the current token is exhausted, switch to the next token
                current_token_index = (current_token_index + 1) % len(github_tokens)
                current_token = github_tokens[current_token_index]
                remaining, reset = check_rate_limit(current_token)
                
                if remaining == 0:
                    # If all tokens are exhausted, wait until the reset time
                    reset_time = datetime.fromtimestamp(reset)
                    wait_time = (reset_time - datetime.now()).total_seconds()
                    print(f"All tokens exhausted. Waiting for {wait_time // 60:.0f} minutes.")
                    time.sleep(wait_time)

            if current_end > end_date:
                current_end = end_date

            issues = fetch_issues(search_params, current_start.strftime('%Y-%m-%d'), current_end.strftime('%Y-%m-%d'), current_token)
            all_issues.extend(issues)
            print(f"Fetched {len(issues)} issues from {current_start.strftime('%Y-%m-%d')} to {current_end.strftime('%Y-%m-%d')}")
            current_start = current_end + timedelta(days=1)

        print(f"Total issues fetched: {len(all_issues)}")

        # Save the results to a file
        with open(f'{name}_issues.json', 'w') as f:
            json.dump(all_issues, f, indent=2)