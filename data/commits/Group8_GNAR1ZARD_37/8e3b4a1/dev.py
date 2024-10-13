def log_message(level, message):
    print(f"[{level}] {current_time}: {message}")
log_message("INFO", "This is an informational message.")
log_message("WARNING", "This is a warning message.")
log_message("ERROR", "This is an error message.")