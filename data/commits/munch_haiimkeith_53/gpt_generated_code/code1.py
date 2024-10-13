import math

def calculate_distances(point1, point2):
    delta_x = abs(point1[0] - point2[0])
    delta_y = abs(point1[1] - point2[1])
    
    manhattan_dist = delta_x + delta_y
    
    delta_x_squared = point1[0] - point2[0]
    delta_y_squared = point1[1] - point2[1]
    squared_distance = delta_x_squared**2 + delta_y_squared**2
    euclidean_dist = math.sqrt(squared_distance)
    
    return manhattan_dist, euclidean_dist

# Example usage
point_a = (3, 4)
point_b = (6, 8)

manhattan_dist, euclidean_dist = calculate_distances(point_a, point_b)

print("Manhattan Distance:", manhattan_dist)
print("Euclidean Distance:", euclidean_dist)