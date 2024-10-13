# Command to wish someone a happy birthday in a Discord chat.

@discordBot.command(name="hbd")
async def _hbd(ctx, *args):
    """
    Functionality:
        Wishes a happy birthday to a specified person or sends a generic message if no name is provided.

    Return Value:
        None

    Input Parameters:
        ctx (discord.Context): The context of the message (includes information like the channel, author, etc.).
        *args (tuple): Variable-length argument list containing the name of the person(s) to wish a happy birthday.

    Requirements:
        This function requires the discord.py library.

    Usage:
        !hbd [person_name1] [person_name2] ...
        e.g., !hbd John Doe
    """

    argsLen = len(args)  # Get the number of arguments provided

    if argsLen < 1:  # If no name is provided
        await ctx.channel.send("HAPPY BIRTHDAY")  # Send a generic birthday message
        return

    personName = ""

    # Concatenate all provided names into a single string
    for arg in range(0, argsLen):
        personName = personName + " " + args[arg]

    # Send a birthday message with the concatenated names in uppercase
    await ctx.channel.send("HAPPY BIRTHDAY" + personName.upper() + "!")