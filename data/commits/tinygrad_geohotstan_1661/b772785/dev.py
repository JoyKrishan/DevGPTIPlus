    # extract tensors and their associated dims
    # handle invalid slices (Tensor, None)
    # compute shrink arg
    # determine final shape and trim dim associated with tensors
            if orig_dim[i_] > i: dim[i_] -= 1 # trim dims associated with tensors after dim is collapsed
      idx = [i.reshape(*[1]*sum_dim[0], *((1, *i.shape) if n == 0 else i.shape), *[1]*((ret.ndim - sd - 1) if n==0 else (ret.ndim - sum_dim[0] - n))) for n,(sd,i) in enumerate(zip(sum_dim, idx))]