# Calculate RMSE
squared_diff = np.square(raw_yte - yHat)
# Mean Squared Error (MSE) is the sum of squared differences divided by the number of samples
mse = np.sum(squared_diff) / raw_yte.shape[0]
# RMSE is the square root of MSE
rmse = np.sqrt(mse)