def cross_val_for_kernel(kernel, C=1, random_state=42):
    clf = svm.SVC(kernel=kernel, C=C, random_state=random_state)
    scores = cross_val_score(clf, X, y, cv=5)
    return scores
svmAccuracies = {}
kernels = ['linear', 'poly', 'rbf']
for kernel in kernels:
    scores = cross_val_for_kernel(kernel)
    svmAccuracies[kernel.capitalize()] = scores