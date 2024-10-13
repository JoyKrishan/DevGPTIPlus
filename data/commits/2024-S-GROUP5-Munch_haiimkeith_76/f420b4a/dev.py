
    user_ref = db.collection("users").document(user_id)
    user_data = user_ref.get().to_dict()

        "username": username,


        (
            comment
            for comment in post_comments
            if comment["comment_id"] == comment_id
        ),
        )
