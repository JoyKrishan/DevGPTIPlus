    """
    An asynchronous WebSocket consumer that handles real-time communication in chat rooms.
    It manages WebSocket connections, messaging, and other interactive features such as vote skipping,
    pausing by guests, and location updates.

    Attributes:
        connected_users (dict): A class-level dictionary that tracks connected users along with their
                                channel names, locations, and base64-encoded user images.
    """

        """
        Handles the initial WebSocket connection by adding the user to the chat group,
        accepting the connection, and broadcasting the updated list of connected users.

        The user's name and room group are extracted from the URL route's kwargs.
        The user's image is fetched and stored in base64 format in the `connected_users` dictionary.
        """
        """
        Handles the WebSocket disconnection by removing the user from the chat group,
        deleting the user from the `connected_users` dictionary, and broadcasting the updated list.

        Args:
            close_code (int): The code for the disconnection, can denote different reasons for disconnection.
        """
        """
        Receives messages from WebSocket and routes them to appropriate handlers based on the message type.

        Supported message types include chat messages, votes to skip, guest control over pausing, and location updates.

        Args:
            text_data (str): The JSON-formatted string containing the message and its type.
        """
        """
        Handles sending chat messages to the group.

        Args:
            data (dict): The data containing the message to be sent along with the username of the sender.
        """
                "type": "chat_message",
                "username": data["username"],
    # Additional methods like handle_votes_to_skip, handle_guest_can_pause, and handle_location_update
    # would be similarly documented, explaining their functionality, arguments, and any specific return values.
    @database_sync_to_async
    def get_user_image_base64(self, user_name):
        """
        Retrieves a user's profile image in base64 encoding.
        This method is a coroutine, meant to be run in an asynchronous context,
        to fetch a user's profile image from the database without blocking the main thread.
        Args:
            user_name (str): The username of the user whose image is to be fetched.
        Returns:
            str: The base64-encoded image data if the image exists, otherwise `None`.
        """