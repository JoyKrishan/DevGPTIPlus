@bot.command(name='top5')
async def top5(ctx, arg):
    arg = arg.upper()
    result = sp.search(q=f'artists: {arg}', type='artist', limit=50, market=None)
    if result['artists']['total'] == 0:
        arg = arg.lower()
        result = sp.search(q=f'artists: {arg}', type='artist', limit=50, market=None)
    if not result['artists']['items']:
        return
    artist_id = None
    artist_name = None
    for artist in result['artists']['items']:
        if artist['name'].lower() == arg and int(artist['popularity']) > 40:
            artist_name = artist['name']
            artist_id = artist['id']
            break
        elif artist['name'].upper() == arg and int(artist['popularity']) > 40: 
            artist_name = artist['name']
            artist_id = artist['id']
            break
    if artist_id is None:
         await ctx.send(f"No artist found with the name '{arg}'.")
    else:
        top_tracks = sp.artist_top_tracks(artist_id, country='US')
        if not top_tracks['tracks']:
            await ctx.send("No top tracks found for the artist.")
        else:
            await ctx.send(f"Top 5 songs for the artist {artist_name}:")
            for i, track in enumerate(top_tracks['tracks'][:5]):
                await ctx.send(f"{i + 1}. {track['name']} - {', '.join(artist['name'] for artist in track['artists'])}")
            return
        