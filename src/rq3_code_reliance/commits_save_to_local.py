import os
import re
import logging
import requests
import json
import sys
import csv 

project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../"))
sys.path.append(project_dir)

from src.utils.constants import LANGUAGES_EXTENSIONS as ext_map

log_file = os.path.join(project_dir, "data", "logs/commits_crawling.log")
FORMAT_STRING = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
logging.basicConfig(level=logging.DEBUG, format=FORMAT_STRING, force=True, handlers=[logging.FileHandler(log_file),
                                                                                    logging.StreamHandler()])

logging.getLogger('urllib3').setLevel(logging.WARNING)
mylogger = logging.getLogger(__name__)

def get_diff(diff_url:str):
    response = requests.get(diff_url)   
    if response.status_code == 200:
        return response.text
    else:
        mylogger.error(f"Error in getting diff: {diff_url}")
        return None
    

def parse_diff(diff):
    changes = {}
    current_file = None
    hunks = []
    for line in diff.splitlines():
        file_match = re.match(r'^diff --git a/(.+) b/(.+)', line)
        if file_match:
            if current_file:
                changes[current_file] = hunks
                hunks = []
            current_file = file_match.group(2)
        elif current_file and line.startswith('+') and not line.startswith('+++'):
            hunks.append(line[1:])
    
    if current_file:
        changes[current_file] = hunks
    
    return changes


def transform_commit_url(commit_url:str):
    match = re.match(r'https://api.github.com/repos/([^/]+)/([^/]+)/git/commits/([^/]+)', commit_url)
    try:
        owner, repo, commit = match.groups()
        diff_url = f"https://github.com/{owner}/{repo}/commit/{commit}.diff"
        return diff_url
    except Exception as e:
        mylogger.error(f"Error in transforming commit URL: {commit_url}")


def save_changes(changes, save_path):
    file_count = {}
    file_exts = set()
    try:
        for file_path, hunks in changes.items():
            if hunks:
                file_ext = os.path.splitext(file_path)[1]
                file_exts.add(file_ext)
                base_name = f"dev{file_count.get(file_path, 0) + 1 if file_path in file_count else ''}{file_ext}"
                full_path = os.path.join(save_path, base_name)
                with open(full_path, 'w') as f:
                    f.write('\n'.join(hunks))
                
                file_count[file_path] = file_count.get(file_path, 0) + 1
    except Exception as e:
        mylogger.error(f"Error in saving changes: {e}")
    return file_exts

     
def get_save_commits(commit_urls:list, dir_path:str, committers:list, commit_shas:list):
    exts = set()
    for idx, commit_url in enumerate(commit_urls):
        save_path = os.path.join(dir_path, commit_shas[idx])
        os.makedirs(save_path, exist_ok=True)
        diff_url = transform_commit_url(commit_url)
        diff = get_diff(diff_url)    
        if diff:
            changes = parse_diff(diff)
            exts.update(save_changes(changes, save_path))
        else:
            mylogger.error(f"Error in getting diff for issue: {commit_url}")
    return exts
        

def get_save_gpt_generated_code(gpt_data, dir_path):
    all_extensions = set()
    num_of_sharings = len(gpt_data)
    statuses = []
    mentions = []
    for data in gpt_data:
        status = data["Status"]
        statuses.append(status)
        mentions.append(data["Mention"])
        if status == 200:
            conversations = data["Conversations"]

            for conversation in conversations:
                list_of_code = conversation["ListOfCode"]
                if list_of_code:
                    full_path = os.path.join(dir_path, "gpt_generated_code")
                    os.makedirs(full_path, exist_ok=True)
                    all_extensions.update(save_code_content(list_of_code, save_path=full_path))
        
    return all_extensions, statuses, mentions, num_of_sharings


def save_code_content(code_list, save_path):
    saved_code_files_ext = set()
    count = 1
    for code in code_list: 
        ext = ext_map.get(code["Type"], ".txt")
        saved_code_files_ext.add(ext)
        base_name = f"code{count}{ext}"
        gpt_full_path = os.path.join(save_path, base_name)
        
        with open(gpt_full_path, 'w') as f:
            f.write(code["Content"])

        count += 1
    return saved_code_files_ext


def crawl_and_save(data:list):
    all_saved_infos = []
    for issue in data:
        if issue["commit_URLs"]:
            # code block to save the committed code
            dir_path = f"data/commits/{issue['repo_name']}_{issue['issue_author']}_{issue['issue_number']}"
            os.makedirs(dir_path, exist_ok=True)

            commit_file_exts = get_save_commits(issue["commit_URLs"], dir_path, issue["committers"], issue['commit_shas'])
            chatgpt_all_extensions, chatgpt_statuses, chatgpt_mentions, chatgpt_num_of_sharings = get_save_gpt_generated_code(issue["ChatgptSharing"], dir_path)

            all_saved_infos.append({
                "issue_number": issue["issue_number"],
                "repo_name": issue["repo_name"],
                "num_of_commits": len(issue["commit_URLs"]),
                "commit_file_extensions": ",".join(commit_file_exts),
                "committer_dev": ",".join(issue["committers"]),
                "num_of_ChatGPTSharings": chatgpt_num_of_sharings,
                "ChatGPT_all_extensions": ",".join(chatgpt_all_extensions),
                "ChatGPTSharings_response_status": ",".join(chatgpt_statuses),
                "ChatGPT_mentions": ",".join(chatgpt_mentions),
            })
            mylogger.info(f"Saved all data for issue: {issue['repo_name']}-{issue['issue_number']}")
    return all_saved_infos


if __name__ == "__main__":
    chatgpt_data_file = "data/ChatGPT_issues_v2.0_cleaned.json"
    csv_output_file = "data/commit_and_gpt_info.csv"

    data_file_path = os.path.join(project_dir, chatgpt_data_file)
    csv_file = os.path.join(project_dir, csv_output_file)   

    # read data from json file
    with open(data_file_path, 'r') as f:
        data = json.load(f)

    # crawl and save committed code and gptcode
    all_saved_infos = crawl_and_save(data)

    # save to csv
    with open(csv_file, "w") as f:
        writer = csv.DictWriter(f, fieldnames=all_saved_infos[0].keys())
        writer.writeheader()
        writer.writerows(all_saved_infos)