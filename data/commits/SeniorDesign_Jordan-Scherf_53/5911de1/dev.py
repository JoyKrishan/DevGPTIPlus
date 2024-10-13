    This command retrieves the top 5 tracks of a specified artist using the Spotify API.
        ctx (discord.Context): The context of the command invocation.
        arg (str): The name of the artist to search for.
        None
    Raises:
        None
    """
    # Convert the artist name argument to uppercase for consistency
    # If no results found with the artist name in uppercase, try searching with lowercase
    # If no artists found, return
    # Initialize variables to store the artist ID and name
    # Loop through the search results to find the matching artist
        # Check if the artist's name matches the searched name and has a popularity score greater than 40
            # Store the artist's ID and name
    # If no matching artist found, notify the user

    # If a matching artist is found, retrieve their top tracks
        # If no top tracks found for the artist, notify the user
            # Send a message with the top 5 songs for the artist
            # Loop through the top tracks and send each track's name and artists