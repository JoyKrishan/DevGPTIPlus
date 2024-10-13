from openai import OpenAI
import instructor

client = instructor.patch(OpenAI())

# Define a user detail model
class UserDetail(BaseModel):
    name: str
    age: int

# Extract user details with ease
user = client.chat.completions.create(
    model="gpt-3.5-turbo",
    response_model=UserDetail,
    messages=[{"role": "user", "content": "Extract Jason is 25 years old"}]
)

assert isinstance(user, UserDetail)
assert user.name == "Jason"
assert user.age == 25