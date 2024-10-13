import pandas as pd
from collections import OrderedDict

def fold(table, column):
    # Find the index of the column name
    if column not in table.columns:
        raise ValueError(f"Column {column} does not exist in the DataFrame")
    print("Table before column split:\n", table)
    column_index = table.columns.get_loc(column)
    # Prepare an empty list to hold the new rows
    new_rows = []
    # Iterate over each row in the DataFrame
    for _, row in table.iterrows():
        # For each column after the specified index, create a new row
        # with the value from the pivot column and the current column
        for col in table.columns[column_index + 1:]:
            new_row = [row[column], row[col]]  # Use column_name directly
            new_rows.append(new_row)
    new_table = pd.DataFrame(new_rows, columns=[column, "folded_value"])
    print("Table after column split:\n", new_table)
    return new_table
def unfold(table):
    print("Table before column split:\n", table)
    # Create an OrderedDict to maintain the order of groups as they're encountered
    temp = OrderedDict()
    
    # Iterate through the DataFrame rows
    for index, row in table.iterrows():
        # Use all but the last column as the key, accessing values explicitly
        t = tuple(row.iloc[:-1])
        # Append the last value using .iloc to access by position
        if t in temp:
            temp[t].append(row.iloc[-1])
        else:
            temp[t] = [row.iloc[-1]]
    
    # Determine the maximum number of columns required
    max_col = max(len(v) for v in temp.values())
    
    # Prepare the unfolded DataFrame
    unfolded_data = []
    
    # Populate the unfolded_data list with rows expanded according to temp
    for key, values in temp.items():
        row = list(key)
        row.extend(values + [''] * (max_col - len(values)))  # Extend with values and fill the rest with blanks
        unfolded_data.append(row)
    
    # Convert unfolded_data into a DataFrame
    column_names = list(table.columns[:-1]) + [f'col_{i}' for i in range(max_col)]
    unfolded_table = pd.DataFrame(unfolded_data, columns=column_names)
    print("Table after column split:\n", unfolded_table)