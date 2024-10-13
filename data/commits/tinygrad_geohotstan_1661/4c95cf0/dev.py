  def __getitem__(self, val): # val: Union[int, slice, Tensor, None, Ellipsis, Tuple[Union[int, slice, Tensor, None, Ellipsis], ...]]
    if len(ellipses_found := [i for i, v in enumerate(orig_slices) if v is Ellipsis]) <= 1: ellipsis_idx = ellipses_found[0] if ellipses_found else len(orig_slices) # if len(ellipses_found) == 1 else
    else: raise IndexError("an index can only have a single ellipsis ('...')")
    # filter out None and Tensors, normalize ints
    # loop through orig_slices to determine final shape and trim dim
    final_shape, it_shape, dim = [], iter(new_shape), list(orig_dim)
      # normalize idx
      idx = [i.reshape(*[1]*(max_dim-i.ndim), *i.shape) for i in idx] # NOTE this reshape is removable. Just add it to args of other reshapes, but makes args more unreadable
      for idx_,d in zip(idx[1:], sum_dim[1:]):