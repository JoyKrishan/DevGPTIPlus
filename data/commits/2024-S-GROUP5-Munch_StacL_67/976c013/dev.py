import status
from flask import jsonify, request, Blueprint
from firebase_admin import firestore
from helper_functions import try_connect_to_db, user_validation

user_bp = Blueprint("user", __name__)


# Get a specific user by id
@user_bp.route("/api/users/<user_id>", methods=["GET"])
def get_user(user_id):
    """
    Get a specific user by ID.

    Args:
        user_id (str): The ID of the user to retrieve.

    Returns:
        dict: A dictionary representing the user.

    Raises:
        ValueError: If an error occurs while connecting to the database.
        ValueError: If the specific user is not found.
    """
    # Connect to the database
    try_connect_to_db()

    # Get the database
    db = firestore.client()

    # Get the User by ID
    user_ref = db.collection("users").document(
        user_id
    )  # Check if collection is called "users"
    user_doc = user_ref.get()

    # Check if the user exists
    if not user_doc.exists:
        return (
            jsonify({"error": "No user found"}),
            status.HTTP_404_NOT_FOUND,
        )

    # Convert the user document to a dictionary
    user_data = user_doc.to_dict()

    # Convert the bio and username to strings
    user_data["bio"] = str(user_data["bio"])
    user_data["username"] = str(user_data["username"])
    # Convert the bookmarks, followers, following, likes, and posts to refernces
    user_data["bookmarks"] = [
        ref.path for ref in user_data.get("bookmarks", [])
    ]
    user_data["followers"] = [
        ref.path for ref in user_data.get("followers", [])
    ]
    user_data["following"] = [
        ref.path for ref in user_data.get("following", [])
    ]
    user_data["likes"] = [ref.path for ref in user_data.get("likes", [])]
    user_data["posts"] = [ref.path for ref in user_data.get("posts", [])]

    # Return the user ID as Dictionary
    return user_data


# Create a new user
@user_bp.route("/api/users/<user_id>", methods=["POST"])
def create_user(user_id):
    """
    Create a new user.

    Args:
        user_id (str): The user ID for the new user.

    Returns:
        dict: A dictionary representing the newly created user.

    Raises:
        ValueError: If an error occurs while connecting to the database.
        ValueError: If the specific user already exists.
    """
    # The request has been validated, connect to the database
    try_connect_to_db()

    try:
        # Connect to the database
        db = firestore.client()

        # Add the new user to the 'users' collection
        new_user_ref = db.collection("users").document(user_id)

        data = {
            "bio": "",
            "username": "",
            "bookmarks": [],
            "followers": [],
            "following": [],
            "likes": [],
            "posts": [],
        }

        # Set the user data
        new_user_ref.set(data)

        # Return the newly created user
        return jsonify(data), status.HTTP_201_CREATED

    except Exception as e:
        print("Error adding new user:", str(e))
        return (
            jsonify({"error": "Error adding new user"}),
            status.HTTP_500_INTERNAL_SERVER_ERROR,
        )


# Update an existing user
@user_bp.route("/api/users/<user_id>", methods=["PUT"])
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
    try_connect_to_db()

    try:
        # Connect to the database
        db = firestore.client()

        # Add the new user to the 'users' collection
        new_user_ref = db.collection("users").document(user_id)
        new_user_data = new_user_ref.get().to_dict()

        # Convert the bookmarks list to a list of document references
        new_user_data["bookmarks"] = [
            db.document(bookmark) for bookmark in data["bookmarks"]
        ]

        # Convert the followers list to a list of document references
        new_user_data["followers"] = [
            db.document(follower) for follower in data["followers"]
        ]

        # Convert the following list to a list of document references
        new_user_data["following"] = [
            db.document(following) for following in data["following"]
        ]

        # Convert the likes list to a list of document references
        new_user_data["likes"] = [db.document(like) for like in data["likes"]]

        # Convert the posts list to a list of document references
        new_user_data["posts"] = [db.document(post) for post in data["posts"]]

        # Update the users bio
        new_user_data["bio"] = data["bio"]

        # Update the users username
        new_user_data["username"] = data["username"]

        new_user_ref.update(new_user_data)

        # Return the newly created user
        return jsonify(data), status.HTTP_200_OK

    except Exception as e:
        print("Error updating user:", str(e))
        return (
            jsonify({"error": "Error updating user"}),
            status.HTTP_500_INTERNAL_SERVER_ERROR,
        )


# Delete a user
@user_bp.route("/api/users/<user_id>", methods=["DELETE"])
def delete_user(user_id):
    """
    Args:
        post_id (str): The ID of the post to be deleted.

    Returns:
        tuple: A tuple containing a JSON response and a status code.
    """
    # Check connection to the database
    try_connect_to_db()

    try:
        # Connect to the database
        db = firestore.client()

        # Get the user reference
        user_ref = db.collection("users").document(user_id)

        # Get the user data
        user_data = user_ref.get().to_dict()

        # Delete all posts from the user
        for post in user_data["posts"]:
            post_ref = db.document(post.path)
            post_ref.delete()

        # Delete the user
        user_ref.delete()

        # Return a success message
        return jsonify({"message": "User deleted"}), status.HTTP_200_OK

    except Exception as e:
        print("Error deleting user:", str(e))
        return (
            jsonify({"error": "Error deleting user"}),
            status.HTTP_500_INTERNAL_SERVER_ERROR,
        )