import pandas as pd
from sklearn.model_selection import train_test_split, cross_validate
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from imblearn.over_sampling import RandomOverSampler
from tabulate import tabulate

# Read in and preprocess the data
data1 = pd.read_csv('healthcare-dataset-stroke-data.csv').iloc[:, 1:]

smoking_mapping = {'never smoked': 0, 'formerly smoked': 0.5, 'smokes': 1, 'Unknown': 0.25}
data1['smoking_status'] = data1['smoking_status'].replace(smoking_mapping)

data1['ever_married'] = data1['ever_married'].replace({'Yes': 1, 'No': 0})

gender_mapping = {'Other': 10, 'Male': 0, 'Female': 1}
data1['gender'] = data1['gender'].replace(gender_mapping)
data1 = data1[data1.gender != 10]

data1['Residence_type'] = data1['Residence_type'].replace({'Rural': 1, 'Urban': 0})
data1 = data1.drop(["work_type"], axis=1).dropna()

# Apply oversampling to balance the classes
ros = RandomOverSampler(random_state=0)
X_resampled, Y_resampled = ros.fit_resample(data1.drop('stroke', axis=1), data1['stroke'])

# Split data into training and testing sets
X_train, X_test, Y_train, Y_test = train_test_split(X_resampled, Y_resampled, test_size=0.2)

# Scale the data
ss = StandardScaler()
X_train_scaled = pd.DataFrame(ss.fit_transform(X_train), columns=X_train.columns)
X_test_scaled = pd.DataFrame(ss.transform(X_test), columns=X_test.columns)

# Define the SVM models
svm_poly = SVC(kernel='poly', degree=4, gamma='scale', C=3.0)
svm_linear = SVC(kernel='linear', C=3.0)
svm_rbf = SVC(kernel='rbf', gamma='scale', C=3.0)

scoring = ['accuracy', 'roc_auc', 'f1']

def cross_val_results(model, X_train, Y_train):
    return cross_validate(model, X_train, Y_train, cv=10, scoring=scoring, return_train_score=False)

# Compute results for each kernel
results_linear = cross_val_results(svm_linear, X_train_scaled, Y_train)
results_poly = cross_val_results(svm_poly, X_train_scaled, Y_train)
results_rbf = cross_val_results(svm_rbf, X_train_scaled, Y_train)

# Create dictionaries for results
def create_results_dict(results):
    return {'Test Accuracy': list(results['test_accuracy']) + [results['test_accuracy'].mean()],
            'Test ROC AUC': list(results['test_roc_auc']) + [results['test_roc_auc'].mean()],
            'Test F1 Score': list(results['test_f1']) + [results['test_f1'].mean()]}

results_acc_dict = {'Linear': create_results_dict(results_linear),
                    'Polynomial': create_results_dict(results_poly),
                    'RBF': create_results_dict(results_rbf)}

# Print tables
for kernel, results_dict in results_acc_dict.items():
    df = pd.DataFrame.from_dict(results_dict, orient='columns')
    df.index = [f'Fold {i+1}' for i in range(10)] + ['Mean']
    print(f"{kernel.capitalize()} Results Table:")
    print(tabulate(df, headers='keys', tablefmt='fancy_grid', numalign='center', stralign='center', floatfmt=".5f"))
    print("\n")