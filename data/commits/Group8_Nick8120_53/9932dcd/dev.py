import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.model_selection import cross_validate
from tabulate import tabulate
from imblearn.over_sampling import RandomOverSampler


# Read in and preprocess the data
data1 = pd.read_csv('healthcare-dataset-stroke-data.csv')
data1 = data1.iloc[:,1:]

data1['smoking_status'] = data1['smoking_status'].replace('never smoked' , 0)
data1['smoking_status'] = data1['smoking_status'].replace('formerly smoked' , 0.5)
data1['smoking_status'] = data1['smoking_status'].replace('smokes' , 1)
data1['smoking_status'] = data1['smoking_status'].replace('Unknown' , 0.25)

data1['ever_married'] = data1['ever_married'].replace('Yes' , 1)
data1['ever_married'] = data1['ever_married'].replace('No' , 0)

data1['gender'] = data1['gender'].replace('Other' , 10)
data1 = data1[data1.gender != 10]
data1['gender'] = data1['gender'].replace('Male' , 0)
data1['gender'] = data1['gender'].replace('Female' , 1)
data1 = data1.dropna()

data1['Residence_type'] = data1['Residence_type'].replace('Rural' , 1)
data1['Residence_type'] = data1['Residence_type'].replace('Urban' , 0)
data1 = data1.drop(["work_type"],axis=1)
#data1 = data1.drop(data1.tail(4400).index)

# Apply oversampling to balance the classes
ros = RandomOverSampler(random_state=0)
X_resampled, Y_resampled = ros.fit_resample(data1.drop('stroke', axis=1), data1['stroke'])

# Split data into training and testing sets
#X_train, X_test, Y_train, Y_test = train_test_split(data1.drop('stroke', axis=1), data1['stroke'], test_size=0.2)
# Split data into training and testing sets
X_train, X_test, Y_train, Y_test = train_test_split(X_resampled, Y_resampled, test_size=0.2)

# Scale the data
ss = StandardScaler()
X_train = pd.DataFrame(ss.fit_transform(X_train),columns = X_train.columns)
X_test = pd.DataFrame(ss.transform(X_test),columns = X_test.columns)

# Define the SVM model with poly kernel
svm_poly = SVC(kernel='poly', degree=4, gamma='scale', C=3.0)
svm_linear = SVC(kernel='linear', C=3.0)
svm_rbf = SVC(kernel='rbf', gamma='scale', C=3.0)

scoring = ['accuracy', 'roc_auc', 'f1']

# Compute accuracy using 10-fold cross-validation
results_linear = cross_validate(svm_linear, X_train, Y_train, cv=10, scoring=scoring, return_train_score=False)
results_poly = cross_validate(svm_poly, X_train, Y_train, cv=10, scoring=scoring, return_train_score=False)
results_rbf = cross_validate(svm_rbf, X_train, Y_train, cv=10, scoring=scoring, return_train_score=False)

# Convert NumPy array to list and concatenate with list that contains mean test accuracy for each kernel
linear_acc_results = list(results_linear['test_accuracy']) + [results_linear['test_accuracy'].mean()]
poly_acc_results = list(results_poly['test_accuracy']) + [results_poly['test_accuracy'].mean()]
rbf_acc_results = list(results_rbf['test_accuracy']) + [results_rbf['test_accuracy'].mean()]

# Convert NumPy array to list and concatenate with list that contains mean AOC for each kernel
linear_aoc_results = list(results_linear['test_roc_auc']) + [results_linear['test_roc_auc'].mean()]
poly_aoc_results = list(results_poly['test_roc_auc']) + [results_poly['test_roc_auc'].mean()]
rbf_aoc_results = list(results_rbf['test_roc_auc']) + [results_rbf['test_roc_auc'].mean()]

# Convert NumPy array to list and concatenate with list that contains mean F1 score for each kernel
linear_f1_results = list(results_linear['test_f1']) + [results_linear['test_f1'].mean()]
poly_f1_results = list(results_poly['test_f1']) + [results_poly['test_f1'].mean()]
rbf_f1_results = list(results_rbf['test_f1']) + [results_rbf['test_f1'].mean()]

# Create dictionary of the accuracy results for each kernel
results_acc_dict = {'Linear': linear_acc_results, 'Polynomial': poly_acc_results, 'RBF': rbf_acc_results}
results_aoc_dict = {'Linear': linear_aoc_results, 'Polynomial': poly_aoc_results, 'RBF': rbf_aoc_results}
results_f1_dict = {'Linear': linear_f1_results, 'Polynomial': poly_f1_results, 'RBF': rbf_f1_results}

# Create table of of accuarcy results
df = pd.DataFrame.from_dict(results_acc_dict, orient='columns')
#set rows
df.index = ['Fold 1', 'Fold 2', 'Fold 3','Fold 4', 'Fold 5', 'Fold 6', 'Fold 7', 'Fold 8','Fold 9', 'Fold 10', 'Mean Accuracy']
#print the table
print("Accuracy Results Table:")
print(tabulate(df, headers='keys', tablefmt='fancy_grid', numalign='center', stralign='center', floatfmt=".5f"))
print("\n\n")

# Create table of of AOC results
df = pd.DataFrame.from_dict(results_aoc_dict, orient='columns')
#set rows
df.index = ['Fold 1', 'Fold 2', 'Fold 3','Fold 4', 'Fold 5', 'Fold 6', 'Fold 7', 'Fold 8','Fold 9', 'Fold 10', 'Mean Accuracy']
#print the table
print("AOC Results Table:")
print(tabulate(df, headers='keys', tablefmt='fancy_grid', numalign='center', stralign='center', floatfmt=".5f"))
print("\n\n")

# Create table of of F1 Score results
df = pd.DataFrame.from_dict(results_f1_dict, orient='columns')
df.index = ['Fold 1', 'Fold 2', 'Fold 3','Fold 4', 'Fold 5', 'Fold 6', 'Fold 7', 'Fold 8','Fold 9', 'Fold 10', 'Mean F1 Score']
print("F1 Score Results Table:")
print(tabulate(df, headers='keys', tablefmt='fancy_grid', numalign='center', stralign='center', floatfmt=".5f"))
