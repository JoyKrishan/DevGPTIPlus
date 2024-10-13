def get_analyze(sheet_id, row_count, column_names, NL_diff, user_prompt):
        analyze_user_prompt.replace("{sheet_id}", sheet_id.split("_")[1])
        .replace("{column_count}", str(column_number))
        sheet_id, row_count, column_names, NL_diff, user_promt