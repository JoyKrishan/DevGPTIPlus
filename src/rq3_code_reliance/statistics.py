import os
import sys
from scipy.stats import kruskal

DATA = {
    "Python": [27, 187],  # issues that code inc. and total issues
    "TypeScript": [10, 87],
    "JavaScript": [15, 72],
    "Java": [0, 9],
    "C++": [14, 29],
    "C#": [6, 32]
}   

TYPES_OF_CLONES = {
    "Python" : [9, 11, 7],
    "TypeScript": [7, 2, 1],
    "JavaScript": [7, 1, 7],
    "Java": [0, 0, 0],
    "C++": [8, 3, 3],
    "C#": [5, 1, 0]
}

def calculate_kruskal(groups):
    return kruskal(*groups)

if __name__ == "__main__":
    calculate_diff = lambda x: x[1] - x[0]
    ratios = list(map(calculate_diff, DATA.values()))
    print(calculate_kruskal(ratios))    
    
    # value = calculate_kruskal(TYPES_OF_CLONES.values())
    # print(value)
    