        if not metadata.index.is_unique:
            raise ValueError(
                f"Error: The key column '{key_column}' contains non-unique values in the metadata file."
            )