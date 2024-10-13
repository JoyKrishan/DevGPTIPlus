      # reshape to same ndim when idxs have different ndim
      if dim[0] != 0 and len(dim) != 1 and dim != list(range(dim[0], dim[-1]+1)):