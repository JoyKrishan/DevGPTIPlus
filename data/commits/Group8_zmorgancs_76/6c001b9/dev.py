import numpy as np  # Import numpy for array operations

    """
    K-Nearest Neighbors classification algorithm.

    Args:
    X_data (numpy.ndarray): Training data features.
    y_data (numpy.ndarray): Training data labels.
    X_query (numpy.ndarray): Query data features to classify.
    y_query (numpy.ndarray): True labels for the query data (for evaluation).
    k (int): Number of neighbors to consider.
    Returns:
    float: Accuracy of the classification algorithm.
    """
    prediction_values = []  # List to store predicted labels for query data
    # Get the number of samples in the query data and training data
    # Iterate over each sample in the query data
    for i in range(testCounter):
        minimum_distances = []  # List to store distances between query point and all training points
        # Calculate Euclidean distance between query point and each training point
        for j in range(trainingCounter):
            dist = np.sum(((X_query[i] - X_data[j])**2))  # Euclidean distance calculation
            minimum_distances.append((dist, y_data[j]))  # Append distance and label
        # Sort distances and get the k nearest neighbors
        sorted_dist = sorted(minimum_distances, key=lambda distance: distance[0])
        neighbors = np.array(sorted_dist[0:k])
        # Find the most common label among the k nearest neighbors
        distVal, counts = np.unique(neighbors, return_counts=True)
        modeIndex = np.argmax(counts)
        prediction_values.append(distVal[modeIndex])
    
    # Calculate accuracy by comparing predicted labels to true labels
    yLen = y_query.shape[0]
    classMatches = 0
    for p in range(yLen):
        if prediction_values[p] == y_query[p]:
            classMatches += 1
    return (classMatches / yLen) * 100  # Return accuracy as a percentage