# Taylor_scatterplot.py Documentation


# What does it do?

# Generates a scatter plot visualizing data points with weeks, mapped file number, and author information.
# Each data point represents a commit, displaying the number of weeks since the last commit, the mapped file number, and the author.
# Authors are represented by different colors for easy identification.


# How do we use it?

# Ensure you have the required libraries installed: matplotlib, csv.
# Prepare your data in a CSV file named commits_rootbeer.csv in the data directory.
# Run the script.
# View the generated scatter plot.
# Note:

# Ensure the CSV file follows the expected format with columns: 'Author', 'File', 'Date'.
# The script automatically generates colors for each author for visual distinction.
# Data points are plotted with weeks on the y-axis and mapped file number on the x-axis.
# Each author's color is represented in the legend for reference.


# Example Usage:

# python3 Taylor_scatterplot.py

import matplotlib
import matplotlib.pyplot as plt
import matplotlib.colors as colors
import csv
import datetime
import random
from datetime import date
##########################################################
def generate_random_color():
  return "#{:06x}".format(random.randint(0, 0xFFFFFF))
##########################################################
def map_author_to_color(authors):
  author_color_map = {}
  for author in set(authors):
    author_color_map[author] = generate_random_color()
  return author_color_map
##########################################################
def map_file_to_number(files):
  file_to_integer_mapping = {}
  integer_counter = 0
  for file in files:
    if file not in file_to_integer_mapping:
      file_to_integer_mapping[file] = integer_counter
      integer_counter += 1
  
  files_mapped = []

  for i in range(len(files)):
    files_mapped.append(file_to_integer_mapping[files[i]])

  return files_mapped
##########################################################
def weeks_between(d1, d2):
  d1 = date.fromisoformat(d1)
  d2 = date.fromisoformat(d2)
  days_difference = (d2 - d1).days

  return days_difference//7
##########################################################
authors = []
files = []
dates = []

with open('data/commits_rootbeer.csv') as file:
  csvFile = csv.DictReader(file)
  for row in csvFile:
    authors.append(row['Author'])
    files.append(row['File'])
    dates.append(row['Date'])

author_color_map = map_author_to_color(authors)
files_map = map_file_to_number(files)

for i in range(len(dates)):
  dates[i] = dates[i][:10]

# (weeks, file, author) format
entries = []
for i in range(len(dates)):
  weeks = weeks_between(dates[-1], dates[i])
  entries.append((weeks, files_map[i], authors[i]))
  print(entries[i])

weeks_data, files_data, authors_data = zip(*entries)

# Map authors to colors
author_colors = [author_color_map[author] for author in authors_data]

# Plotting the scatter plot
plt.scatter(files_data, weeks_data, c=author_colors, cmap='viridis', alpha=0.8, edgecolors='w')

# Adding labels and title
plt.ylabel('Weeks')
plt.xlabel('Mapped File Number')
plt.title('Scatter Plot of Weeks, Mapped File Number, and Author')

# Show the color legend
for author, color in author_color_map.items():
    plt.scatter([], [], c=color, label=author)

plt.legend(loc='upper right', title="Authors")

# Show the plot
plt.show()