import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime

# Read the CSV file
df = pd.read_csv('data/source_files_info_rootbeer.csv', parse_dates=['Dates'])

# Extract week information from Dates
df['Week'] = df['Dates'].dt.strftime('%Y-%U')

# Find the earliest date in the dataset
earliest_date = df['Dates'].min()

# Calculate the week differences from the earliest date
df['WeeksFromStart'] = (df['Dates'] - earliest_date).dt.days // 7

# Assign a unique file number to each file
file_numbers = {file: i for i, file in enumerate(df['Filename'].unique())}
df['FileNumber'] = df['Filename'].map(file_numbers)

# Create a color map for authors
author_colors = {author: f'C{i}' for i, author in enumerate(df['Authors'].unique())}

# Map author names to colors
df['Color'] = df['Authors'].map(author_colors)

# Create scatter plot
plt.figure(figsize=(10, 6))

for author, color in author_colors.items():
    author_data = df[df['Authors'] == author]
    plt.scatter(author_data['FileNumber'], author_data['WeeksFromStart'], c=color, label=author)

plt.title('Scatter Plot of File Numbers vs Project Lifetime')
plt.xlabel('File Numbers')
plt.ylabel('Project Lifetime (Weeks)')
plt.xticks(df['FileNumber'].unique())  # Set x-axis ticks to file numbers
plt.legend()

# Save the plot to a file
plt.savefig('data/scatter_plot.png')