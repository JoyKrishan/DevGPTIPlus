"""
This script analyzes commit data from a CSV file and visualizes the contributions of different authors
over time in terms of the number of weeks since the project's creation date.

General Logic Flow:
1. Read commit data from a CSV file ('data/commits_rootbeer.csv').
2. Extract file names, authors, and commit dates from the CSV data.
3. Generate unique colors for each author to differentiate them in the plot.
4. Map file names to unique numbers for efficient plotting.
5. Convert commit dates to datetime objects and calculate the number of weeks since the project's creation.
6. Organize commit data by author, associating files and weeks with each author.
7. Plot the contributions of each author over time using a scatter plot.
8. Display a legend showing the mapping of authors to colors.
"""

import csv
import random
import datetime
import matplotlib.pyplot as plt
import matplotlib.colors as mcolors
from collections import defaultdict

# List to store file names, authors, and dates respectively
files, authors, dates = [], [], []

# Dictionary to map each unique file to a unique number
single_file_mapping = {}

# Dictionary to store unique colors assigned to each author
color_dict = {}

# Set to store unique author names
unique_author_set = set()

# Read CSV file and extract data
with open('data/commits_rootbeer.csv') as file:
    csvFile = csv.DictReader(file)
    for row in csvFile:
        files.append(row['Filename'])
        authors.append(row['Author'])
        dates.append(row['Date'])

# Generate a list of unique colors for authors
color_list = list(mcolors.TABLEAU_COLORS.values())

# Generate unique file numbers based on their appearances
single_file_appearances = list(set(files))
single_file_mapping = {file: i+1 for i, file in enumerate(single_file_appearances)}

# Convert commit dates to datetime objects and calculate weeks since project creation
dates = [datetime.date(*map(int, d[:10].split('-'))) for d in dates if d]
project_creation_date = min(dates, default=datetime.date(3000, 12, 31))
number_of_weeks = [(current_element_date - project_creation_date).days / 7 for current_element_date in dates]

# Organize commit data by author
files_by_author = defaultdict(list)
weeks_by_author = defaultdict(list)

# Organize commit data by author
# Initialize defaultdicts to store files and weeks by author
for current_index in range(len(authors)):
    # Retrieve current author, file, and weeks from their respective lists
    current_author = authors[current_index]
    current_file = single_file_mapping[files[current_index]]
    current_weeks = number_of_weeks[current_index]

    # Append current file to the list of files associated with the current author
    files_by_author[current_author].append(current_file)
    # Append current weeks to the list of weeks associated with the current author
    weeks_by_author[current_author].append(current_weeks)

# Create a scatter plot
fig, ax = plt.subplots(figsize=(10, 10))
ax.set_title('Visual Representation of The Authors and Their Contributions')
ax.set_xlabel('File Number')
ax.set_ylabel('Number of Weeks From Project Creation Date')

# Plot contributions of each author with unique colors
for current_author in set(authors):
    color = color_list[len(color_dict) % len(color_list)]
    color_dict[current_author] = color
    ax.scatter(files_by_author[current_author], weeks_by_author[current_author], color=color, label=current_author)

# Create legend with single entry per author
ax.legend(loc='upper right', title='List of Authors')

# Display the plot
plt.show()