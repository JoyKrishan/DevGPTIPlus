import scipy.stats as stats
import statsmodels.api as sm
def drop(table, label, axis=0):
    """
    Drops a row or column from the given DataFrame based on the label and axis.
    Parameters:
    - table: DataFrame from which the row/column will be dropped.
    - label: The label of the row/column to be dropped. For rows, this is the index label; for columns, this is the column name.
    - axis: 0 for row, 1 for column. Specifies whether to drop a row or a column.
    """
    # Validate axis
    if axis not in [0, 1, "index", "columns"]:
        raise ValueError("Axis must be 0, 'index', 1, or 'columns'")
    # Convert string axis to numeric
    if axis == "index":
        axis = 0
    elif axis == "columns":
        axis = 1

    # Dropping a column
    if axis == 1:
        if label not in table.columns:
            raise ValueError(f"Column {label} does not exist in the DataFrame.")
        table.drop(labels=label, axis=axis, inplace=True)

    # Dropping a row
    else:
        label = int(label)
        if label not in table.index:
            raise ValueError(f"Row {label} does not exist in the DataFrame.")
        table.drop(labels=label, axis=axis, inplace=True)
    return table


def move(table, label, target_table, target_position, axis=0):
    """
    Moves a row or column from source_table to target_table at the specified position.

    Parameters:
    - source_table: DataFrame from which the row/column will be moved.
    - label: The label of the row/column to be moved.
    - target_table: DataFrame to which the row/column will be added.
    - position: Position at which the row/column will be inserted into the target_table.
    - axis: 0 for row, 1 for column.
    """

    # Validate axis
    if axis not in [0, 1, "index", "columns"]:
        raise ValueError("Axis must be 0, 'index', 1, or 'columns'")

    # Convert string axis to numeric
    if axis == "index":
        axis = 0
    elif axis == "columns":
        axis = 1

    target_position = int(target_position)

    # Moving a column
    if axis == 1:
        if label not in table.columns:
            raise ValueError(
                f"Column '{label}' does not exist in the source DataFrame."
            )
        if target_position < 0 or target_position > len(target_table.columns):
            raise ValueError("Position out of range in the target DataFrame.")

        # Extract the column and drop it from the source
        column_data = table.pop(label)

        # Insert the column into the target DataFrame at the specified position
        target_table.insert(loc=target_position, column=label, value=column_data)

    # Moving a row
    else:
        label = int(label)
        # Check if the row exists in the source DataFrame
        if label not in table.index:
            raise ValueError(f"Row '{label}' does not exist in the source DataFrame.")

        # Validate the target position
        if target_position < 0 or target_position > len(target_table.index):
            raise ValueError("Position out of range in the target DataFrame.")

        # Extract the row to be moved
        row_data = table.loc[[label]]

        # Drop the row from the source DataFrame
        table.drop(labels=label, axis=0, inplace=True)

        # If the target_position is at the end, simply concatenate
        if target_position == len(target_table.index):
            target_table = pd.concat([target_table, row_data])
        else:
            # Split the target DataFrame at the desired position
            top_half = target_table.iloc[:target_position]
            bottom_half = target_table.iloc[target_position:]

            # Concatenate the parts back together, inserting the row_data in between
            target_table = pd.concat([top_half, row_data, bottom_half])

            return table, target_table


def copy(table, label, target_table, target_label, axis=0):
    """
    Copies a row or column from table to target_table, assigning it a new label.

    Parameters:
    - table: DataFrame from which the row/column will be copied.
    - label: The label of the row/column to be copied.
    - target_table: DataFrame to which the copied row/column will be added.
    - target_label: The label for the copied row/column in the target DataFrame.
    - axis: 0 for row, 1 for column.
    """

    # Validate axis
    if axis not in [0, 1, "index", "columns"]:
        raise ValueError("Axis must be 0, 'index', 1, or 'columns'")

    # Convert string axis to numeric
    if axis == "index":
        axis = 0
    elif axis == "columns":
        axis = 1

    # Copying a column
    if axis == 1:
        if label not in table.columns:
            raise ValueError(f"Column {label} does not exist in the source DataFrame.")
        if target_label in target_table.columns:
            raise ValueError(
                f"Column {target_label} already exists in the target DataFrame."
            )

        # Copy the column and add it to the target DataFrame
        target_table[target_label] = table[label].copy()

    # Copying a row
    else:
        if label not in table.index:
            raise ValueError(f"Row {label} does not exist in the source DataFrame.")
        if target_label in target_table.index:
            raise ValueError(
                f"Row {target_label} already exists in the target DataFrame."
            )

        # Copy the row and add it to the target DataFrame
        target_table.loc[target_label] = table.loc[label].copy()

    return target_table


