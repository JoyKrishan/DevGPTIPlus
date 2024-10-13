import json
import requests
import csv
import os
from datetime import datetime
import matplotlib.pyplot as plt
from matplotlib.pyplot import cm
import numpy as np


if not os.path.exists("data"):
    os.makedirs("data")

# GitHub Authentication function
def github_auth(url, lsttoken, ct):
    jsonData = None
    try:
        ct = ct % len(lstTokens)
        headers = {'Authorization': 'Bearer {}'.format(lsttoken[ct])}
        request = requests.get(url, headers=headers)
        jsonData = json.loads(request.content)
        ct += 1
    except Exception as e:
        pass
        print(e)
    return jsonData, ct

# @dictFiles, empty dictionary of files
# @lstTokens, GitHub authentication tokens
# @repo, GitHub repo
def countfiles(dictfiles, lsttokens, repo):
    ipage = 1  # url page counter
    ct = 0  # token counter
    end_date = 0

    try:
    # loop through all the commit pages until the last returned empty page
        while True:
            spage = str(ipage)
            commitsUrl = 'https://api.github.com/repos/' + repo + '/commits?page=' + spage + '&per_page=100'
            jsonCommits, ct = github_auth(commitsUrl, lsttokens, ct)

            # break out of the while loop if there are no more commits in the pages
            if len(jsonCommits) == 0:
                break
            # iterate through the list of commits in spage
            for i, shaObject in enumerate(jsonCommits):
                sha = shaObject['sha']
                author = shaObject['commit']['author']['name']
                touch_date = shaObject['commit']['author']['date'] 
                touch_week = datetime.strptime(touch_date, "%Y-%m-%dT%H:%M:%SZ").strftime("%U")
                if i == 0 and ipage == 1:
                    end_date = datetime.strptime(touch_date, "%Y-%m-%dT%H:%M:%SZ")
                    end_date = end_date.date()
                start_date = datetime.strptime(touch_date, "%Y-%m-%dT%H:%M:%SZ")
                start_date = start_date.date()

                week_count = (end_date - start_date).days // 7

                # For each commit, use the GitHub commit API to extract the files touched by the commit
                shaUrl = 'https://api.github.com/repos/' + repo + '/commits/' + sha
                shaDetails, ct = github_auth(shaUrl, lsttokens, ct)
                filesjson = shaDetails['files']
                for filenameObj in filesjson:
                    filename = filenameObj['filename']
                    if filename.endswith(('.c', '.cpp', '.java', '.kt', '.h')):
                        dictfiles.setdefault(filename, {'changes': [], 'authors': set()})
                        dictfiles[filename]['changes'].append({'week_count': week_count, 'author': author})
                        dictfiles[filename]['authors'].add(author)
                        print(f"Author: {author}, Touch Date: {touch_date}, File: {filename}, Week: {touch_week}, WeekCount: {week_count}")
            ipage += 1
        
    
    except:
        print("Error receiving data")
        exit(0)

# GitHub repo
repo = 'scottyab/rootbeer'
# repo = 'Skyscanner/backpack' # This repo is commit heavy. It takes long to finish executing
# repo = 'k9mail/k-9' # This repo is commit heavy. It takes long to finish executing
# repo = 'mendhak/gpslogger'

# put your tokens here
# Remember to empty the list when going to commit to GitHub.
# Otherwise, they will all be reverted, and you will have to re-create them
# I would advise creating more than one token for repos with heavy commits
lstTokens = [""]

dictfiles = dict()
countfiles(dictfiles, lstTokens, repo)
print('Total number of files: ' + str(len(dictfiles)))

# Prepare data for the scatter plot
files = list(dictfiles.keys())
changes_per_file = []
for file in files:
    for i in dictfiles[file]['changes']:
        changes_per_file.append(i['week_count'])
# changes_per_file = [dictfiles[file]['changes']['week_count'] for file in files]
authors_per_file = [dictfiles[file]['authors'] for file in files]

max_value = max(changes_per_file)

# Prepare data for the scatter plot
files = list(dictfiles.keys())

plt.figure(figsize=(10, 6))

author_color_map = {author: plt.cm.tab20(i) for i, author in enumerate(set([author for authors in authors_per_file for author in authors]))}

legend = {}

# Iterate through files and their changes
for i, (filename, changes) in enumerate(dictfiles.items()):
    # Iterate through changes for each file
    for change in changes['changes']:
        change['week_count'] = max_value - change['week_count']
        week_count = change['week_count']
        author = change['author']
        
        # Plot a point for each change
        plt.scatter(i, week_count, label=f"{author}", marker='o', alpha=0.7, color=author_color_map[change['author']])
        legend[author] = author_color_map[change['author']]

# Customize plot labels and title
plt.xlabel('File Index')
plt.ylabel('Weeks')
plt.title('Scatter Plot of File Changes over Weeks by Author')
plt.xticks(range(len(files)), range(len(files)))

legend_handles = [plt.Line2D([0], [0], marker='o', color='w', label=label, 
                              markerfacecolor=color, markersize=10) 
                  for label, color in legend.items()]
plt.legend(handles=legend_handles, loc='upper right', fontsize='small')

# Save the plot as a PNG file
file = repo.split('/')[1]
file_output = 'data/scatter_plot_file_changes_by_author_' + file + '.png'
plt.savefig(file_output, bbox_inches='tight')

# Show the plot
plt.show()