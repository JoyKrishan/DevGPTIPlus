    def normalize_int(e: int, i: int, dim_sz: int) -> int:
    valid_slices = [v if isinstance(v, slice) else slice(normalize_int(v, i, dim_sz), normalize_int(v, i, dim_sz)+1) for i, (v, dim_sz) in enumerate(zip(valid_slices, self.shape))]
    # valid_slices = [v if isinstance(v, slice) else slice(y := v if v != -1 else dim_sz-1, y+1) for v, dim_sz in zip(valid_slices, self.shape)]