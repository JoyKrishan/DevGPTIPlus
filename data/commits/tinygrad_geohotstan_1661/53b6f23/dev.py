        elif tensors: # s is int
            if orig_dim[i_] > i: dim[i_] -= 1 # compute resulting dims after dim is collapsed when s is int
      # reshape to same ndim when idxs have different ndim and reshape to reducable shape
      idx = [i.reshape(*[1]*(max_dim-i.ndim), *i.shape) for i in idx] # TODO this reshape is removable. Just add it to args of other reshapes, but makes args more unreadable
      if dim[0] != 0 and len(dim) != 1 and dim != list(range(dim[0], dim[-1]+1)): # special permute case