import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# Function to read CSV data into a DataFrame
def read_csv_to_df(file_path):
    return pd.read_csv(file_path)

# Read both CSV files
data_file = read_csv_to_df('data/file_rootbeer.csv')
data_author = read_csv_to_df('data/author_rootbeer.csv')

# Convert Date column to datetime and calculate weeks
data_author['Date'] = pd.to_datetime(data_author['Date'])
min_date = data_author['Date'].min()
data_author['Weeks'] =  [(x - min_date).days // 7 for x in data_author['Date']]

# Merge the two dataframes on 'Filename'
merged_data = pd.merge(data_author, data_file, on='Filename')

# Assign unique color to each author
authors = merged_data['Author'].unique()
colors = plt.cm.rainbow(np.linspace(0, 1.5, len(authors) + 12))
color_dict = {author: color for author, color in zip(authors, colors)}

# Plotting the scatter plot for each author
for author in authors:
    author_data = merged_data[merged_data['Author'] == author]
    x = author_data['Filename']
    y = author_data['Weeks']
    plt.scatter(x, y, color=color_dict[author], label=author)

# Customize the x-axis ticks and labels
plt.xticks(np.arange(0, 36, step=1),  labels=[str(i**1) for i in range(36)])
plt.xlabel('Files')
plt.ylabel('Weeks')
plt.legend(bbox_to_anchor=(1.05, 1), loc='upper left')  # Sets legend to the right side
plt.tight_layout()  # Spreads evently to the output
plt.savefig('data/scatterplot.png', dpi=300)
plt.show()