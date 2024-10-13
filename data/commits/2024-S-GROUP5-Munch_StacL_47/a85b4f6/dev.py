# Update an existing user
@app.route("/api/users/<user_id>", methods=["PUT"])
def update_user(user_id):
    """
    Update an existing user.

    Args:
        user_id (str): The ID of the user to be updated.

    Returns:
        dict: A dictionary representing the updated user.

    Raises:
        ValueError: If an error occurs while connecting to the database.
        ValueError: If there was an error updating the user.
    """
    # Get data from the request
    data = request.json

    # Check that data is valid
    validation_error, status_code = user_validation(data)
    if validation_error:
        return validation_error, status_code

    # The request has been validated, connect to the database
    try:
        connect_to_db()
    except Exception as e:
        print("Error connecting to the database:", str(e))
        return (
            jsonify({"error": "Database connection error"}),
            status.HTTP_500_INTERNAL_SERVER_ERROR,
        )

    try:
        # Connect to the database
        db = firestore.client()

        # Add the new user to the 'users' collection
        new_user_ref = db.collection("users").document(user_id)
        new_user_ref.update(data)

        # Return the newly created user
        return jsonify(data), status.HTTP_200_OK

    except Exception as e:
        print("Error updating user:", str(e))
        return (
            jsonify({"error": "Error updating user"}),
            status.HTTP_500_INTERNAL_SERVER_ERROR,
        )

