    def pythagorean_theorem(a, b):
        if a <= 0 or b <= 0:
            raise ValueError("Sides must be positive")
        return (a**2 + b**2) ** 0.5