def merge(table, label_1, label_2, glue, new_label, axis=0):
    """
    Merges two rows or columns in a DataFrame into a new row or column, concatenating their contents with a specified glue string.

    Parameters:
    - table: DataFrame in which the rows/columns will be merged.
    - label_1, label_2: The labels of the rows/columns to be merged.
    - glue: String used to concatenate the contents of the rows/columns.
    - new_label: The label for the new merged row/column.
    - axis: 0 for merging rows, 1 for merging columns.
    """

    # Validate axis
    if axis not in [0, 1, "index", "columns"]:
        raise ValueError("Axis must be 0, 'index', 1, or 'columns'")

    # Convert string axis to numeric
    if axis == "index":
        axis = 0
    elif axis == "columns":
        axis = 1

    # Merging columns
    if axis == 1:
        if label_1 not in table.columns or label_2 not in table.columns:
            raise ValueError("One or both column labels do not exist in the DataFrame.")
        if new_label in table.columns:
            raise ValueError(f"Column {new_label} already exists in the DataFrame.")

        # Concatenate the columns with the specified glue and create a new column
        table[new_label] = (
            table[label_1].astype(str) + glue + table[label_2].astype(str)
        )

    # Merging rows
    else:
        if label_1 not in table.index or label_2 not in table.index:
            raise ValueError("One or both row labels do not exist in the DataFrame.")
        if new_label in table.index:
            raise ValueError(f"Row {new_label} already exists in the DataFrame.")

        # Concatenate the rows with the specified glue and create a new row
        new_row = (
            table.loc[label_1].astype(str) + glue + table.loc[label_2].astype(str)
        ).rename(new_label)
        table = table.append(new_row)
def split(table, label, delimiter, new_labels, axis=0):
    """
    Splits the contents of a row or column in the DataFrame into multiple new rows or columns.

    Parameters:
    - table: DataFrame in which the row/column will be split.
    - label: The label of the row/column to be split.
    - delimiter: The delimiter used to split the row/column content.
    - new_labels: List of new labels for the resulting split rows/columns.
    - axis: 0 for splitting a row, 1 for splitting a column.
    """

    # Validate axis
    if axis not in [0, 1, "index", "columns"]:
        raise ValueError("Axis must be 0, 'index', 1, or 'columns'")

    # Convert string axis to numeric
    if axis == "index":
        axis = 0
    elif axis == "columns":
        axis = 1

    # Splitting a column
    if axis == 1:
        if label not in table.columns:
            raise ValueError(f"Column {label} does not exist in the DataFrame.")
        # Perform the split operation and create new columns
        split_data = table[label].str.split(delimiter, expand=True)
        split_data.columns = new_labels
        # Drop the original column and add new columns
        table = table.drop(labels=label, axis=1)
        table = pd.concat([table, split_data], axis=1)
    # Splitting a row
    else:
        if label not in table.index:
            raise ValueError(f"Row {label} does not exist in the DataFrame.")
        # Perform the split operation and create new rows
        split_data = table.loc[label].str.split(delimiter).values[0]
        if len(split_data) != len(new_labels):
            raise ValueError(
                "The number of new labels must match the result of the split."
            )

        # Drop the original row and add new rows
        table = table.drop(labels=label, axis=0)
        for new_label, data in zip(new_labels, split_data):
            table.loc[new_label] = data
