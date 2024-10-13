import csv
import random
import datetime
import matplotlib.pyplot as plt
import matplotlib.colors as mcolors
from collections import defaultdict

files, authors, dates = [], [], []

single_file_mapping, color_dict = {}, {}

unique_author_set = set()

with open('data/commits_rootbeer.csv') as file:
    csvFile = csv.DictReader(file)
    for row in csvFile:
        files.append(row['Filename'])
        authors.append(row['Author'])
        dates.append(row['Date'])

# Issue 1: Efficient color generation without potential infinite loop
color_list = list(mcolors.TABLEAU_COLORS.values())

# Issue 2: Mapping files to unique numbers based on their uniqueness
single_file_appearances = list(set(files))
single_file_mapping = {file: i+1 for i, file in enumerate(single_file_appearances)}

dates = [datetime.date(*map(int, d[:10].split('-'))) for d in dates if d]
project_creation_date = min(dates, default=datetime.date(3000, 12, 31))
number_of_weeks = [(current_element_date - project_creation_date).days / 7 for current_element_date in dates]

# Issue 3: Using single_file_mapping for file numbers
files_by_author = defaultdict(list)
weeks_by_author = defaultdict(list)

for current_index in range(len(authors)):
    current_author = authors[current_index]
    current_file = single_file_mapping[files[current_index]]
    current_weeks = number_of_weeks[current_index]

    files_by_author[current_author].append(current_file)
    weeks_by_author[current_author].append(current_weeks)

fig, ax = plt.subplots(figsize=(10, 10))

ax.set_title('Visual Representation of The Authors and Their Contributions')
ax.set_xlabel('File Number')
ax.set_ylabel('Number of Weeks From Project Creation Date')

# Plotting with unique colors for each author
for current_author in set(authors):
    color = color_list[len(color_dict) % len(color_list)]
    color_dict[current_author] = color
    ax.scatter(files_by_author[current_author], weeks_by_author[current_author], color=color, label=current_author)

# Issue 3: Creating a single legend entry per author
ax.legend(loc='upper right', title='List of Authors')

plt.show()