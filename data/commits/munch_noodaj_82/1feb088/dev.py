import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import re

touchFileName = "data/touches_rootbeer.csv"

touches = pd.read_csv(touchFileName)            # read CSV; collected from michael_authorsFileTouches.py

authors = np.delete(touches.columns.values,0)   # remove garbage cell
files = touches.iloc[:,0]                       # file names
week = touches.iloc[:,1:]                       # times at which the author modified: to be processed
rowCount = week.shape[0]                        # number of files
columnCount = week.shape[1]                     # number of authors

week = week.fillna('')                          # blank out NaN cells

# convert string formatted times to datetime variables
for i in range(rowCount):
    for j in range (columnCount):
        if not (week.iloc[i,j]==''):
            dates = re.sub('[\'\[\,\]]','',week.iloc[i,j]).split(' ')   # remove python list formatting from the string
            for k in range(len(dates)):                                 # convert each string date to numpy datetime format
                dates[k] = np.datetime64(dates[k])
            week.iat[i,j] = dates

# sort all commit times to find the start date
allWeeks = []
for i in range(rowCount):
     for j in range(columnCount):
          for k in range(len(week.iloc[i,j])):
               allWeeks.append(week.iloc[i,j][k])                       # add each time entry to a single list
allWeeks.sort()                                                         # sort list
startDate = allWeeks[0]                                                 # get the earliest date/start date

# convert commit times to weeks since the start date
for i in range(rowCount):
     for j in range(columnCount):
          for k in range(len(week.iloc[i,j])):
               week.iat[i,j][k] = (week.iloc[i,j][k] - startDate)/604800    # subtraction given in seconds, divided to put into weeks

# create scatterplot of commits (x-axis) vs weeks (y-axis) where each color is a different author
for i in range(len(authors)):                           # plot an author at a time
    y = []                                              # weeks
    x = []                                              # commits
    for j in range(len(files)):                             # iterate through all the files an author modified
        for k in range(len(week.iloc[j,i])):                    # add each week difference per file to y
            y.append(week.iloc[j,i][k])                         # amplify the file number through x
            x.append(j + 1)
    graph = plt.scatter(x,y,label=authors[i])
        
plt.legend(loc = 'lower left',bbox_to_anchor = (1,0))   # make legend show outside the graph at lower left corner
plt.title("File Changes vs Weeks")
plt.savefig('data/file_vs_weeks', bbox_inches = 'tight')# save figure and make border tight so the window doesnt cut legend off


# # additional graph for executive report: bar graph
# authorX = []
# changesY = []
# for i in range(len(authors)):                       # iterate through each author
#     changes = 0
#     for j in range (len(files)):
#         for k in range(len(week.iloc[j,i])):            # increment the number of changes the author on any file
#             changes+=1                              
#     changesY.append(changes)                        # add number of changes to list
#     authorX.append(authors[i][0:4])                 # add shortened name of author name to list
# productivity = plt.bar(authorX,changesY)        # create bar graph
# plt.xticks(rotation=45, ha='right')             # rotate names and adjust alignment
# plt.title("Commits per Developer")              # title