def calculate_shipping_cost(weight, distance):
    """Calculate the shipping cost."""
    shipping_rates = {
        (0, 5): 2,
        (6, 20): 3,
        (21, 50): 5,
        (51, float('inf')): 7
    }
    for (min_weight, max_weight), rate in shipping_rates.items():
        if min_weight <= weight <= max_weight:
            return weight * rate * distance
    return 0  # Return 0 if weight exceeds the maximum range

def calculate_tax(price, tax_rate):
    """Calculate the tax."""
    return price * tax_rate

def calculate_total_cost(price, weight, distance, tax_rate):
    """Calculate the total cost."""
    shipping_cost = calculate_shipping_cost(weight, distance)
    tax_amount = calculate_tax(price, tax_rate)
    return price + shipping_cost + tax_amount