    """
    Interface for a Nylas free/busy call error

    Attributes:
        email: The email address of the participant who had an error.
        error: The provider's error message.
    """

        status: The status of the slot. Can be "free", "busy", or "tentative".
    """
    Interface for an individual Nylas free/busy response

    Attributes:
        email: The email address of the participant.
        time_slots: List of time slots for the participant.
    """

    A list of FreeBusy objects and Error objects.
