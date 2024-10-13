import torch


def is_orthogonal(matrix, tol=1e-6):
    identity = torch.eye(matrix.size(0), dtype=matrix.dtype, device=matrix.device)
    matrix_transpose = matrix.t()
    return torch.allclose(matrix @ matrix_transpose, identity, atol=tol) and \
        torch.allclose(matrix_transpose @ matrix, identity, atol=tol)


# Cayley transform of matrix A
def cayley_transform(A):
    I = torch.eye(A.size(0), dtype=A.dtype, device=A.device)
    return (I - A) @ torch.inverse(I + A)


# Inverse Cayley transform
def inverse_cayley_transform(X):
    I = torch.eye(X.size(0), dtype=X.dtype, device=X.device)
    return torch.inverse(I - X) @ (I + X)


# Interpolate between identity and orthogonal matrix using Cayley transform
def interpolate_cayley(m, t):
    # Cayley transform of A
    X = cayley_transform(m)

    # Scale X
    Y = X * t

    # Inverse Cayley transform
    return inverse_cayley_transform(Y)