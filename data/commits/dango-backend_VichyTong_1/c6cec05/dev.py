    column_number = len(column_names)
    index = "A"
    column_string_list = []
    for item in column_names:
        item = f'{index}: "{item}"'
        index = chr(ord(index) + 1)
        column_string_list.append(item)
        # TODO: What if number of columns is more than 26?
    column_names = ", ".join(column_string_list)

        .replace("{column_names}", column_names)
        .replace("{column_number}", str(column_number))