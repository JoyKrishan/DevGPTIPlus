import scipy
import numpy as np
    shape = (a.shape[-1], -1)

    a_reshape = a.reshape(*shape).float()
    b_reshape = b.reshape(*shape).float()
    transform = torch.matmul(u, v.T)