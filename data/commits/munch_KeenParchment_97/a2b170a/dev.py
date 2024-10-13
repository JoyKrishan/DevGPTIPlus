    """
    Multiply two matrices.

    This function takes two matrices, `matrix_a` and `matrix_b`, and returns their product if the number of columns in
    `matrix_a` matches the number of rows in `matrix_b`. The resulting matrix will have the same number of rows as
    `matrix_a` and the same number of columns as `matrix_b`.

    Args:
        matrix_a (list of lists): The first matrix to be multiplied.
        matrix_b (list of lists): The second matrix to be multiplied.

    Returns:
        list of lists: The product of `matrix_a` and `matrix_b`.

    Raises:
        ValueError: If the number of columns in `matrix_a` doesn't match the number of rows in `matrix_b`.

    Examples:
        >>> matrix_multiply([[1, 2, 3], [4, 5, 6]], [[7, 8], [9, 10], [11, 12]])
        [[58, 64], [139, 154]]

        >>> matrix_multiply([[1, 2], [3, 4]], [[5, 6, 7], [8, 9, 10]])
        [[21, 24, 27], [47, 54, 61]]
    """