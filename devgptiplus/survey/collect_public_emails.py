import os
import json 
import csv
import requests

import time 
from datetime import datetime 
from tqdm import tqdm 
from dotenv import load_dotenv

from devgptiplus.config.path_constants import ROOT_DIR

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

def get_unique_contributors_in_project(repo_URL):
    all_contributors = set()
    page = 1
    repos_contributors_url = repo_URL + '/contributors'
    while True:
        try:
            current_token = get_active_token()
            headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': f'Bearer {current_token}'}
            params = {
                "per_page": 100,
                "page": page
            }
            response = requests.get(repos_contributors_url, params=params, headers=headers)
            if response.status_code == 200:
                response_data = response.json()
                all_contributors.update([contributor['login'] for contributor in response_data if 'login' in contributor])
            else:
                break
            if len(response_data) < 100:
                break
            page += 1
            params["page"] = page
        except Exception as _:
            break
        
    return all_contributors

def get_user_email_from_contributors(data):
    user_email_addresses = []
    page = 1
    for issue_item in tqdm(data, desc="Collecting emails from contributors:"):
        try:
            params = {
            "per_page": 100,
            "page": page
                }
            repos_contributors_url = issue_item['repo_URL'] + '/contributors'
            current_token = get_active_token()
            headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': f'Bearer {current_token}'}
            response = requests.get(repos_contributors_url, params=params, headers=headers)
            if response.status_code == 200:
                response_data = response.json()
        except Exception as e:
            continue
        
        contributors = set()
        while True:
            for contributor_item in response_data:
                if 'login' in contributor_item:
                    contributors.add(contributor_item['login'])
            if len(response_data) < 100:
                break
            page += 1
            params["page"] = page
            try:
                response = requests.get(repos_contributors_url, params=params, headers=headers)
                if response.status_code == 200:
                    response_data = response.json()
                else:
                    break
            except Exception as e:
                break
        
        base_user_url = "https://api.github.com/users"
        
        for contributor in contributors:
            full_user_url = base_user_url + f"/{contributor}"
            try:
                current_token = get_active_token()
                headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': f'Bearer {current_token}'}
                response = requests.get(full_user_url, headers=headers)
                if response.status_code == 200:
                    response_data = response.json()
            except Exception as e:
                continue
            if response_data['email']:
                user_email_addresses.append({
                    "login": response_data['login'],
                    "email": response_data['email']
                })
   
    return user_email_addresses

def get_user_email_from_commits(data):
    user_email_addresses = []
    page = 1
    for issue_item in tqdm(data, desc="Collecting emails from commits:"):
        params = {
            "per_page": 100,
            "page": page
        }
        repos_commits_url = issue_item['repo_URL'] + '/commits'
        current_token = get_active_token()
        headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': f'Bearer {current_token}'}
        try:
            response = requests.get(repos_commits_url, params=params, headers=headers)
            if response.status_code == 200:
                response_data = response.json()
        except Exception as e:
            raise e
    
    for commit in response_data:
        author_email = commit['commit']['author']['email']
        if author_email:
            user_email_addresses.append({
                "login": commit['committer']['login'],
                "email": author_email
            })
    
    return user_email_addresses

def create_csv(data, save_filepath):
    fieldnames = ["login", "email"]
    
    with open(save_filepath, "w") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)
        
def total_unique_projects(data):
    unique_projects = set()
    
    for item in tqdm(data):
        repo_URL = item.get('repo_URL')
        if repo_URL:
           repo_URL = repo_URL.replace('https://api.github.com/repos', 'https://github.com/')
           response = requests.get(repo_URL)
           if not response.status_code == 404:
                unique_projects.add(repo_URL)                        
    return len(unique_projects)

def total_number_of_contributors(data, with_devgpt_link=True):
    total_contributors = set()
    if with_devgpt_link:
        for item in tqdm(data, desc="Counting contributors:"):
            repo_URL = item.get('repo_URL')
            if repo_URL:
                html_repo_URL = repo_URL.replace('https://api.github.com/repos', 'https://github.com/')
                response = requests.get(html_repo_URL)
                if not response.status_code == 404:
                    contributors_in_project = get_unique_contributors_in_project(repo_URL)
                    total_contributors.update(contributors_in_project)
                    print(f"Total number of contributors till now : {len(total_contributors)}")
        return total_contributors
    else:
        repos = []
        params = {
            "q": "stars:>=150",
            "sort": "stars",
            "order": "desc",
            "per_page": 100,
            "page": 1
            }
        while True:
            current_token = get_active_token()
            repos_url = "https://api.github.com/search/repositories"
            headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': f'Bearer {current_token}'}
            should_break = False
            try:
                response = requests.get(repos_url, params=params, headers=headers)
                if response.status_code == 200:
                    response_data = response.json()
                    items = response_data.get('items', [])
                    for item in tqdm(items, desc="Counting contributors in popular repositories:"):
                        repo_URL = item.get('url') 
                        if repo_URL:
                            html_repo_URL = repo_URL.replace('https://api.github.com/repos', 'https://github.com/')
                            response = requests.get(html_repo_URL)
                            if not response.status_code == 404:
                                contributors_in_project = get_unique_contributors_in_project(repo_URL)
                                total_contributors.update(contributors_in_project)
                                print(f"Total number of contributors till now : {len(total_contributors)}")
                                repos.append(repo_URL)
                                if len(repos) >= 1000:
                                    should_break = True
                                    break
                    if should_break:
                        break
                    params["page"] += 1
                    if len(items) < 100:
                        break
                else:
                    break
            except Exception as _:
                break
        return total_contributors

if __name__ == "__main__":
    load_dotenv(override=True)
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
    dataset_path = os.path.join(ROOT_DIR, 'files/dataset/DevGPTIPlus_full.json')
    with open(dataset_path, 'r') as f:
        data = json.load(f)
    
    # user_emails = [] 
    # user_emails.extend(get_user_email_from_commits(data))
    # user_emails.extend(get_user_email_from_contributors(data))
    # unique_emails = {frozenset(d.items()) for d in user_emails}
    # user_emails = [dict(items) for items in unique_emails]  
    # print(f"Total number of public user emails: f{len(user_emails)}")
    # total = total_unique_projects(data)
    # print(f"Total number of unique projects: {total}")
      
    total_contributors = total_number_of_contributors(data)
    print(f"Total number of unique contributors: {len(total_contributors)}")
    contributors_ossdevgpt = {
        "all": list(total_contributors)
    }
    with open("total_contributors_ossdevgpt.json" , 'w') as file:
         json.dump(contributors_ossdevgpt, file, indent=2)
    
    total_contributors_in_general = total_number_of_contributors(data, with_devgpt_link=False)
    print(f"Total number of contributors in general: {total_contributors_in_general}")
    contributors_oss = {
        "all": list(total_contributors_in_general)
    }
    with open("total_contributors_oss.json" , 'w') as file:
         json.dump(contributors_oss, file, indent=2)
    
    total_contributors_in_general.update(total_contributors)
    
    print("Total number of unique contributors in both sets", len(total_contributors_in_general))
    # save_filepath = os.path.join(ROOT_DIR, 'devgptiplus/survey', 'public_user_email_addresses.csv')
    # create_csv(user_emails, save_filepath)