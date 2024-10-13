import pickle
    try:
        pickle.dumps(rval)
    except Exception as exc:
        logger.warning(f"{exc=}")
        rval.pop("data")
    try:
        pickle.dumps(state)
    except Exception as exc:
        logger.warning(f"{exc=}")
        state = {}