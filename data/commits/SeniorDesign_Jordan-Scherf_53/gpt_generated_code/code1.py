@bot.command(name='top5')
async def top5(ctx, arg):
    """
    This command retrieves the top 5 tracks of a specified artist using the Spotify API.

    Parameters:
        ctx (discord.Context): The context of the command invocation.
        arg (str): The name of the artist to search for.

    Returns:
        None

    Raises:
        None
    """
    # Convert the artist name argument to uppercase for consistency
    arg = arg.upper()

    # Search for the artist using the Spotify API
    result = sp.search(q=f'artists: {arg}', type='artist', limit=50, market=None)

    # If no results found with the artist name in uppercase, try searching with lowercase
    if result['artists']['total'] == 0:
        arg = arg.lower()
        result = sp.search(q=f'artists: {arg}', type='artist', limit=50, market=None)

    # If no artists found, return
    if not result['artists']['items']:
        return

    # Initialize variables to store the artist ID and name
    artist_id = None
    artist_name = None

    # Loop through the search results to find the matching artist
    for artist in result['artists']['items']:
        # Check if the artist's name matches the searched name and has a popularity score greater than 40
        if (artist['name'].lower() == arg or artist['name'].upper() == arg) and int(artist['popularity']) > 40:
            # Store the artist's ID and name
            artist_name = artist['name']
            artist_id = artist['id']
            break

    # If no matching artist found, notify the user
    if artist_id is None:
        await ctx.send(f"No artist found with the name '{arg}'.")

    # If a matching artist is found, retrieve their top tracks
    else:
        top_tracks = sp.artist_top_tracks(artist_id, country='US')

        # If no top tracks found for the artist, notify the user
        if not top_tracks['tracks']:
            await ctx.send("No top tracks found for the artist.")
        else:
            # Send a message with the top 5 songs for the artist
            await ctx.send(f"Top 5 songs for the artist {artist_name}:")
            # Loop through the top tracks and send each track's name and artists
            for i, track in enumerate(top_tracks['tracks'][:5]):
                await ctx.send(f"{i + 1}. {track['name']} - {', '.join(artist['name'] for artist in track['artists'])}")
            return