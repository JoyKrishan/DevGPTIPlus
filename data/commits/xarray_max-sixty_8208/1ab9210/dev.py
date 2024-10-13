        Self,
        return rolling_exp.RollingExp(cast("T_Xarray", self), window, window_type)