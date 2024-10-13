    svd_driver = "gesvd" if a.is_cuda else None
    u, _, v_t = torch.linalg.svd(torch.matmul(a_2d.T, b_2d), driver=svd_driver)