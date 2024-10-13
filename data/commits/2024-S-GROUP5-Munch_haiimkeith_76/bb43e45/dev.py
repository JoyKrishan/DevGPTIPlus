    token = request.headers.get("Authorization").split(" ")[1]
            user_id = decoded_token["sub"]