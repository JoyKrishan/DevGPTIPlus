import math
import itertools

def euclDistance(dataPoint, trData):
    distance = []
    for i in trData:
        currDistance = 0.0
        for (j,k) in zip(itertools.islice(dataPoint,1,None),itertools.islice(i,1,None)):
            currDistance += (float(j) - float(k)) ** 2
        distance.append(math.sqrt(currDistance))
    return distance