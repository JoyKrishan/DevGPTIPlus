from cudf._lib.pylibcudf.hashing cimport (
    md5,
    murmurhash3_x86_32,
    sha1,
    sha224,
    sha256,
    sha384,
    sha512,
    xxhash_64,
)
    if method == "murmur3":
        return Column.from_pylibcudf(murmurhash3_x86_32(ctbl, seed))
    elif method == "xxhash64":
        return Column.from_pylibcudf(xxhash_64(ctbl, seed))
    elif method == "md5":
        return Column.from_pylibcudf(md5(ctbl))
    elif method == "sha1":
        return Column.from_pylibcudf(sha1(ctbl))
    elif method == "sha224":
        return Column.from_pylibcudf(sha224(ctbl))
    elif method == "sha256":
        return Column.from_pylibcudf(sha256(ctbl))
    elif method == "sha384":
        return Column.from_pylibcudf(sha384(ctbl))
    elif method == "sha512":
        return Column.from_pylibcudf(sha512(ctbl))
    else:
        raise ValueError(
            f"Unsupported hashing algorithm {method}."
        )