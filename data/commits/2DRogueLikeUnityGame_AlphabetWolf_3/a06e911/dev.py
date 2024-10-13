def process_data_refactored(data):
    """
    Processes a list of numbers by adjusting and then scaling each number.

    The adjustment step increases even numbers by 1 and decreases odd numbers by 1.
    The scaling step then doubles the adjusted number if it is less than 10,
    or halves it if it is 10 or more.

    Parameters:
    - data (list of int/float): A list of numerical items to be processed.

    Returns:
    - list of int/float: A list containing the adjusted and scaled numbers.
    """

    def adjust_and_scale(item):
        """
        Adjusts and scales a single number.

        Adjustment increases even numbers by 1 and decreases odd numbers by 1.
        Scaling doubles the adjusted number if it is less than 10, or halves it if it is 10 or more.

        Parameters:
        - item (int/float): The number to adjust and scale.

        Returns:
        - int/float: The adjusted and scaled number.
        """
        # Adjust the item
        adjusted_item = item + 1 if item % 2 == 0 else item - 1
        # Scale the adjusted item
        return adjusted_item * 2 if adjusted_item < 10 else adjusted_item / 2
    
    # Apply adjustment and scaling in a single step using list comprehension
    return [adjust_and_scale(item) for item in data]