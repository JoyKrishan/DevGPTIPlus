    else: ellipsis_idx = ellipses_found[0] if ellipses_found else len(orig_slices) # NOTE this is needlessly confusing but it fits in 1 line :D
    # extract tensors and their respective dims
    # filter out None and Tensors, and normalize ints
    valid_slices = [slice(None) if isinstance(v, Tensor) else v for v in orig_slices if v is not None] 
    # essentially where there's None in orig_slices, new_shape.insert(i,1), elif int in orig_slices new_shape.pop(i) TODO maybe try another way of looping
      else: # s is int or slice or Tensor
        elif tensors: # and s is int
    # Fancy/tensor indexing
    if tensors:
      # turn negative idx positive
      # reshape to same ndim for case where idxs have different ndim
      # compute sum_dim
      # first iteration
      # consecutive iterations
      # special permute case