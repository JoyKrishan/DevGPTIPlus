    a_2d = a.reshape(-1, a.shape[-1]).float()
    b_2d = b.reshape(-1, a.shape[-1]).float()
    u, _, v = torch.svd(b_2d.T @ a_2d)
    del _, b_2d
    if alpha == round(alpha):
        transform = u @ v.T
        if alpha != 1:
            transform.copy_(torch.linalg.matrix_power(transform, round(alpha)))
    else:
        # remove flips: make det(transform) > 0
        # otherwise orthogonal_power(transform, alpha) will have a complex component
        d = torch.ones(a_2d.shape[1], device=a_2d.device)
        d[-1] = torch.linalg.det(u) * torch.linalg.det(v.T)
        transform = u @ d @ v.T
        del d
        transform.copy_(fractional_matrix_power(transform, alpha))
    del u, v

    a_2d.copy_(a_2d @ transform)
    return a_2d.reshape_as(a).to(dtype=a.dtype)


def fractional_matrix_power(matrix: Tensor, power: float):
    eigenvalues, eigenvectors = torch.linalg.eig(matrix)
    eigenvalues.copy_(eigenvalues ** power)
    return (
        eigenvectors @ torch.diag(eigenvalues) @ eigenvectors.T
    ).real.to(dtype=matrix.dtype)