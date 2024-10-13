    if len(a.shape) == 0 or (a == b).all():
    a_2d = a.reshape(-1, a.shape[-1]).double()
    b_2d = b.reshape(-1, b.shape[-1]).double()
    u, _, v_t = torch.linalg.svd(torch.matmul(a_2d.T, b_2d))
    transform = torch.matmul(u, v_t)
        u[:, -1] *= torch.det(transform)
        torch.matmul(u, v_t, out=transform)
    result = (
        eigenvectors @ torch.diag(eigenvalues) @ eigenvectors.H
    )
    print(f"complex error: {torch.linalg.norm(result.imag)}")
    return result.real.to(dtype=matrix.dtype)