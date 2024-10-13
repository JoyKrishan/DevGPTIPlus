import yelpAPI.states
    random_state = random.choice(yelpAPI.states.us_states)
        f"{URL}businesses/search?latitude={latitude}&longitude={longitude}&term=restaurants&limit={limit}&offset={random_int}",