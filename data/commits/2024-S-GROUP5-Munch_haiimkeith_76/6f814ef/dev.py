import uuid


def generate_unique_id():
    """
    Generate a new unique ID.

    Returns:
        str: A new unique ID.
    """
    return str(uuid.uuid4())