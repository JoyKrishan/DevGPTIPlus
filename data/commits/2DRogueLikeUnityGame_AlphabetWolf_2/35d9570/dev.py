def process_data_refactored(data):
    def adjust_and_scale(item):
        # Adjust the item
        adjusted_item = item + 1 if item % 2 == 0 else item - 1
        # Scale the adjusted item
        return adjusted_item * 2 if adjusted_item < 10 else adjusted_item / 2
    # Apply adjustment and scaling in a single step using list comprehension
    return [adjust_and_scale(item) for item in data]