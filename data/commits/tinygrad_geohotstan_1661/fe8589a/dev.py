    if len(ellipses_found := [i for i, v in enumerate(orig_slices) if v is Ellipsis]) > 1: raise IndexError("an index can only have a single ellipsis ('...')")
    valid_slices = [v if isinstance(v, slice) else slice(y_ := normalize_int(v, i, dim_sz), y_+1) for i, (v, dim_sz) in enumerate(zip(valid_slices, self.shape))]
        ret_dims = list(range(ret.ndim))
        ret = ret.permute(ret_dims[dim[0]:dim[0]+idx[0].ndim] + ret_dims[:dim[0]] + ret_dims[dim[0]+idx[0].ndim:])