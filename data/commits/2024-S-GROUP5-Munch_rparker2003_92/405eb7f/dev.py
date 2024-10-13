from unittest import TestCase
from unittest.mock import patch

import os
import sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

import status
from server import app


class BookmarkTest(TestCase):
    # set up
    def setUp(self):
        self.app = app
        self.app.testing = True

        self.client = self.app.test_client()

    # actual tests of bookmarks
    def test_bookmark(self):
        # create mock user and test it
        testing_user_id = "bookmark_test_id"
        create_user = self.client.post(f"/api/users/{testing_user_id}")
        self.assertEqual(create_user.status_code, status.HTTP_201_CREATED)

        # create mock data for a new post
        new_post_mock_data = {
            "author": f"users/{testing_user_id}",
            "comments": [
                {
                    "author": f"users/{testing_user_id}",
                    "comment": "Bookmark Test!!!",
                    "comment_id": "comment_id",
                    "creation_date": "2024-04-04 22:53:36.118000+00:00",
                    "username": "test_user",
                }
            ],
            "creation_date": "2024-03-20 21:41:30.786000+00:00",
            "description": "Bookmark Unit Test Post",
            "likes": 0,
            "location": "36.1048299,-115.1454664",
            "pictures": [],
            "username": "test_user",
        }
        # create mock post using mock data
        create_post = self.client.post(f"/api/posts", json=new_post_mock_data)
        self.assertEqual(create_post.status_code, status.HTTP_201_CREATED)

        # test if post is not a field in request
        mock_bookmark_post = {"invalid": "posts/Invalid Test"}
        patch_bookmark = self.client.patch(
            f"/api/users/{testing_user_id}/bookmarks", json=mock_bookmark_post
        )
        self.assertEqual(
            patch_bookmark.status_code, status.HTTP_400_BAD_REQUEST
        )

        # test an invalid post test
        mock_bookmark_post = {"post": "posts/Invalid test"}
        patch_bookmark = self.client.patch(
            f"/api/users/{testing_user_id}/bookmarks", json=mock_bookmark_post
        )
        self.assertEqual(
            patch_bookmark.status_code, status.HTTP_400_BAD_REQUEST
        )

        # test a valid post
        # get actual post created from database
        get_user_posts = self.client.get(f"/api/users/{testing_user_id}")
        post_id = get_user_posts.json["posts"][0]
        # make that the mock post
        mock_bookmark_post = {"post": post_id}
        # adding a valid post bookmark test
        patch_bookmark = self.client.patch(
            f"/api/users/{testing_user_id}/bookmarks", json=mock_bookmark_post
        )
        self.assertEqual(patch_bookmark.status_code, status.HTTP_200_OK)

        # removing a valid post bookmark test
        patch_bookmark = self.client.patch(
            f"/api/users/{testing_user_id}/bookmarks", json=mock_bookmark_post
        )
        self.assertEqual(patch_bookmark.status_code, status.HTTP_200_OK)

        # test exception
        with patch(
            "bookmark_routes.firestore.client",
            side_effect=Exception("Simulating an exception"),
        ):
            patch_bookmark = self.client.patch(
                f"/api/users/{testing_user_id}/bookmarks",
                json=mock_bookmark_post,
            )
            self.assertEqual(
                patch_bookmark.status_code,
                status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        # delete the mock post
        delete = self.client.delete(f"/api/{post_id}")
        self.assertEqual(delete.status_code, status.HTTP_200_OK)

        # create mock data for a new recipe
        new_recipe_mock_data = {
            "author": f"users/{testing_user_id}",
            "comments": [
                {
                    "author": f"users/{testing_user_id}",
                    "comment": "Bookmark Test!!!",
                    "comment_id": "comment_id",
                    "creation_date": "2024-04-04 22:53:36.118000+00:00",
                    "username": "test_user",
                }
            ],
            "creation_date": "2024-03-20 21:41:30.786000+00:00",
            "description": "Bookmark Unit Test Recipe",
            "likes": 0,
            "ingredients": [],
            "pictures": [],
            "steps": [],
            "username": "test_user",
        }
        # create mock recipe using mock data
        create_recipe = self.client.post(
            f"/api/recipes", json=new_recipe_mock_data
        )
        self.assertEqual(create_recipe.status_code, status.HTTP_201_CREATED)

        # test an invalid recipe test
        mock_bookmark_post = {"post": "recipes/Invalid test"}
        patch_bookmark = self.client.patch(
            f"/api/users/{testing_user_id}/bookmarks", json=mock_bookmark_post
        )
        self.assertEqual(
            patch_bookmark.status_code, status.HTTP_400_BAD_REQUEST
        )

        # test a valid recipe
        # get actual recipe from database
        get_user_posts = self.client.get(f"/api/users/{testing_user_id}")
        recipe_id = get_user_posts.json["posts"][0]
        # make that the mock recipe
        mock_bookmark_post = {"post": recipe_id}
        # adding a valid recipe bookmark test
        patch_bookmark = self.client.patch(
            f"/api/users/{testing_user_id}/bookmarks", json=mock_bookmark_post
        )
        self.assertEqual(patch_bookmark.status_code, status.HTTP_200_OK)

        # removing a valid recipe bookmark test
        patch_bookmark = self.client.patch(
            f"/api/users/{testing_user_id}/bookmarks", json=mock_bookmark_post
        )
        self.assertEqual(patch_bookmark.status_code, status.HTTP_200_OK)

        # delete the mock recipe
        delete = self.client.delete(f"/api/{recipe_id}")
        self.assertEqual(delete.status_code, status.HTTP_200_OK)