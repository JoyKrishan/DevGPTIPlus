    a_2d = a.reshape(-1, a.shape[-1]).float()
    b_2d = b.reshape(-1, b.shape[-1]).float()
    u, _, v_t = torch.linalg.svd(torch.matmul(a_2d.T, b_2d), driver="gesvd" if a.is_cuda else None)
        transform.copy_(torch.matmul(u, v_t))
    torch.matmul(a_2d.float(), transform, out=a_2d)
    res = a_2d.reshape_as(a).to(dtype=a.dtype)
    return res
    return result.real