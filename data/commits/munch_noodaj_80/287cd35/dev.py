import pandas as pd
import matplotlib.pyplot as plt
from matplotlib import cm

# GitHub repo
repo = 'scottyab/rootbeer'

# change this to the path of your file
fileOutput = 'data/author_' + repo.split('/')[1] + '.csv'

# Read the CSV file into a DataFrame
df = pd.read_csv(fileOutput)

# Convert the 'Date' column to datetime format
df['Date'] = pd.to_datetime(df['Date'])

# Find the earliest date in the dataset
start_date = df['Date'].min()

# Calculate the weeks since the start date for each entry
df['Weeks'] = (df['Date'] - start_date).dt.days // 7

# Count the number of occurrences for each file and sort files based on the count
file_occurrences = df['File'].value_counts()
sorted_files = file_occurrences.index

# Enumerate files and create a color map for unique authors
file_index_map = {file: i for i, file in enumerate(sorted_files)}
author_color_map = {author: f'C{i}' for i, author in enumerate(df['Author'].unique())}

# Use a broader color palette for better distinguishability
color_palette = cm._colormaps['tab20']

# Plot the scatter plot
fig, ax = plt.subplots()
for i, (author, color) in enumerate(author_color_map.items()):
    author_data = df[df['Author'] == author]
    ax.scatter(
        [file_index_map[file] for file in author_data['File']],
        author_data['Weeks'],
        label=author,
        color=color_palette(i)
    )

# Set axis labels and legend
ax.set_ylabel('Weeks')
ax.set_xlabel('Files')

# Enumerate the x-axis with the sorted files
ax.set_xticks(range(len(sorted_files)))
ax.set_xticklabels(range(len(sorted_files)))

ax.legend()

# Show the plot
plt.show()