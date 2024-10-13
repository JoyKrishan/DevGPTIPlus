

@pytest.mark.integration
def test_key_deletion(real_redis_cache):
    keys = [f"_test_key_{i}" for i in range(10)]
    datas = [{f"info{i}": f"something{i}"} for i in range(10)]
    for key, data in zip(keys, datas):
        real_redis_cache.store(key, data)
    assert real_redis_cache.retrieve(keys[0]) is not None
    result = real_redis_cache.delete_keys(keys)
    assert result is None
    assert real_redis_cache.retrieve(keys[0]) is None

    for key, data in zip(keys, datas):
        real_redis_cache.store(key, data)
    assert real_redis_cache.retrieve(keys[0]) is not None
    result = real_redis_cache.delete_keys_pattern("_test_key_*")
    assert result is None
    assert real_redis_cache.retrieve(keys[0]) is None