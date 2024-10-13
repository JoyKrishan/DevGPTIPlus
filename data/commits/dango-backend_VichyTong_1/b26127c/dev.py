import re


def drop(table, labels, axis):
    if axis == 1 or axis == "columns":
        if not set(labels).issubset(table.columns):
            raise ValueError(f"Invalid column labels:{labels}")
    if axis == 0 or axis == "index":
        labels = [int(label) for label in labels]
        if not set(labels).issubset(table.index):
            raise ValueError(f"Invalid index labels:{labels}")
    
    print("Table before column move:\n", table)

    table.drop(labels=labels, axis=axis, inplace=True)

    print("Table after drop:\n", table)
    return table


def move(table, column, to):
    if column not in table.columns:
        raise ValueError(f"Column {column} does not exist in the DataFrame")

    num_columns = len(table.columns)
    if to < 0 or to >= num_columns:
        raise ValueError(f"New position {to} is out of bounds")

    print("Table before column move:\n", table)

    column_to_move = table[column]

    table.drop(labels=[column], axis="columns", inplace=True)
    table.insert(loc=to, column=column, value=column_to_move)

    print("Table after column move:\n", table)
    return table


def copy(table, column, new_column):
    if column not in table.columns:
        raise ValueError(f"Column {column} does not exist in the DataFrame")
    if new_column in table.columns:
        raise ValueError(
            f"New column label {new_column} already exists in the DataFrame"
        )
    print("Table before column copy:\n", table)
    table[new_column] = table[column].copy()
    print("Table after column copy:\n", table)
    return table


def merge(table, column1, column2, glue, new_column):
    if column1 not in table.columns:
        raise ValueError(f"Column {column1} does not exist in the DataFrame")
    if column2 not in table.columns:
        raise ValueError(f"Column {column2} does not exist in the DataFrame")
    if new_column in table.columns:
        raise ValueError(
            f"New column label {new_column} already exists in the DataFrame"
        )
    print("Table before column merge:\n", table)
    table[new_column] = table[column1].astype(str) + glue + table[column2].astype(str)
    print("Table after column merge:\n", table)
    return table


def split(table, column, delimiter, new_columns):
    if column not in table.columns:
        raise ValueError(f"Column {column} does not exist in the DataFrame")
    if len(new_columns) != 2:
        raise ValueError("new_labels must contain exactly two new column names")

    print("Table before column split:\n", table)
    table[new_columns[0]], table[new_columns[1]] = zip(
        *table[column].str.split(delimiter, n=1).tolist()
    )
    print("Table after column split:\n", table)

    return table


def fold(table, after_column, new_column):
    if after_column not in table.columns:
        raise ValueError(f"Column {after_column} does not exist in the DataFrame")

    after_column_idx = table.columns.get_loc(after_column) + 1

    if new_column in table.columns:
        raise ValueError(
            f"New column name {new_column} already exists in the DataFrame"
        )

    table[new_column] = table.iloc[:, after_column_idx:].apply(
        lambda x: " ".join(x.dropna().astype(str)), axis=1
    )

    table.drop(table.columns[after_column_idx:], axis=1, inplace=True)

    return table


def unfold(table, key_column, value_column):
    if key_column not in table.columns or value_column not in table.columns:
        raise ValueError("Key or value column does not exist in the DataFrame")

    unfolded_table = (
        table.drop([key_column, value_column], axis=1)
        .drop_duplicates()
        .reset_index(drop=True)
    )

    for _, row in table.iterrows():
        key = row[key_column]
        value = row[value_column]
        if key not in unfolded_table.columns:
            unfolded_table[key] = None  # Initialize new column if it doesn't exist
        unfolded_table.loc[unfolded_table.index == _, key] = (
            value  # Assign the value to the new column
        )

    return unfolded_table


def fill(table, column):
    if column not in table.columns:
        raise ValueError(f"Column {column} does not exist in the DataFrame")

    # Fill empty cells with the value from above
    table[column].fillna(method="ffill", inplace=True)

    return table


def delete(table, predicate, axis):
    if axis == 0:  # Delete rows
        # Apply the predicate across each row
        # The predicate function should be designed to operate on row series or individual values depending on the use case
        rows_to_delete = table.apply(lambda row: predicate(row), axis=1)
        filtered_table = table[~rows_to_delete]
    elif axis == 1:  # Delete columns
        # Apply the predicate across each column
        columns_to_delete = [col for col in table.columns if predicate(table[col])]
        filtered_table = table.drop(columns=columns_to_delete)
    else:
        raise ValueError("Axis must be 0 (rows) or 1 (columns)")

    return filtered_table


def transpose(table):
    return table.transpose()