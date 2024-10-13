import csv
import numpy as np

class KNNClassifier:
    def __init__(self, k):
        self.k = k
        # Initalizes the data and labels in the training csv file 
        self.train_data = np.empty((0,0))
        self.train_labels = np.empty((0,))
        
    # Calculates the Euclidean distance between two data points
    def euclidean_Dis(self, point1, point2):
        distance = np.sqrt(np.sum((point1 - point2) ** 2))
        return distance
    
    # Finds the k nearest neightbors
    def k_nearest_neighbors(self, test_instance):
        # For each test data compute euclidean distance with the training data 
        distances = np.array([self.euclidean_Dis(train_instance, test_instance) for train_instance in self.train_data])
        # grabs the k smallest distance indices 
        nearest_indices = np.argsort(distances)[:self.k]
        return nearest_indices
    
    # Function to decide majority class
    def majority_class(self, neighbors):
        label_counts = {}
        # Counts occurrences of each label among the neighbors
        for neighbor_index in neighbors:
            label = self.train_labels[neighbor_index]
            label_counts[label] = label_counts.get(label, 0) + 1
        # finds the label with the max count 
        prediction = max(label_counts, key=label_counts.get)
        return prediction
    
    # # Function to store the train file 
    # def train(self, train_file):
    #     # Initialize lists to store data and labels in the training file
    #     data = []
    #     labels = []

    #     # reads the file, skips header
    #     with open(train_file, 'r') as file:
    #         train_reader = csv.reader(file)
    #         next(train_reader)

    #         # for each row stores data and label
    #         for row in train_reader:
    #             labels.append(int(row[0]))  # holds the first col of each row for the labels 
    #             data.append(list(map(float, row[1:])))
                
    #      # Convert lists to arrays
    #     self.train_labels = np.array(labels)
    #     self.train_data = np.array(data)

    def read_csv(self, file_name):
        data = []
        labels = []
        with open(file_name, 'r') as file:
            reader = csv.reader(file)
            next(reader)
            for row in reader:
                labels.append(int(row[0]))
                data.append(list(map(float, row[1:])))
        return np.array(data), np.array(labels)

    def train(self, train_file):
        self.train_data, self.train_labels = self.read_csv(train_file)


    # Function to retrieve prediction label and calculate accuracy
    def predict(self, test_file):
        correct_count = 0
        test_data, test_labels = self.read_csv(test_file)
        for i, test_instance in enumerate(test_data):
            neighbors = self.k_nearest_neighbors(test_instance)
            predicted_label = self.majority_class(neighbors)
            if predicted_label == test_labels[i]:
                correct_count += 1
        accuracy = (correct_count / len(test_data)) * 100
        return accuracy


# Sets kvalue for odd nums from 1 - 10 
for kvalue in range(1, 10, 2):
    knn = KNNClassifier(kvalue)
    knn.train('MNIST_training.csv')
    
    # Get accuracy for test data
    accuracyPercent = knn.predict('MNIST_test.csv')
    
    # Display accuracy for current k value
    print("K Value:", kvalue, "Accuracy:", accuracyPercent, "%")