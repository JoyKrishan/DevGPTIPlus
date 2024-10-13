    # Initialize dictionaries to track changes across rows and columns
    col_changes = {col: [] for col in range(1, num_cols + 1)}
    row_changes = {row: [] for row in range(1, num_rows + 1)}

    # Gather changes by rows and columns
    for change in changes:
        col_changes[change["col"]].append(change)
        row_changes[change["row"]].append(change)

    # List to store detected batch operations
    batch_operations = []

    # Check for column-wise batch operations
    for col, col_changes in col_changes.items():
        if len(col_changes) == num_rows and all(
            change["row"] == i
            for i, change in enumerate(
                sorted(col_changes, key=lambda x: x["row"]), start=1
            )
        ):
            # All rows in this column have changes
            old_values = [
                change["old_value"]
                for change in sorted(col_changes, key=lambda x: x["row"])
            ]
            new_values = [
                change["new_value"]
                for change in sorted(col_changes, key=lambda x: x["row"])
            ]
            batch_operations.append(
                {
                    "type": "all_row",
                    "col": col,
                    "old_values": old_values,
                    "new_values": new_values,
                }
            )
            # Remove individual changes from the main list
            for change in col_changes:
                changes.remove(change)

    # Check for row-wise batch operations
    for row, row_changes in row_changes.items():
        if len(row_changes) == num_cols and all(
            change["col"] == i
            for i, change in enumerate(
                sorted(row_changes, key=lambda x: x["col"]), start=1
            )
        ):
            # All columns in this row have changes
            old_values = [
                change["old_value"]
                for change in sorted(row_changes, key=lambda x: x["col"])
            ]
            new_values = [
                change["new_value"]
                for change in sorted(row_changes, key=lambda x: x["col"])
            ]
            batch_operations.append(
                {
                    "type": "all_col",
                    "row": row,
                    "old_values": old_values,
                    "new_values": new_values,
                }
            )
            # Remove individual changes from the main list
            for change in row_changes:
                changes.remove(change)

    # Add batch operations to the changes list
    changes.extend(batch_operations)

    return changes
    changes = find_batch_operation(changes, row_count, len(column_names))