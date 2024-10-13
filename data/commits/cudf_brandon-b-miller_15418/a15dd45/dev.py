@pytest.fixture(scope="module")
def xxhash_64_int_tbl():
    arrow_tbl = pa.Table.from_arrays(
        [
            pa.array(
                [
                    -127,
                    -70000,
                    0,
                    200000,
                    128,
                    np.iinfo("int32").max,
                    np.iinfo("int32").min,
                    np.iinfo("int32").min,
                ],
                type=pa.int32(),
            )
        ],
        names=["data"],
    )
    return plc.interop.from_arrow(arrow_tbl)


@pytest.fixture(scope="module")
def xxhash_64_double_tbl():
    arrow_tbl = pa.Table.from_arrays(
        [
            pa.array(
                [
                    -127.0,
                    -70000.125,
                    128.5,
                    -0.0,
                    np.inf,
                    np.nan,
                    np.finfo("float64").max,
                    np.finfo("float64").min,
                    np.finfo("float64").min,
                ],
                type=pa.float32(),
            )
        ],
        names=["data"],
    )
    return plc.interop.from_arrow(arrow_tbl)


@pytest.fixture(scope="module")
def xxhash_64_string_tbl():
    arrow_tbl = pa.Table.from_arrays(
        [
            pa.array(
                [
                    "The",
                    "quick",
                    "brown fox",
                    "jumps over the lazy dog.",
                    "I am Jack's complete lack of null value",
                    "A very long (greater than 128 bytes/characters) to test a very long string. "
                    "2nd half of the very long string to verify the long string hashing happening.",
                    "Some multi-byte characters here: ééé",
                    "ééé",
                    "ééé ééé",
                    "ééé ééé ééé ééé",
                    "",
                    "!@#$%^&*(())",
                    "0123456789",
                    "{}|:<>?,./;[]=-",
                ],
                type=pa.string(),
            )
        ],
        names=["data"],
    )
    return plc.interop.from_arrow(arrow_tbl)


@pytest.fixture(scope="module")
def xxhash_64_decimal_tbl():
    arrow_tbl = pa.Table.from_arrays(
        [pa.array([0, 100, -100, 999999999, -999999999], type=pa.decimal(-3))],
        names=["data"],
    )
    return plc.interop.from_arrow(arrow_tbl)


    err_types = all_types_input_table.select([dtype])
    with pytest.raises(ValueError):
def test_xxhash_64_int(xxhash_64_int_tbl):
    expected = pa.array(
        ],
        type=pa.uint64(),
    got = plc.hashing.xxhash_64(xxhash_64_int_tbl, 0)
def test_xxhash_64_double(xxhash_64_double_tbl):
    expected = pa.array(
        ],
        type=pa.uint64(),
    got = plc.hashing.xxhash_64(xxhash_64_double_tbl, 0)
def test_xxhash_64_string(xxhash_64_string_tbl):
    expected = pa.from_pandas(xxhash_64_string_tbl.to_pandas().apply(hasher))
    got = plc.hashing.xxhash_64(xxhash_64_string_tbl, 0)
def test_xxhash64_decimal(xxhash_64_decimal_tbl):
        ],
        type=pa.uint64(),
    got = plc.hashing.xxhash_64(xxhash_64_decimal_tbl, 0)