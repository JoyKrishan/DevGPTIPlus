# Calculate coefficients using the normal equation
inverse_product = np.linalg.inv(np.dot(Xt, Xtr1))
# Coefficients (b) are obtained by multiplying the inverse of (X^T * X) with X^T and then with raw_ytr
b = np.dot(np.dot(inverse_product, Xt), raw_ytr)