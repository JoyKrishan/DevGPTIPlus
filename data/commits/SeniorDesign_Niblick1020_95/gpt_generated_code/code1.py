import json
import requests
import csv
import os

def create_data_directory():
    """Ensure the data directory exists."""
    if not os.path.exists("data"):
        os.makedirs("data")

def authenticate_github(url, tokens, token_index):
    """Authenticate with GitHub and return the JSON response."""
    try:
        token_index = token_index % len(tokens)
        headers = {'Authorization': 'Bearer {}'.format(tokens[token_index])}
        response = requests.get(url, headers=headers)
        return json.loads(response.content), token_index + 1
    except Exception as e:
        print(e)
        return None, token_index

def get_repo_commits(repo, tokens):
    """Retrieve commits from a GitHub repository."""
    commits = []
    page = 1
    token_index = 0

    while True:
        commits_url = f'https://api.github.com/repos/{repo}/commits?page={page}&per_page=100'
        commits_data, token_index = authenticate_github(commits_url, tokens, token_index)

        if not commits_data:
            break

        commits.extend(commits_data)
        if len(commits_data) < 100:
            break

        page += 1

    return commits

def count_files_in_commits(commits, repo, tokens):
    """Count the number of times each file is touched in the commits."""
    file_counts = {}
    token_index = 0

    for commit in commits:
        sha = commit['sha']
        commit_url = f'https://api.github.com/repos/{repo}/commits/{sha}'
        commit_details, token_index = authenticate_github(commit_url, tokens, token_index)

        if commit_details and 'files' in commit_details:
            for file in commit_details['files']:
                filename = file['filename']
                file_counts[filename] = file_counts.get(filename, 0) + 1

    return file_counts

def save_counts_to_csv(file_counts, output_file):
    """Save the file touch counts to a CSV file."""
    with open(output_file, 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["Filename", "Touches"])
        for filename, count in file_counts.items():
            writer.writerow([filename, count])

def main():
    repo = 'scottyab/rootbeer'
    tokens = ["your_token_here"]
    create_data_directory()

    commits = get_repo_commits(repo, tokens)
    file_counts = count_files_in_commits(commits, repo, tokens)

    output_file = f'data/{repo.split("/")[1]}_file_counts.csv'
    save_counts_to_csv(file_counts, output_file)

    print(f'Total number of files: {len(file_counts)}')
    most_touched_file = max(file_counts, key=file_counts.get)
    print(f'The file {most_touched_file} has been touched {file_counts[most_touched_file]} times.')

if __name__ == '__main__':
    main()