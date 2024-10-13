from unittest import TestCase

import os
import sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from server import post_validation, app
import status


class PostTest(TestCase):
    def setUp(self):
        self.client = app.test_client()

    def test_post_validation(self):
        with app.app_context():
            # test if no data is passed
            testInput = None

            response, status_code = post_validation(testInput)
            self.assertEqual(response.json, {"error": "No data provided"})
            self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)

            # test for missing fields
            testInput = {
                "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                "comments": [
                    {
                        "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                        "comment": "Post Validation Unit Test Input",
                        "creation_date": "2024-03-25 22:53:36.118000+00:00",
                    }
                ],
                "description": "Test for missing fields in input",
                "likes": 0,
                "location": "36.1048299,-115.1454664",
                "pictures": ["ROUTE/TO/SOME/PIC", "ROUTE/TO/ANOTHER/PIC"],
            }

            response, status_code = post_validation(testInput)
            self.assertEqual(
                response.json,
                {"error": "Missing required field(s): creation_date"},
            )
            self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)

            # test for extra fields
            testInput = {
                "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                "comments": [
                    {
                        "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                        "comment": "Post Validation Unit Test Input",
                        "creation_date": "2024-03-25 22:53:36.118000+00:00",
                    }
                ],
                "creation_date": "2024-03-25 21:41:30.786000+00:00",
                "description": "Test for extra fields in input",
                "test": "fake extra field",
                "likes": 0,
                "location": "36.1048299,-115.1454664",
                "pictures": ["ROUTE/TO/SOME/PIC", "ROUTE/TO/ANOTHER/PIC"],
            }

            response, status_code = post_validation(testInput)
            self.assertEqual(
                response.json, {"error": "Input has extra field(s): test"}
            )
            self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)

            # make sure author input is a string
            testInput = {
                "author": 0,
                "comments": [
                    {
                        "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                        "comment": "Post Validation Unit Test Input",
                        "creation_date": "2024-03-25 22:53:36.118000+00:00",
                    }
                ],
                "creation_date": "2024-03-25 21:41:30.786000+00:00",
                "description": "Test to make sure author input is a string",
                "likes": 0,
                "location": "36.1048299,-115.1454664",
                "pictures": ["ROUTE/TO/SOME/PIC", "ROUTE/TO/ANOTHER/PIC"],
            }

            response, status_code = post_validation(testInput)
            self.assertEqual(
                response.json, {"error": "Invalid format for author"}
            )
            self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)

            # make sure author is an actual user in the databse
            testInput = {
                "author": "users/fakeuser",
                "comments": [
                    {
                        "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                        "comment": "Post Validation Unit Test Input",
                        "creation_date": "2024-03-25 22:53:36.118000+00:00",
                    }
                ],
                "creation_date": "2024-03-25 21:41:30.786000+00:00",
                "description": "Test to make sure author is an actual user",
                "likes": 0,
                "location": "36.1048299,-115.1454664",
                "pictures": ["ROUTE/TO/SOME/PIC", "ROUTE/TO/ANOTHER/PIC"],
            }

            response, status_code = post_validation(testInput)
            self.assertEqual(
                response.json,
                {"error": "Author field in post is not a reference to a user"},
            )
            self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)

            # test when comment is missing fields
            testInput = {
                "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                "comments": [
                    {
                        "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                        "creation_date": "2024-03-25 21:41:30.786000+00:00",
                    }
                ],
                "creation_date": "2024-03-25 21:41:30.786000+00:00",
                "description": "Test when comment is missing fields",
                "likes": 0,
                "location": "36.1048299,-115.1454664",
                "pictures": ["ROUTE/TO/SOME/PIC", "ROUTE/TO/ANOTHER/PIC"],
            }

            response, status_code = post_validation(testInput)
            self.assertEqual(
                response.json,
                {"error": "Missing required comment field(s): comment"},
            )
            self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)

            # test when comment has an extra field
            testInput = {
                "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                "comments": [
                    {
                        "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                        "comment": "Post Validation Unit Test Input",
                        "creation_date": "2024-03-25 21:41:30.786000+00:00",
                        "test": "extra field",
                    }
                ],
                "creation_date": "2024-03-25 21:41:30.786000+00:00",
                "description": "Test when comment has extra fields",
                "likes": 0,
                "location": "36.1048299,-115.1454664",
                "pictures": ["ROUTE/TO/SOME/PIC", "ROUTE/TO/ANOTHER/PIC"],
            }

            response, status_code = post_validation(testInput)
            self.assertEqual(
                response.json,
                {"error": "Comment input has extra field(s): test"},
            )
            self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)

            # test when comment is not a dict
            testInput = {
                "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                "comments": [["author", "comment", "creation_date"]],
                "creation_date": "2024-03-25 21:41:30.786000+00:00",
                "description": "Test when comment is not a dict",
                "likes": 0,
                "location": "36.1048299,-115.1454664",
                "pictures": ["ROUTE/TO/SOME/PIC", "ROUTE/TO/ANOTHER/PIC"],
            }

            response, status_code = post_validation(testInput)
            self.assertEqual(
                response.json, {"error": "Invalid format for comment"}
            )
            self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)

            # test when the actual comment is not a string
            testInput = {
                "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                "comments": [
                    {
                        "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                        "comment": 0,
                        "creation_date": "2024-03-25 21:41:30.786000+00:00",
                    }
                ],
                "creation_date": "2024-03-25 21:41:30.786000+00:00",
                "description": "Test when the actual comment is not a string",
                "likes": 0,
                "location": "36.1048299,-115.1454664",
                "pictures": ["ROUTE/TO/SOME/PIC", "ROUTE/TO/ANOTHER/PIC"],
            }

            response, status_code = post_validation(testInput)
            self.assertEqual(
                response.json, {"error": "Invalid format for comment"}
            )
            self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)

            # test when creation date for comment is not a string
            testInput = {
                "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                "comments": [
                    {
                        "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                        "comment": "Post Validation Unit Test Input",
                        "creation_date": 0,
                    }
                ],
                "creation_date": "2024-03-25 21:41:30.786000+00:00",
                "description": "Test when creation date is not a string",
                "likes": 0,
                "location": "36.1048299,-115.1454664",
                "pictures": ["ROUTE/TO/SOME/PIC", "ROUTE/TO/ANOTHER/PIC"],
            }

            response, status_code = post_validation(testInput)
            self.assertEqual(
                response.json, {"error": "Invalid format for comment"}
            )
            self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)

            # test when author in a comment is not an actual user
            testInput = {
                "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                "comments": [
                    {
                        "author": "users/fakeuser",
                        "comment": "Post Validation Unit Test Input",
                        "creation_date": "2024-03-25 21:41:30.786000+00:00",
                    }
                ],
                "creation_date": "2024-03-25 21:41:30.786000+00:00",
                "description": "Test when author for comment is not an actual user",
                "likes": 0,
                "location": "36.1048299,-115.1454664",
                "pictures": ["ROUTE/TO/SOME/PIC", "ROUTE/TO/ANOTHER/PIC"],
            }

            response, status_code = post_validation(testInput)
            self.assertEqual(
                response.json,
                {
                    "error": "Author field in comment is not a reference to a user"
                },
            )
            self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)

            # test when creation date for post is not a string
            testInput = {
                "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                "comments": [
                    {
                        "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                        "comment": "Post Validation Unit Test Input",
                        "creation_date": "2024-03-25 21:41:30.786000+00:00",
                    }
                ],
                "creation_date": 0,
                "description": "Test when creation date is not a string",
                "likes": 0,
                "location": "36.1048299,-115.1454664",
                "pictures": ["ROUTE/TO/SOME/PIC", "ROUTE/TO/ANOTHER/PIC"],
            }

            response, status_code = post_validation(testInput)
            self.assertEqual(
                response.json,
                {"error": "Invalid data type for one or more fields"},
            )
            self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)

            # test when description is not a string
            testInput = {
                "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                "comments": [
                    {
                        "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                        "comment": "Post Validation Unit Test Input",
                        "creation_date": "2024-03-25 21:41:30.786000+00:00",
                    }
                ],
                "creation_date": "2024-03-25 23:45:20.786000+00:00",
                "description": 0,
                "likes": 0,
                "location": "36.1048299,-115.1454664",
                "pictures": ["ROUTE/TO/SOME/PIC", "ROUTE/TO/ANOTHER/PIC"],
            }

            response, status_code = post_validation(testInput)
            self.assertEqual(
                response.json,
                {"error": "Invalid data type for one or more fields"},
            )
            self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)

            # test when likes is not an int
            testInput = {
                "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                "comments": [
                    {
                        "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                        "comment": "Post Validation Unit Test Input",
                        "creation_date": "2024-03-25 21:41:30.786000+00:00",
                    }
                ],
                "creation_date": "2024-03-25 23:45:20.786000+00:00",
                "description": "Test when likes is not an int",
                "likes": "test input for likes",
                "location": "36.1048299,-115.1454664",
                "pictures": ["ROUTE/TO/SOME/PIC", "ROUTE/TO/ANOTHER/PIC"],
            }

            response, status_code = post_validation(testInput)
            self.assertEqual(
                response.json,
                {"error": "Invalid data type for one or more fields"},
            )
            self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)

            # test when pictures is not a list
            testInput = {
                "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                "comments": [
                    {
                        "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                        "comment": "Post Validation Unit Test Input",
                        "creation_date": "2024-03-25 21:41:30.786000+00:00",
                    }
                ],
                "creation_date": "2024-03-25 23:45:20.786000+00:00",
                "description": "Test for when pictures is not a list",
                "likes": 0,
                "location": "36.1048299,-115.1454664",
                "pictures": 0,
            }

            response, status_code = post_validation(testInput)
            self.assertEqual(
                response.json,
                {"error": "Invalid data type for one or more fields"},
            )
            self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)

            # testing valid input
            testInput = {
                "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                "comments": [
                    {
                        "author": "users/user_2cwMgsX7SwXnnnYJ2piefltKxLO",
                        "comment": "Valid Input",
                        "creation_date": "2024-03-25 21:41:30.786000+00:00",
                    }
                ],
                "creation_date": "2024-03-25 23:45:20.786000+00:00",
                "description": "This input is formatted correctly!",
                "likes": 0,
                "location": "36.1048299,-115.1454664",
                "pictures": ["ROUTE/TO/SOME/PIC", "ROUTE/TO/ANOTHER/PIC"],
            }

            response, status_code = post_validation(testInput)
            self.assertEqual(response, None)
            self.assertEqual(status_code, status.HTTP_200_OK)