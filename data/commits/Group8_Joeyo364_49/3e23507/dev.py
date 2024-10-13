import csv
import datetime
import matplotlib.pyplot as mpl
import numpy as np

""" Original scatterPlot.py code:

x = []
y = []
inputFile = "data/authorsFileTouches_data.csv"
with open(inputFile, 'r') as input:
    reader = csv.reader(input)
    next(reader, None) # skip header
    prevFile = None
    prevAuthor = None
    xCoord = -1
    for row in reader: # parse csv
        if row: # skip row if empty
            file = row[0]
            author = row[1]
            if file == prevFile:
                y.append((int(datetime.datetime.strptime(row[2], "%Y-%m-%dT%H:%M:%SZ").timestamp()) - 1400000000)*4)
                x.append(xCoord)
            else:
                xCoord += 1
                prevFile = file
                y.append((int(datetime.datetime.strptime(row[2], "%Y-%m-%dT%H:%M:%SZ").timestamp()) - 1400000000)*4)
                x.append(xCoord)
mpl.scatter(x, y, s=10, alpha=0.5)
mpl.show()





ChatGPT refactored code: """

def parse_timestamp(timestamp_str):
    return int(datetime.datetime.strptime(timestamp_str, "%Y-%m-%dT%H:%M:%SZ").timestamp())

def process_row(row, prev_file, x_coord, x_values, y_values):
    file, author, timestamp = row
    if file == prev_file:
        y_values.append((parse_timestamp(timestamp) - 1400000000) * 4)
        x_values.append(x_coord)
    else:
        x_coord += 1
        prev_file = file
        y_values.append((parse_timestamp(timestamp) - 1400000000) * 4)
        x_values.append(x_coord)
    return prev_file, x_coord

def main():
    x_values = []
    y_values = []
    input_file = "data/authorsFileTouches_data.csv"

    with open(input_file, 'r') as input:
        reader = csv.reader(input)
        next(reader, None)  # skip header

        prev_file = None
        x_coord = -1

        for row in reader:
            if row:  # skip row if empty
                prev_file, x_coord = process_row(row, prev_file, x_coord, x_values, y_values)

    plt.scatter(x_values, y_values, s=10, alpha=0.5)
    plt.show()

if __name__ == "__main__":
    main()