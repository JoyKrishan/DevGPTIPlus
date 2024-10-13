def calculate_sum_and_average(num_list):
    if not num_list:
        return 0, 0  # Return 0 for both sum and average if the list is empty
    total = sum(num_list)
    return total, average