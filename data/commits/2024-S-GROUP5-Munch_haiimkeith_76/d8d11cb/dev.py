


    # user_id: Who commented on the post
    # post_id: The post reference itself

    try_connect_to_db()
    db = firestore.client()

    # Gives current time
    current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f%z")

    post_ref = db.collection("posts").document(post_id)
    post_data = post_ref.get().to_dict()

    if not post_data:
        return (
            jsonify({"error": "Post not found"}),
            status.HTTP_404_NOT_FOUND,
        )

    post_comments = post_data.get("comments")

    res = request.json

    new_author = "/users/" + user_id
    new_comment = res["comment"]
    new_comment_id = generate_unique_id()

    testing_json = {
        "author": new_author,
        "comment": new_comment,
        "comment_id": new_comment_id,
        "creation_date": current_time,
    }

    post_comments.append(testing_json)
    post_data["comments"] = post_comments
    post_ref.update(post_data)

    return jsonify(request.json), status.HTTP_200_OK


@comment_bp.route(
    "/api/posts/comment/<post_id>/<comment_id>", methods=["DELETE"]
)
    # user_id: Who commented on the post
    # post_id: The post reference itself

    try_connect_to_db()
    db = firestore.client()

    post_ref = db.collection("posts").document(post_id)
    post_data = post_ref.get().to_dict()

    if not post_data:
        return (
            jsonify({"error": "Post not found"}),
            status.HTTP_404_NOT_FOUND,
        )

    post_comments = post_data.get("comments")

    # Create a new list with comments except the one with the specified comment_id

    post_comments = [
        comment
        for comment in post_comments
        if comment["comment_id"] != comment_id
    ]

    post_data["comments"] = post_comments
    post_ref.update(post_data)

    return jsonify(request.json), status.HTTP_200_OK