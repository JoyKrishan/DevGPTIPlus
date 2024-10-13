import os
    salt = os.urandom(16)
    key_salt_combo = salt + retrieval_key.encode()
    hash_obj = hashlib.sha256(key_salt_combo)
    return salt.hex() + hash_obj.hexdigest()


def verify_key_hash(retrieval_key: str, stored_hash: str) -> bool:
    """Verifies if the retrieval key matches the hash."""
    salt = bytes.fromhex(stored_hash[:32])
    original_hash = stored_hash[32:]
    key_salt_combo = salt + retrieval_key.encode()
    hash_obj = hashlib.sha256(key_salt_combo)

    return hash_obj.hexdigest() == original_hash