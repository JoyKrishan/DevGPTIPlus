import copy
    
    user_ref = db.collection("users").document(user_id)
    user_data = user_ref.get().to_dict()
    
    data = copy.deepcopy(res)
    new_author = db.document("users/" + user_id)
    username = user_data["username"]
        "username": username
    post_ref.set(post_data)
    "/api/posts/comment/<user_id>/<post_id>/<comment_id>", methods=["DELETE"]
def delete_comment_post(user_id, post_id, comment_id):
    
    
    
    # Error Checking if Comment ID exist
    comment_to_delete = next(
        (comment for comment in post_comments if comment["comment_id"] == comment_id),
        None,
    )
    if comment_to_delete is None:
        return (
            jsonify({"error": "Comment not found"}),
            status.HTTP_404_NOT_FOUND,
    )
    