    # user_id: Whoever comments on the post
    # Connect to database
    # Grab the posts reference from firebase DB using post id, then grab data from reference
    # Error checking that post exists
    
    # Grab the users reference from firebase DB using user id, the grab data from reference
    user_ref = db.collection("users").document(user_id)
    user_data = user_ref.get().to_dict()
    
    # Error checking that user exists
    if not user_data:
        return(
            jsonify({"error": "User not found"}),
            status.HTTP_404_NOT_FOUND,
        )
        
    # Grab comments from the post 
    # Get the request's json (Should be the comment itself) i.e. "comment": "Some comment information"
    
    # Create a copy of the result
    # Setting up data with author id, use db.document to create reference in Firebase
    comment_json = {
    # Append the comment to the list of comments, set it to the new post data and set it into the reference
    post_comments.append(comment_json)
    # comment_id: The ID of the comment on the post
    # Grab the posts reference from firebase DB using post id, then grab data from reference
    # Error checking that post exists
    # Grab comments from the post
    # Set it to the new post data and set it into the reference