from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Access the environment variables
openai_organization = os.getenv("OPENAI_ORGANIZATION")
openai_api_key = os.getenv("OPENAI_API_KEY")

# Use the variables in your code
# ...