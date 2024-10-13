        # Test getting a non-existing user
        bad_get_response = self.client.get(f"/api/users/bad_id")
        self.assertEqual(
            bad_get_response.status_code, status.HTTP_404_NOT_FOUND
        )

        # Data that will Error (mising a field)
        bad_data = {
            "bio": "",
            "username": "",
            "bookmarks": [],
            "following": [],
            "likes": [],
            "posts": [],
        }

        # Creating an invalid user
        try:
            response = self.client.post("/api/users/bad_id", json=bad_data)
        except:
            # self.assertEqual(response.json, {"error": "Error adding new user"})
            self.assertEqual(
                response.status_code, status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        # Updating a post invalidly
        try:
            response = self.client.patch(f"/api/users/bad_id", json=bad_data)
        except:
            self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # Delete users
        delete_response = self.client.delete(f"/api/users/bad_id")
