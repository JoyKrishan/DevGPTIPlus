# Linear regression coefficient vector equation:
# b = (X^T * X)^-1 * X^T * y

# Perform least squares regression
coefficients, residuals, _, _ = np.linalg.lstsq(independent, dependent, rcond=None)

# Create a DataFrame to store the coefficients
b = pd.DataFrame(coefficients, index=independent.columns, columns=['Coefficient'])