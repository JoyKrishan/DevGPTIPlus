import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.model_selection import KFold

from tensorflow import keras
from tensorflow.keras import layers, Sequential
from keras.utils import to_categorical

data = pd.read_csv("MNIST_HW4.csv")
X = data.drop('label', axis=1)
y = data.iloc[:, 0]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=0)

X_train = X_train / 255
X_test = X_test / 255

y_train = to_categorical(y_train)
y_test = to_categorical(y_test)

Number_of_nodes_h1 = 8
Number_of_nodes_h2 = 4
activation_h1 = 'relu'
activation_output = 'sigmoid'
dropoff = [0.2]

KerasModel = keras.Sequential([
    keras.layers.Dense(50, activation='sigmoid', input_shape=(784,)),
    keras.layers.Dense(50, activation='relu'),
    keras.layers.Dropout(0.3),
    keras.layers.Dense(50, activation='relu'),
    keras.layers.Dropout(0.3),
    keras.layers.Dense(10, activation='softmax')
])

Optimizer = ['SGD', 'Adam']
Loss_function = ['binary_crossentropy', 'mean_squared_error']
Learning_rate = [0.01, 0.001, 0.0001, 0.00001]
Batch_size = [32, 64, 128]
Max_epochs = [20]

Grid_search = []

kf = KFold(n_splits=5, shuffle=True, random_state=0)

for optimizer in Optimizer:
    for loss_function in Loss_function:
        for learning_rate in Learning_rate:
            for bs in Batch_size:
                for max_epochs in Max_epochs:
                    print(optimizer, loss_function, learning_rate, bs, max_epochs)

                    if optimizer == "SGD":
                        optimizer_ = keras.optimizers.SGD(lr=learning_rate)
                    else:
                        optimizer_ = keras.optimizers.Adam(lr=learning_rate)

                    KerasModel.compile(optimizer=optimizer_, loss=loss_function, metrics=['accuracy'])

                    accuracies = []

                    for train_index, val_index in kf.split(X_train):
                        X_train_fold, X_val_fold = X_train.iloc[train_index], X_train.iloc[val_index]
                        y_train_fold, y_val_fold = y_train[train_index], y_train[val_index]

                        KerasModel.fit(X_train_fold, y_train_fold, epochs=max_epochs, batch_size=bs, verbose=0,
                                       validation_split=0.2)

                        _, accuracy = KerasModel.evaluate(X_val_fold, y_val_fold, verbose=0)
                        accuracies.append(accuracy)

                    mean_accuracy = sum(accuracies) / len(accuracies)

                    print('Mean Accuracy: %.2f' % (mean_accuracy * 100))

                    Grid_search.append([optimizer, loss_function, learning_rate, bs, max_epochs, mean_accuracy])

                    if mean_accuracy >= 0.86:
                        break
                else:
                    continue
                break
            else:
                continue
            break
        else:
            continue
        break

KerasDataframe = pd.DataFrame(accuracies).T

from tabulate import tabulate

headers = ["Fold 1", "Fold 2", "Fold 3", "Fold 4", "Fold 5", "mean_accuracy"]
table = tabulate(KerasDataframe, headers=headers, tablefmt="pipe", floatfmt=".2f")
print(table)