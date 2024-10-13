# Importing necessary libraries
import pandas as pd  # Library for data manipulation
from sklearn.model_selection import train_test_split, KFold  # For data splitting and K-Fold cross-validation
from tensorflow import keras  # High-level neural networks API
from keras.utils import to_categorical  # Utility function for one-hot encoding

# Reading data from CSV file and preprocessing
data = pd.read_csv("MNIST_HW4.csv")  # Read data from CSV file
X = data.drop('label', axis=1)  # Features
y = data.iloc[:, 0]  # Labels

# Splitting data into training and testing sets
# Normalizing pixel values to be between 0 and 1
# One-hot encoding of labels
# Define neural network model
    keras.layers.Dense(50, activation='sigmoid', input_shape=(784,)),  # Input layer
    keras.layers.Dense(50, activation='relu'),  # Hidden layer 1
    keras.layers.Dropout(0.3),  # Dropout layer
    keras.layers.Dense(50, activation='relu'),  # Hidden layer 2
    keras.layers.Dropout(0.3),  # Dropout layer
    keras.layers.Dense(10, activation='softmax')  # Output layer
# Define hyperparameters for grid search
# Perform grid search with K-Fold cross-validation
Grid_search = []  # List to store results
kf = KFold(n_splits=5, shuffle=True, random_state=0)  # K-Fold cross-validator
                    print(optimizer, loss_function, learning_rate, bs, max_epochs)  # Print current hyperparameters
                    # Define optimizer based on selected algorithm
                    # Compile the model with selected optimizer and loss function
                    accuracies = []  # List to store accuracies for each fold
                    # K-Fold cross-validation loop
                        # Train the model
                        # Evaluate the model on validation data
                    # Calculate mean accuracy across all folds
                    # Store results in Grid_search list
                    # Break loop if mean accuracy exceeds a threshold
# Create DataFrame to tabulate fold-wise accuracies
# Import tabulate library to format table

# Format and print the table
print(table)