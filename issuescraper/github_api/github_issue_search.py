import requests, os
from dotenv import load_dotenv


import requests

url = 'https://api.github.com/search/issues?'
params = {'q': 'https://chat.openai.com/share', 'page':5, 'per_page':200}
load_dotenv()
results = []
github_token = os.getenv('GITHUB_TOKEN')

while True:
    response = requests.get(url, params=params, headers={'Accept': 'application/vnd.github.v3+json', "Authorization": f"token {github_token}"})
    if response.status_code != 200:
        response.raise_for_status()
        print(f"Error fetching results: {response.status_code}")
        break
    data = response.json()
    results.extend(data['items'])
    if 'next' in response.links.keys():
        url = response.links['next']['url']
    else:
        break

print(f"Total results fetched: {len(results)}")


# def search_issues(query, github_token, page):
#     url = f"https://api.github.com/search/issues?q={query}&page={page}&per_page=100"
#     headers = {
#         "Accept": "application/vnd.github.v3+json",
#         "Authorization": f"token {github_token}"
#     }
#     response = requests.get(url, headers=headers)
#     response.raise_for_status()
#     return response.json()
 
# def find_total_issues(name, query, github_token):
#     issues = []
#     page = 1
#     # while True:
#     #     if page > 10:
#     #         break
#     #     result = search_issues(query, github_token, page)
#     #     issues.extend(result.get('items'))
#     #     page += 1
    
#     print(f"Found {len(issues)} issues in {name}")

# def main():
#     load_dotenv()

#     github_token = os.getenv('GITHUB_TOKEN')

#     search_queries = {
#     'Gemini' : 'https://g.co/gemini/share',
#     'ChatGPT': 'https://chat.openai.com/share'
#     }

#     for key, query in search_queries.items():
#         find_total_issues(key, query, github_token)

# main()