import numpy as np
import pandas as pd

independent = pd.DataFrame(np.random.random((3, 3)))
dependent = pd.DataFrame(np.random.random((3, 1)))

# Linear regression coefficient vector equation:
# b = (X^T * X)^-1 * X^T * y

# Perform least squares regression
coefficients, residuals, _, _ = np.linalg.lstsq(independent, dependent, rcond=None)

# Create a DataFrame to store the coefficients
b = pd.DataFrame(coefficients, index=independent.columns, columns=['Coefficient'])

print(b)