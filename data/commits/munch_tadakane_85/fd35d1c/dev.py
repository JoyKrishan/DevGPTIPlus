import numpy as np
import pandas as pd

independent = pd.DataFrame(np.random.random((3, 3)))
dependent = pd.DataFrame(np.random.random((3, 1)))

b = pd.DataFrame(np.linalg.inv((independent.T) @ independent), independent.columns, independent.columns) @ independent.T @ dependent

print(b)