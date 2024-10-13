    # Calculate coefficients using the normal equation
    inverse_product = np.linalg.inv(np.dot(Xt, Xtr1))
    # Coefficients (b) are obtained by multiplying the inverse of (X^T * X) with X^T and then with raw_ytr
    b = np.dot(np.dot(inverse_product, Xt), raw_ytr)
    # Calculate RMSE
    squared_diff = np.square(raw_yte - yHat)
    # Mean Squared Error (MSE) is the sum of squared differences divided by the number of samples
    mse = np.sum(squared_diff) / raw_yte.shape[0]
    # RMSE is the square root of MSE
    rmse = np.sqrt(mse)
    
# Format results# Reshape results array and create a DataFrame
results_shape = (10, 8)
results_reshaped = np.reshape(results, results_shape)
# Define column names for the DataFrame
columns = ["cylinders", "displacement", "horsepower", "weight", "acceleration", "model year", "origin", "RMSE"]
# Create a DataFrame with reshaped results and appropriate column names
results_df = pd.DataFrame(results_reshaped, columns=columns)
results_df
