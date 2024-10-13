    """
    A Discord bot command to fetch and display the top 5 songs of a specified artist.

    Parameters:
    - ctx (commands.Context): The context object representing the command invocation.
    - arg (str): The argument passed with the command, representing the artist's name.

    Returns:
    - None: Sends messages to the Discord channel with the top 5 songs of the artist or appropriate error messages.
    """

    # Convert the artist name argument to uppercase

    # Search for the artist using the Spotify API

    # If no results are found, try searching with the artist name in lowercase

    # If still no results, exit the function

    # Initialize variables to store the found artist's ID and name

    # Loop through the search results to find a matching artist with popularity above 40
        if (artist['name'].lower() == arg or artist['name'].upper() == arg) and int(artist['popularity']) > 40:

    # If no matching artist is found, send an error message
        await ctx.send(f"No artist found with the name '{arg}'.")
        # Fetch the top tracks of the found artist from the Spotify API

        # If no top tracks are found, send an error message
            # Display the top 5 songs for the artist