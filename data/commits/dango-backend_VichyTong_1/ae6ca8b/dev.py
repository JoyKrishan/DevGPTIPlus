def move(table, label, target_table, target_label, axis=0):
    target_label = int(target_label)
        if target_label < 0 or target_label > len(target_table.columns):
        target_table.insert(loc=target_label, column=label, value=column_data)
        if target_label < 0 or target_label > len(target_table.index):
        if target_label == len(target_table.index):
            top_half = target_table.iloc[:target_label]
            bottom_half = target_table.iloc[target_label:]
        label = int(label)
        label_1 = int(label_1)
        label_2 = int(label_2)
        new_label = int(new_label)
        table.loc[new_label] = new_row.copy()
        table = table.drop(labels=label, axis=axis)
        table = pd.concat([table, split_data], axis=axis)
        table = table.drop(labels=label, axis=axis)
def aggregate(table, functions, axis=0):
    if axis not in [0, 1, "index", "columns"]:
        raise ValueError("Axis must be 0, 'index', 1, or 'columns'")
    return table.agg(functions, axis=axis)