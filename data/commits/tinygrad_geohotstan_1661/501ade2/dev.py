    orig_dim, tensors = zip(*y) if (y := [(i,v) for i,v in enumerate(orig_slices) if isinstance(v, Tensor)]) else ((), ())
    valid_slices = [s for s in orig_slices if s is not None]
    valid_slices = [v if isinstance(v, slice) else slice(y := normalize_int(v, i, dim_sz), y+1) for i, (v, dim_sz) in enumerate(zip(valid_slices, self.shape))]
      new_shape = flatten([sh // s, s] for sh, s in zip(padded_tensor.shape, strides))
      reshaped_tensor = padded_tensor.reshape(new_shape)
    dim = list(orig_dim[:]) # make a copy
        elif tensors: # s is int
          for i_ in range(len(orig_dim)):
            if orig_dim[i_] > i: dim[i_] -= 1
      else: final_shape.append(1) # s is None
    if tensors: # Fancy/tensor indexing
      idx = [t.sign().contiguous().__neg__().contiguous().relu() * ret.shape[d] + t for d,t in zip(dim, tensors)] # TODO first contiguous fixes torch+cpu_only CI, but it causes llvm to fail. Second one fixes llvm