import sys
from kmeans_pytorch import kmeans
    u, sigma, v = torch.svd(a_2d.T @ b_2d)
    transform = u @ v.T
            torch.linalg.matrix_power(transform, round(alpha), out=transform)
        if torch.linalg.det(transform) < 0:
            # remove reflection, otherwise we get a complex component
            u[:, -1] *= -1
            torch.matmul(u, v.T, out=transform)

    torch.matmul(a_2d, transform, out=a_2d)
    eigenvalues.pow_(power)