

def orthogonal_rotation(a: Tensor, b: Tensor, **kwargs):
    if a.shape == ():
        return a

    a_reshape = a.reshape(-1, a.shape[-1]).float()
    b_reshape = b.reshape(-1, b.shape[-1]).float()
    U, _, V = torch.svd(torch.matmul(a_reshape.T, b_reshape))
    Q = torch.matmul(U, V.T)
    return torch.matmul(a_reshape, Q).reshape_as(a)