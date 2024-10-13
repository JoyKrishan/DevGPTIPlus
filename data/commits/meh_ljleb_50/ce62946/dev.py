    return a_2d.reshape_as(a).to(dtype=a.dtype)
    result = eigenvectors @ torch.diag(eigenvalues) @ eigenvectors.H