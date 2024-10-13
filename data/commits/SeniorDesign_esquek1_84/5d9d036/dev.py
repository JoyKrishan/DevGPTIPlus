import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_score
from sklearn import svm



# Cross_val_score the three kernels with a 5-fold CV
svmAccuracies = {}
clf = svm.SVC(kernel='linear', C = 1, random_state = 42)
scores = cross_val_score(clf, X, y, cv = 5)
svmAccuracies['Linear'] = scores

clf = svm.SVC(kernel='poly', C = 1, random_state = 42)
scores = cross_val_score(clf, X, y, cv = 5)
svmAccuracies['Poly:'] = scores

clf = svm.SVC(kernel='rbf', C = 1, random_state = 42)
scores = cross_val_score(clf, X, y, cv = 5)
svmAccuracies['Rbf:'] = scores