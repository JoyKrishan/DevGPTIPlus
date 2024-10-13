# Reshape results array and create a DataFrame
results_shape = (10, 8)
results_reshaped = np.reshape(results, results_shape)
# Define column names for the DataFrame
columns = ["cylinders", "displacement", "horsepower", "weight", "acceleration", "model year", "origin", "RMSE"]
# Create a DataFrame with reshaped results and appropriate column names
results_df = pd.DataFrame(results_reshaped, columns=columns)