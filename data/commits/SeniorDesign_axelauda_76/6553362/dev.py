def knapsack(capacity, weights, values, table):
    """
    Calculates the maximum value achievable in the knapsack.

    Args:
        capacity (int): The capacity of the knapsack.
        weights (list): List of weights of items.
        values (list): List of values of items.
        table (list): 2D list representing the dynamic programming table.

    Returns:
        int: Maximum value achievable.
    """
    # Loop through items
    for i in range(1, len(weights) + 1):
        # Loop through capacities
        for j in range(capacity + 1):
            # If the weight of the current item is greater than the capacity,
            # take the value of the previous item for this capacity
            if weights[i - 1] > j:
                table[i][j] = table[i - 1][j]
            # Otherwise, take the maximum of the previous item's value for this capacity
            # or the value of the current item plus the value of the item that can fit
                table[i][j] = max(table[i - 1][j], table[i - 1][j - weights[i - 1]] + values[i - 1])
    # Return the maximum value achievable
    return table[len(weights)][capacity]

    capacity = 10
    weights = [2, 4, 5, 6]
    values = [1, 2, 3, 5]
    # Table holding maximum value for a number of items with a limited bag capacity
    table = [[0] * (capacity + 1) for _ in range(len(weights) + 1)]
    for i in range(len(values)):
        print(f"\tItem {i + 1}: Value = {values[i]}, Weight = {weights[i]}")
    print(f"Highest value for a bag with a capacity of {capacity}: {knapsack(capacity, weights, values, table)}")