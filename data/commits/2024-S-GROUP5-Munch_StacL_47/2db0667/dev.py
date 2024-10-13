import copy
    if str(author[len("users/") :]) not in users:
    post_data["author"] = post_data["author"].path

    # Convert the comments to a dictionary
        comment["author"] = comment["author"].path
    return jsonify(post_data), status.HTTP_200_OK
    res = request.json
    validation_error, status_code = post_validation(res)
    # Make a deep copy of the data
    data = copy.deepcopy(res)

        data["author"] = db.document(data["author"])

            comment["author"] = db.document(comment["author"])
        # # Update user posts list
        # Get the user reference
        user_ref = db.collection("users").document(data["author"].id)

        # Get the user data
        user_data = user_ref.get().to_dict()

        post_ref = db.document("posts/" + new_post_ref.id)

        # Add the new post to the user's posts list
        user_data["posts"].append(post_ref)

        # Update the user data
        user_ref.update(user_data)
        return jsonify(res), status.HTTP_201_CREATED
    res = request.json
    # Validate the JSON res
    validation_error, status_code = post_validation(res)
    # Make a deep copy of the data
    data = copy.deepcopy(res)


        data["author"] = db.document(data["author"])

        for comment in data["comments"]:
            comment["author"] = db.document(comment["author"])

        return jsonify(res), status.HTTP_200_OK
        # Get the post reference
        post_ref = db.collection("posts").document(post_id)

        # Get the post data
        post_data = post_ref.get().to_dict()

        # Delete the post
        post_ref.delete()

        # Get the user reference
        user_ref = db.collection("users").document(
            str(post_data["author"].path[len("users/") :])
        )

        # Get the user data
        user_data = user_ref.get().to_dict()

        # Get the post reference
        user_data["posts"].remove(post_ref)

        # Update the user data
        user_ref.update(user_data)
    # Check connection to the database
    try_connect_to_db()

        # Get the database
        db = firestore.client()
        # Query for the first 50 posts of the specified user
        user_ref = db.collection("users").document(user_id)
        user_data = user_ref.get().to_dict()
        post_data = user_data["posts"]

        # Initialize an empty list to store post data
        user_posts = []

        # Iterate over the query results
        for post_doc in post_data:
            # Get the post reference
            post_ref = db.collection("posts").document(
                post_doc.path[len("posts/") :]
            )
            # Get the post data
            post_data = post_ref.get().to_dict()
            post_data["author"] = post_data["author"].path

            # Convert the comments to a dictionary
            for comment in post_data["comments"]:
                comment["author"] = comment["author"].path
            # Append the post data to the list
            user_posts.append(post_data)

        # Return the list of post data as JSON response
        return jsonify(user_posts)

    except Exception as e:
        print("Error fetching user's posts:", str(e))
        return (
            jsonify({"error": "Error fetiching user's posts"}),
            status.HTTP_500_INTERNAL_SERVER_ERROR,
        )