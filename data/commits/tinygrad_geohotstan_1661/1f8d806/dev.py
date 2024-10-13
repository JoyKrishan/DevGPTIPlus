      # compute sum_dim, arange, and idx
      sum_dim = [d if n==0 else d+max_dim-n for n,d in enumerate(dim)]
      arange = [Tensor.arange(ret.shape[d]).reshape(*[1]*sd, ret.shape[d], *[1]*(((ret.ndim + max_dim) if n==0 else (ret.ndim + max_dim - n)) - sd - 1)) for n,(sd,d) in enumerate(zip(sum_dim, dim))]
      idx = [i.reshape(*[1]*sum_dim[0], *((1, *i.shape) if n == 0 else i.shape), *[1]*((ret.ndim-sd-1) if n==0 else (ret.ndim - sum_dim[0]-n))) for n,(sd,i) in enumerate(zip(sum_dim, idx))]
      ret = ret.reshape(*ret.shape[:sum_dim[0]+1], *[1]*max_dim, *ret.shape[sum_dim[0]+1:])
      # iteratively cmpeq -> mul -> reduce
      for a,i,sd in zip(arange, idx, sum_dim): ret = (a==i).mul(ret).sum(sd)
        ret = ret.permute(ret_dims[dim[0]:dim[0]+max_dim] + ret_dims[:dim[0]] + ret_dims[dim[0]+max_dim:])