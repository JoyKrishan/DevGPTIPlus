#Task 2.1 Code Snippet
def calculate_distances(point1, point2):
    manhattan_dist = delta_x + delta_y
    euclidean_dist = math.sqrt(delta_x**2 + delta_y**2)
    return manhattan_dist, euclidean_dist
manhattan_dist, euclidean_dist = calculate_distances(point_a, point_b)