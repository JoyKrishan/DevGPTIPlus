
    serialized_observation_memory = observation_instance.to_memory()
    original_observation_dict.pop('message')
    assert serialized_observation_memory == original_observation_dict, 'The serialized observation in memory should match the original observation dict.'