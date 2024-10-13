    if (num_slices := sum(isinstance(v, (slice, int, Tensor)) for v in orig_slices)) > len(self.shape): raise IndexError(f"too many indices for tensor of dimension {len(self.shape)}")
    if len((ellipses_found := [i for i, v in enumerate(orig_slices) if v is Ellipsis])) > 1: raise IndexError("an index can only have a single ellipsis ('...')")
    else: ellipsis_idx = ellipses_found[0] if ellipses_found else len(orig_slices)
    valid_slices = [v if isinstance(v, slice) else slice(y := normalize_int(v, i, dim_sz), y+1) for i, (v, dim_sz) in enumerate(zip(orig_slices, self.shape)) if v is not None]
      padded_tensor = sliced_tensor.pad(tuple((0, num_zeros(s, dim_sz)) for s, dim_sz in zip(strides, sliced_tensor.shape)))
      reshaped_tensor = padded_tensor.reshape(flatten([sh // s, s] for sh, s in zip(padded_tensor.shape, strides)))
      sliced_tensor = reshaped_tensor.shrink(tuple(flatten(((0, sh), (0, 1)) for sh in new_shape)))