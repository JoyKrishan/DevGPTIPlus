import openai
from app.config.settings import settings


def test_openai_authentication():
    # Replace 'your_openai_api_key' with the actual OpenAI API key
    openai.organization = settings.OPENAI_ORGANIZATION
    openai.api_key = settings.OPENAI_API_KEY

    # Perform a test API request to check if authentication works
    response = openai.Completion.create(
        engine="davinci", prompt="This is a test prompt.", max_tokens=5
    )

    assert response["object"] == "text_completion"

    # Print a success message if authentication is successful
    print("OpenAI authentication successful!")