        d = torch.eye(a_2d.shape[1], device=a_2d.device)
        d[-1, -1] = torch.linalg.det(u) * torch.linalg.det(v.T)