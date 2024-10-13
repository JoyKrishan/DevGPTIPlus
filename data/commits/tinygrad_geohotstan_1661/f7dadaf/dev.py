      sum_dim = [d if n==0 else d+i.ndim-n for n,(d,i) in enumerate(zip(dim,idx))]
      new_idx = idx[0].reshape(*[1]*sum_dim[0], 1,*idx[0].shape, *[1]*(ret.ndim-sum_dim[0]-1))
      arange = Tensor.arange(ret.shape[sum_dim[0]], dtype=dtypes.int32, requires_grad=False, device=self.device).reshape(*[1]*sum_dim[0], ret.shape[sum_dim[0]], *[1]*idx[0].ndim, *[1]*(ret.ndim-sum_dim[0]-1))
      ret = (ret.reshape(*ret.shape[:sum_dim[0]+1], *[1]*idx[0].ndim, *ret.shape[sum_dim[0]+1:]) * (arange == new_idx)).sum(sum_dim[0])