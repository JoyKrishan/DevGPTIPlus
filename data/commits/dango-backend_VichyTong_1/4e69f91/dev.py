def extract_changes(data):
    # Split the input string into lines
    lines = data.strip().split("\n")

    # Prepare a list to hold all changes
    changes = []

    # Process each line
    for line in lines:
        # Remove 'Row:', 'Col:', 'Old:', and 'New:' and split by commas
        parts = (
            line.replace("Row: ", "")
            .replace("Col: ", "")
            .replace("Old: ", "")
            .replace("New: ", "")
            .split(", ")
        )

        # Create a dictionary for each line and append to the list
        change = {
            "row": int(parts[0]),
            "col": int(parts[1]),
            "old_value": parts[2],
            "new_value": parts[3],
        }
        changes.append(change)

    return changes


def find_batch_operation(changes, num_rows, num_cols):
    changed_row_flag = 0
    changed_col_flag = 0
    for index, change in enumerate(changes):
        if change["row"] == changed_row_flag + 1:
            changed_row_flag = change["row"]
        else:
            changed_row_flag = 0
        if change["col"] == changed_col_flag + 1:
            changed_col_flag = change["col"]
        else:
            changed_col_flag = 0
        if changed_row_flag == num_rows:
            new_change = {
                "col": change["col"],
                "old_value": change ["old_value"],
                "new_value": change["new_value"],
            }
        # TODO here ...
        


def mata_diff_to_NL(diff: str, row_count: int, column_names: list) -> str:
    changes = extract_changes(diff)
    for change in changes:
        change["row"] += 1
        change["col"] += 1
    # changes = find_batch_operation(changes, row_count, len(column_names))
    print(changes)
    NL_diff = mata_diff_to_NL(table_diff, row_count, column_names)