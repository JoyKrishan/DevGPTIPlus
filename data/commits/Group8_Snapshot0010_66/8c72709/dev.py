def euclidean_distance(data_point, training_data):
    distances = []
    for training_point in training_data:
        curr_distance = sum((float(j) - float(k)) ** 2 for j, k in zip(data_point[1:], training_point[1:]))
        distances.append(math.sqrt(curr_distance))
    return distances