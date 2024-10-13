#Keith Del Rosario
#Code Snippet Task 2.1

import math

def manhattan_distance(point1, point2):
    delta_x = abs(point1[0] - point2[0])
    delta_y = abs(point1[1] - point2[1])
    return delta_x + delta_y
def euclidean_distance(point1, point2):
    delta_x = point1[0] - point2[0]
    delta_y = point1[1] - point2[1]
    squared_distance = delta_x**2 + delta_y**2
    return math.sqrt(squared_distance)

# Example usage
point_a = (3, 4)
point_b = (6, 8)

manhattan_dist = manhattan_distance(point_a, point_b)
euclidean_dist = euclidean_distance(point_a, point_b)

print("Manhattan Distance:", manhattan_dist)
print("Euclidean Distance:", euclidean_dist)