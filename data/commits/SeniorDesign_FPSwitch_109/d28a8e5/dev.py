    # Convert percentile to a decimal value
    percentile_decimal = pth / 100
    
    # Calculate the position of the value in the data
    position = percentile_decimal * total
    
    return position
