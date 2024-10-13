

def interpolate_cayley(matrix: Tensor, power: float):
    identity = torch.eye(matrix.size(0), dtype=matrix.dtype, device=matrix.device)
    cayley = (identity - matrix) @ torch.inverse(identity + matrix)
    scaled_cayley = cayley * power
    return torch.inverse(identity - scaled_cayley) @ (identity + scaled_cayley)