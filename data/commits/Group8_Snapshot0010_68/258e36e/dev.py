    """
    Implement the k-Nearest Neighbors (KNN) algorithm for classification.

    Parameters:
    - kVal (int): The number of nearest neighbors to consider for classification.

    Reads data from 'MNIST_training.csv' as training data and 'MNIST_test.csv' as test data.
    Calculates the accuracy of the algorithm and prints the result.

    Returns:
    None
    """
    # Read training data from 'MNIST_training.csv'
    with open('MNIST_training.csv', 'r') as trainingFile:
        next(reader)  # Skip header
                trainingData.append(line)
    # Read test data from 'MNIST_test.csv'
    with open('MNIST_test.csv', 'r') as testFile:
        next(reader)  # Skip header
    # Classify each point in the test data

        # Calculate Euclidean distances between the test point and all training points
        pointDistance = np.array(euclDistance(i, trainingData))

        # Sort training points based on distances

        # Select k nearest neighbors
        for k in itertools.islice(closestPoints, kVal):

        # Predict the label based on majority vote
        predictedLabel = max(set(closestLabels), key=closestLabels.count)
    # Evaluate the accuracy of the predictions
    for (i, j) in zip(testData, predictedLabels):
        if i[0] == j:
            correctPredict += 1
    # Print the accuracy percentage without changing the format
    percentCorrect = float(correctPredict / len(testData)) * 100
    print(" The percent correct with a k value of " + str(kVal) + " is " + str(percentCorrect) + "%")