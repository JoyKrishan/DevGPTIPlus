import status
from flask import jsonify, request, Blueprint
from firebase_admin import firestore
from helper_functions import try_connect_to_db

comment_bp = Blueprint("comment", __name__)

@comment_bp.route("/api/users/<user_id>/comment/<post_id>", methods=["PATCH"])
def comment_post(user_id, post_id):
  try_connect_to_db() 
  db = firestore.client()
  user_ref = db.collection("users").document(user_id)
  user_data = user_ref.get().to_dict()

  if !user_data:
    return (
      jsonify({"error": "User not found"}), status.HTTP_404_NOT_FOUND,
    )

  post_ref = db.collection("posts").document(post_id)
  post_data = post_ref.get().to_dict()

  if not post_data:
      return (
          jsonify({"error": "Post not found"}), status.HTTP_404_NOT_FOUND,
      )