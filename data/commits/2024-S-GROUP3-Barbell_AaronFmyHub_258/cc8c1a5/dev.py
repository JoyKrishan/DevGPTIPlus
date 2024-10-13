API_TOKEN = os.environ['API_TOKEN']
    print(f'fetching data from url: {url}')
issues_json = []
for page in range(1,10):
    url = f'https://api.github.com/repos/UNLV-CS472-672/2024-S-GROUP3-Barbell/issues?state=all&per_page=100&page={page}'
    issues_json += get_gh_json(url)
comments_json = []
for page in range(1,10):
    url = f'https://api.github.com/repos/UNLV-CS472-672/2024-S-GROUP3-Barbell/issues/comments?per_page=100&page={page}'
    comments_json += get_gh_json(url)
pulls_json = []
for page in range(1,10):
    url = f'https://api.github.com/repos/UNLV-CS472-672/2024-S-GROUP3-Barbell/pulls?state=all&per_page=100&page={page}'
    pulls_json += get_gh_json(url)
reviews_json = []
for idx, pr in enumerate(pulls_json):
    try:
        pr_num = pr['number']
        url = f'https://api.github.com/repos/UNLV-CS472-672/2024-S-GROUP3-Barbell/pulls/{pr_num}/reviews'
        print(f'{idx}: fetching reviews for pr #{pr_num}')
        reviews_json += get_gh_json(url)
        time.sleep(1)
    except TypeError as e:
        print(e)


with open('json/dp3/issues.json', 'w') as f:
    json.dump(issues_json, f, indent=4)

with open('json/dp3/comments.json', 'w') as f:
    json.dump(comments_json, f, indent=4)

with open('json/dp3/pulls.json', 'w') as f:
    json.dump(pulls_json, f, indent=4)

with open('json/dp3/reviews.json', 'w') as f:
    json.dump(reviews_json, f, indent=4)