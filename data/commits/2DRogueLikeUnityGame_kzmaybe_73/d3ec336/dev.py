def optimized_complex_matrix_operation(matrix):
    Perform a complex operation on a square matrix more efficiently.
    determinant = np.linalg.det(matrix)
    # Compute the outer product of the matrix with itself and then add the determinant
    result = matrix @ matrix.T + determinant