    rval = os.getenv(var_name) or globals().get(var_name)
            if any(
                [part in parts for part in _OBFUSCATE_KEY_PARTS]
            ) and val != globals().get(key):