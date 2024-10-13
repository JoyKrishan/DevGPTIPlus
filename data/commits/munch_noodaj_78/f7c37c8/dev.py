import matplotlib.pyplot as plt
from datetime import datetime
import pandas as pd
import csv

# read CSV data (formatted as: filename, authorname, date)
csv_path = 'data/file_info_rootbeer.csv'
with open(csv_path, 'r') as csvfile:
    csvreader = csv.reader(csvfile)

    # skip header
    next(csvreader)

    # Extract file, name, and commit date from the data
    files = []
    names = []
    commit_dates = []
    for row in csvreader:
        files.append(row[0])
        names.append(row[1])
        commit_dates.append(datetime.strptime(row[2], '%Y-%m-%dT%H:%M:%SZ'))

# Create a DataFrame for plotting
plotData = pd.DataFrame({'Filename': files, 'Name': names, 'Commit_Date': commit_dates})

# Find the minimum commit date
oldestCommitDate = plotData['Commit_Date'].min()

# Create a new DataFrame for plotting with weeks since the minimum commit date
plotData['Week'] = (plotData['Commit_Date'] - oldestCommitDate).dt.days // 7

# Map each unique filename to a number
filename_mapping = {}
x_values = []

for filename in plotData['Filename'].unique():
    if filename not in filename_mapping:
        filename_mapping[filename] = len(filename_mapping) + 1

# Assign numbers to the x-axis values
plotData['FilenameNumber'] = plotData['Filename'].map(filename_mapping)

# By name as key, plot the scatterplot
for name in plotData['Name'].unique():
    nameData = plotData[plotData['Name'] == name]
    plt.scatter(nameData['FilenameNumber'], nameData['Week'], label=name)

plt.title('Author (GithubID) File Changes Over Weeks')
plt.xlabel('File')
plt.ylabel('Weeks From First Commit')
plt.legend()
plt.savefig('stacey_scatterplot.png')
plt.show()