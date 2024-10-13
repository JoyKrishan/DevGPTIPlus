import os
import sys

# Append parent directory to sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))


import unittest
import status
from server import app
from google.cloud import firestore


class TestAPI(unittest.TestCase):

    def setUp(self):
        self.app = app
        self.app.testing = True
        self.client = self.app.test_client()

    def test_recipe(self):
        testing_user_id = "test_user_id"

        # Create a test user for route check
        create_user_response = self.client.post(f"/api/users/{testing_user_id}")
        self.assertEqual(
            create_user_response.status_code, status.HTTP_201_CREATED
        )

        # Test creating a new recipe
        new_recipe_mock_data = {
            "author": f"users/{testing_user_id}",
            "comments": [
                {
                    "author": f"users/{testing_user_id}",
                    "comment": "First!",
                    "comment_id": "comment_id",
                    "creation_date": "2024-03-20 22:53:36.118000+00:00",
                    "username": "test_user",
                }
            ],
            "creation_date": "2024-03-20 21:41:30.786000+00:00",
            "description": "This is my first post!",
            "likes": 0,
            "pictures": [],
            "steps": [],
            "ingredients": [],
            "username": "test_user",
        }

        # Create recipe
        create_recipe_response = self.client.post(
            f"/api/recipes", json=new_recipe_mock_data
        )
        self.assertEqual(new_recipe_mock_data, create_recipe_response.json)
        self.assertEqual(
            create_recipe_response.status_code, status.HTTP_201_CREATED
        )

        # Call to get user route to get list of recipes, this is to find recipe_id
        get_user_response = self.client.get(f"/api/users/{testing_user_id}")
        # Save the recipe id from the above response
        recipe_id = get_user_response.json["posts"][0].split("/")[1]

        # Test updating a recipe
        updated_recipe_mock_data = {
            "author": f"users/{testing_user_id}",
            "comments": [
                {
                    "author": f"users/{testing_user_id}",
                    "comment": "Updating comment on my first post!",
                    "comment_id": "comment_id",
                    "creation_date": "2024-03-20 22:53:36.118000+00:00",
                    "username": "test_user",
                }
            ],
            "creation_date": "2024-03-20 21:41:30.786000+00:00",
            "description": "This is my first post and I just edited it!",
            "likes": 0,
            "pictures": [],
            "steps": [],
            "ingredients": [],
            "pictures": [],
            "username": "test_user",
        }

        # Update recipe
        update_response = self.client.patch(
            f"api/recipes/{recipe_id}", json=updated_recipe_mock_data
        )
        self.assertEqual(updated_recipe_mock_data, update_response.json)
        self.assertEqual(update_response.status_code, status.HTTP_200_OK)

        # Test getting a non-existing recipe
        bad_get_response = self.client.get(f"/api/recipes/bad_id")
        self.assertEqual(
            bad_get_response.status_code, status.HTTP_404_NOT_FOUND
        )

        # Get recipe
        get_response = self.client.get(f"/api/recipes/{recipe_id}")
        self.assertEqual(updated_recipe_mock_data, get_response.json)
        self.assertEqual(get_response.status_code, status.HTTP_200_OK)

        # Data that will Error (missing a field)
        bad_data = {
            "author": f"users/{testing_user_id}",
            "comments": [
                {
                    "author": f"users/{testing_user_id}",
                    "comment": "Updating comment on my first post!",
                    "comment_id": "comment_id",
                    "creation_date": "2024-03-20 22:53:36.118000+00:00",
                    "username": "test_user",
                }
            ],
            "creation_date": "2024-03-20 21:41:30.786000+00:00",
            "description": "This is my first post and I just edited it!",
            "likes": 0,
            "pictures": [],
            "steps": [],
            "username": "test_user",
        }

        # Creating an invalid recipe
        try:
            response = self.client.post("/api/recipes", json=bad_data)
        except:
            self.assertEqual(
                response.status_code, status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        # Updating a recipe invalidly
        try:
            response = self.client.patch(
                f"/api/recipes/invalid_data", json=bad_data
            )
        except:
            self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # Delete recipe
        delete_response = self.client.delete(f"api/recipes/{recipe_id}")
        self.assertEqual(delete_response.json, {"message": "Recipe Deleted"})
        self.assertEqual(delete_response.status_code, status.HTTP_200_OK)

        # Delete test user after route check is done
        delete_user_response = self.client.delete(
            f"/api/users/{testing_user_id}"
        )
        self.assertEqual(delete_user_response.json, {"message": "User deleted"})
        self.assertEqual(delete_user_response.status_code, status.HTTP_200_OK)


if __name__ == "__main__":
    unittest.main()