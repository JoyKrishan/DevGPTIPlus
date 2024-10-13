    # extract tensors and their associated dims
    # filter None and Tensors, and normalize ints
    valid_slices = [slice(None) if isinstance(v, Tensor) else v for v in orig_slices if v is not None]
      if s is None: final_shape.append(1)
      else: # isinstance(s, (int, slice, Tensor))
        if isinstance(s, (slice, Tensor)): final_shape.append(dim_shape)
        elif tensors: # and isinstance(s, int)