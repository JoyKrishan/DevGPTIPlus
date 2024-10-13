import unittest
import requests
import server
from server import app

import os
import firebase_admin
import status
from flask import Flask, jsonify, request
from firebase_admin import credentials
from firebase_admin import firestore
from dotenv import load_dotenv


# Function for setting up database and common functionality between API route calls
class SetUp:
    base_url = "http://127.0.0.1:5000/api/posts"  # Adjust URL as needed
    users_url = "http://127.0.0.1:5000/api/users"
    client = app.test_client()

    def database_connect(self):
        # Connect to database
        server.try_connect_to_db()

    # Test posting a user to the database
    def test_user(self):
        testing_user_id = ""
        db = firestore.client()
        # User Testing Data
        new_user_data = {
            "bio": "test_create_post bio",
            "bookmarks": ["URL to post 1", "URL to post 2"],
            "followers": [
                "URL to other users following current user 1",
                "URL to other users following current user 2",
            ],
            "following": [
                "URL to other users current user follows 1",
                "URL to other users current user follows 2",
            ],
            "likes": ["URL to other users 1", "URL to other users 2"],
            "posts": ["URL to users own posts 1", "URL to users own posts 2"],
            "username": "<Users Username>",
        }

        # Post into users database
        response = self.client.post(self.users_url, json=new_user_data)

        # Grab all users
        users_collection = db.collection("users")
        user_docs = users_collection.get()

        # Look for the test post created and append the appropriate user id
        for user in user_docs:
            user_data = user.to_dict()
            if user_data.get("bio", "") == "test_create_post bio":
                testing_user_id = user.id

        # Create the author reference as string
        author_id = "users/" + testing_user_id
        return author_id

    # Testing posting a user's post into the database, takes in the user's id
    def test_post(self, author_id):
        testing_id = ""
        db = firestore.client()
        print("IMPORTANT TEST", author_id)
        # Test creating a new post
        new_post_data = {
            "author": author_id,
            "comments": [
                {
                    "author": author_id,
                    "comment": "Valid Input different",
                    "creation_date": "2024-03-25 21:41:30.786000+00:00",
                }
            ],
            "creation_date": "2024-03-25 23:45:20.786000+00:00",
            "description": "test_create_post method",
            "likes": 0,
            "location": "36.1048299,-115.1454664",
            "pictures": ["ROUTE/TO/SOME/PIC", "ROUTE/TO/ANOTHER/PIC"],
        }

        # Post the test post data
        response = self.client.post(self.base_url, json=new_post_data)
        # Grab all posts
        posts_collection = db.collection("posts")
        docs = posts_collection.get()

        # Look for test post created
        for doc in docs:
            doc_data = doc.to_dict()
            if doc_data.get("description", " ") == "test_create_post method":
                testing_id = doc.id

        return testing_id, response

    # Test to update a user's post, takes in the user's id and the post's id
    def test_update(self, author_id, post_id):
        testing_id = ""
        db = firestore.client()
        # Test creating a new post
        new_post_data = {
            "author": author_id,
            "comments": [
                {
                    "author": author_id,
                    "comment": "Update Method Called!",
                    "creation_date": "2024-03-25 21:41:30.786000+00:00",
                }
            ],
            "creation_date": "2024-03-25 23:45:20.786000+00:00",
            "description": "test_update_post method",
            "likes": 0,
            "location": "36.1048299,-115.1454664",
            "pictures": ["ROUTE/TO/SOME/PIC", "ROUTE/TO/ANOTHER/PIC"],
        }

        # Post the test post data
        response = self.client.put(
            f"{self.base_url}/{post_id}", json=new_post_data
        )
        # Grab all posts
        posts_collection = db.collection("posts")
        docs = posts_collection.get()

        # Look for test post created
        for doc in docs:
            doc_data = doc.to_dict()
            if doc_data.get("description", " ") == "test_update_post method":
                testing_id = doc.id

        return response


# Testing class
class TestAPI(unittest.TestCase):
    base_url = "http://127.0.0.1:5000/api/posts"  # Adjust URL as needed
    users_url = "http://127.0.0.1:5000/api/users"
    api_url = "http://127.0.0.1:5000/api"

    # Call setup class
    db = SetUp()
    # Create client application
    client = app.test_client()

    # Create test
    def test_create_post(self):
        # Connect to db
        self.db.database_connect()
        # Post user and retrieve author id
        testing_author_id = self.db.test_user()
        # Post user's post and retrieve post id and response code
        testing_post_id, response = self.db.test_post(testing_author_id)

        # Deleting all testing data
        self.client.delete(f"{self.base_url}/{testing_post_id}")
        self.client.delete(f"{self.api_url}/{testing_author_id}")

        self.assertEqual(
            response.status_code, 201
        )  # Check if status code is created

        # Check Bad Data Error
        response = self.client.post(self.users_url, json={"Data": "Bad Data"})
        self.assertNotEqual(response.status_code, 201)

    # Get post test
    def test_get_post(self):
        # Connect to db
        self.db.database_connect()
        # Post user and retrieve author id
        testing_author_id = self.db.test_user()
        # Post user's post and retrieve post id and response code
        testing_post_id, response = self.db.test_post(testing_author_id)

        # Call client to get the post we have created
        response = self.client.get(f"{self.base_url}/{testing_post_id}")

        # Deleting all testing data
        requests.delete(f"{self.base_url}/{testing_post_id}")
        requests.delete(f"{self.api_url}/{testing_author_id}")

        self.assertEqual(
            response.status_code, 200
        )  # Check if status code is OK

        # Check if get error message is correct
        response = self.client.get(f"{self.base_url}/DoesNotExist")

        self.assertNotEqual(response.status_code, 200)

    def test_update_post(self):
        # Connect to db
        self.db.database_connect()
        # Post user and retrieve author id
        testing_author_id = self.db.test_user()
        # Post user's post and retrieve post id and response code
        testing_post_id, response = self.db.test_post(testing_author_id)

        # Update test into db using author id and existing post id
        response = self.db.test_update(testing_author_id, testing_post_id)

        self.assertEqual(response.status_code, 200)

        # Deleting all testing data
        requests.delete(f"{self.base_url}/{testing_post_id}")
        requests.delete(f"{self.api_url}/{testing_author_id}")

    def test_delete_post(self):
        # Connect to db
        self.db.database_connect()
        # Post user and retrieve author id
        testing_author_id = self.db.test_user()
        # Post user's post and retrieve post id and response code
        testing_post_id, response = self.db.test_post(testing_author_id)

        # Deleting all testing data
        response = self.client.delete(f"{self.base_url}/{testing_post_id}")
        self.client.delete(f"{self.api_url}/{testing_author_id}")

        self.assertEqual(
            response.status_code, 200
        )  # Check if status code is created

        response = self.client.delete(f"{self.base_url}/InvalidID")

        self.assertNotEqual(response.status_code, 200)


if __name__ == "__main__":
    unittest.main()