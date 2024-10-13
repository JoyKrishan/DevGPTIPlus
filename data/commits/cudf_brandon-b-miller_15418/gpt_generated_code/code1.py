import hashlib

def compute_sha256_of_int(integer_value):
    # Convert the integer to a 32-bit binary representation
    binary_representation = integer_value.to_bytes(4, byteorder='big', signed=True)
    
    # Compute the SHA-256 hash of the binary representation
    sha256_hash = hashlib.sha256(binary_representation).hexdigest()
    
    return sha256_hash

# Example usage
example_integer = 123456
hash_result = compute_sha256_of_int(example_integer)
print(hash_result)