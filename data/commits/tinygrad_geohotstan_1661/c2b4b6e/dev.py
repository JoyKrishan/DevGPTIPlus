      padded_tensor = sliced_tensor.pad(tuple((0, s-(dim_sz % s) if dim_sz % s != 0 else 0) for s, dim_sz in zip(strides, sliced_tensor.shape)))
      reshaped_tensor = padded_tensor.reshape(flatten([sh // s, s] for sh, s in zip(padded_tensor.shape, strides)))
      new_shape = reshaped_tensor.shape[::2]
        elif tensors: # s is int and there are tensors extracted