def transpose(table):
    """
    Transposes the given DataFrame, swapping its rows and columns.

    Parameters:
    - table: DataFrame to be transposed.

    Returns:
    - A new DataFrame that is the transpose of the input DataFrame.
    """

    # Transpose the DataFrame
    transposed_table = table.transpose()

    return transposed_table


def aggregate(table, label, new_label, operation, axis=0):
    """
    Performs a specified aggregation operation on a row or column in the DataFrame and appends the result.

    Parameters:
    - table: DataFrame on which the aggregation operation will be performed.
    - label: The label of the row/column to be aggregated. Ignored if axis is 0 and operation is sum, mean, median, min, or max, as the aggregation will be done for all columns.
    - new_label: The label for the resulting aggregated row/column.
    - operation: The aggregation operation to perform ('sum', 'mean', 'median', 'min', 'max').
    - axis: 0 to aggregate columns (resulting in a new row), 1 to aggregate rows (resulting in a new column).
    """

    # Validate axis
    if axis not in [0, 1]:
        raise ValueError("Axis must be 0 or 1")

    # Define supported operations
    supported_operations = {
        "sum": lambda x: x.sum(),
        "mean": lambda x: x.mean(),
        "median": lambda x: x.median(),
        "min": lambda x: x.min(),
        "max": lambda x: x.max(),
    }

    # Check if the operation is supported
    if operation not in supported_operations:
            f"Operation '{operation}' is not supported. Supported operations are: {list(supported_operations.keys())}"

    # Aggregating columns (resulting in a new row)
    if axis == 0:
        # Compute the aggregation for each column
        aggregated_row = supported_operations[operation](table)

        # Append the aggregated row with the specified label
        table.loc[new_label] = aggregated_row

    # Aggregating rows (resulting in a new column)
    else:
        if label not in table.index:
            raise ValueError(f"Row {label} does not exist in the DataFrame.")

        # Compute the aggregation for the specified row
        aggregated_column = supported_operations[operation](table.loc[label])

        # Append the aggregated column with the specified label
        table[new_label] = aggregated_column

def test(table, label_1, label_2, strategy, axis=0):
    """
    Performs a specified statistical test between two rows or columns in the DataFrame.

    Parameters:
    - table: DataFrame on which the test will be performed.
    - label_1: The label of the first row/column to be tested.
    - label_2: The label of the second row/column to be tested.
    - strategy: The statistical test to perform ('t-test', 'z-test', 'chi-squared').
    - axis: 0 to test between columns, 1 to test between rows.
    """

    # Validate axis
    if axis not in [0, 1]:
        raise ValueError("Axis must be 0 or 1")

    # Validate strategy
    supported_strategies = ["t-test", "z-test", "chi-squared"]
    if strategy not in supported_strategies:
            f"Strategy '{strategy}' is not supported. Supported strategies are: {supported_strategies}"
    # Perform the test between two columns
    if axis == 0:
        if label_1 not in table.columns or label_2 not in table.columns:
            raise ValueError(
                "One or both specified labels do not exist in the DataFrame's columns."
            )
        # Extract the data for each column
        data_1 = table[label_1]
        data_2 = table[label_2]
    # Perform the test between two rows
    else:
        if label_1 not in table.index or label_2 not in table.index:
            raise ValueError(
                "One or both specified labels do not exist in the DataFrame's index."
            )
        # Extract the data for each row
        data_1 = table.loc[label_1]
        data_2 = table.loc[label_2]
    # Perform a t-test
    if strategy == "t-test":
        test_stat, p_value = stats.ttest_ind(data_1, data_2)
    # Perform a z-test
    elif strategy == "z-test":
        z_stat, p_value = sm.stats.ztest(data_1, data_2)
    # Perform a chi-squared test
    elif strategy == "chi-squared":
        # For chi-squared test, we expect the data to be categorical and in a contingency table format
        # Here we construct a contingency table from the two data sets
        data_crosstab = pd.crosstab(data_1, data_2)
        chi2_stat, p_value, dof, expected = stats.chi2_contingency(data_crosstab)
        test_stat = chi2_stat

    return test_stat, p_value