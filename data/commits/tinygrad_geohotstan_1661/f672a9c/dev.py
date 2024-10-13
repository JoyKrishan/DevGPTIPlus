    # handle ellipses
    # extract tensors
    # filter None and normalize int
    # compute new_slice
    # shrink and flip
    sliced_tensor = self.shrink(new_slice).flip(axis=[i for i, s in enumerate(strides) if s < 0])
    if any(abs(s) != 1 for s in strides):