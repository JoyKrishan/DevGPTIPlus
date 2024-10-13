def __getitem__(self, val):
    def normalize_int(e, i, dim_sz):
        if -dim_sz <= e < dim_sz: 
            return e if e != -1 else dim_sz-1
        raise IndexError(f"index {e} is out of bounds for dimension {i} with size {self.shape[i]}")
    
    orig_slices = list(val) if isinstance(val, tuple) else [val]
    num_slices = sum(isinstance(v, (slice, int, Tensor)) for v in orig_slices)
    
    if num_slices > len(self.shape): raise IndexError(f"too many indices for tensor of dimension {len(self.shape)}")
    if orig_slices.count(Ellipsis) > 1: raise IndexError("an index can only have a single ellipsis ('...')")
    
    ellipsis_idx = orig_slices.index(Ellipsis) if Ellipsis in orig_slices else len(orig_slices)
    orig_slices[ellipsis_idx:ellipsis_idx+1] = [slice(None)] * (len(self.shape) - num_slices)
    
    tensor_found = [(i,v) for i, v in enumerate(orig_slices) if isinstance(v, Tensor)]
    orig_slices = [slice(None) if isinstance(v, Tensor) else v for v in orig_slices]
    valid_slices = [v if isinstance(v, slice) else slice(y := normalize_int(v, i, dim_sz), y+1) for i, (v, dim_sz) in enumerate(zip(orig_slices, self.shape))]
    
    start, stop, strides = zip(*[s.indices(dim_sz) for s, dim_sz in zip(valid_slices, self.shape)]) or ((), (), ())
    new_slice = tuple((s, e) if st > 0 else (e+1, s+1) for s, e, st in zip(start, stop, strides))
    
    sliced_tensor = self.shrink(new_slice).flip(axis=[i for i, s in enumerate(strides) if s < 0])
    
    if any(abs(s) != 1 for s in strides):
        paddings = [(0, -dim_sz % s if dim_sz % s != 0 else 0) for s, dim_sz in zip(strides, sliced_tensor.shape)]
        padded_tensor = sliced_tensor.pad(paddings)
        reshaped_tensor = padded_tensor.reshape(flatten([sh // s, s] for sh, s in zip(padded_tensor.shape, strides)))
        sliced_tensor = reshaped_tensor.shrink(tuple(flatten(((0, sh), (0, 1)) for sh in reshaped_tensor.shape[::2])))
    
    final_shape, it_shape = [], iter(sliced_tensor.shape)
    for i, s in enumerate(orig_slices):
        if isinstance(s, (int, slice)): 
            dim_shape = next(it_shape)
            if isinstance(s, int) and tensor_found: 
                for idx, (pos, tensor) in enumerate(tensor_found):
                    if pos > i:
                        tensor_found[idx] = (pos-1, tensor)
        elif s is None: 
            final_shape.append(1)
    
    ret = sliced_tensor.reshape(final_shape)
    
    # Further fancy/tensor indexing handling here (omitted for brevity, as the logic remains largely the same).
    
    return ret