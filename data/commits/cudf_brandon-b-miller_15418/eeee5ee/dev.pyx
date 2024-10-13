from libc.stdint cimport uint32_t, uint64_t
from cudf._lib.cpp.column.column cimport column
from cudf._lib.cpp.hash cimport (
    murmurhash3_x64_128 as cpp_murmurhash3_x64_128,
    murmurhash3_x86_32 as cpp_murmurhash3_x86_32,
    xxhash_64 as cpp_xxhash_64,
from .table cimport Table


cpdef Column hash(Table input, object method, object seed):
    if method == "murmur3":
        return murmurhash3_x86_32(input, seed)
    elif method == "xxhash64":
        return xxhash_64(input, seed)
    elif method == "md5":
        return md5(input)
    elif method == "sha1":
        return sha1(input)
    elif method == "sha224":
        return sha224(input)
    elif method == "sha256":
        return sha256(input)
    elif method == "sha384":
        return sha384(input)
    elif method == "sha512":
        return sha512(input)
    else:
        raise ValueError(
            f"Unsupported hashing algorithm {method}."
        )
    Table input,
    Table input,