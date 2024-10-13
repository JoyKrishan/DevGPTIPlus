IS_OPENAI_PRE_1 = openai.version.VERSION.startswith("0.")
if IS_OPENAI_PRE_1 and os.environ.get("LLM_OPENAI_SHOW_RESPONSES"):
    openai.requestssession = _log_session  # type: ignore
    if IS_OPENAI_PRE_1: