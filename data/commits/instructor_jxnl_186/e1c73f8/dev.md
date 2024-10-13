# Welcome to Instructor - Your Gateway to Structured Outputs with OpenAI
[![Documentation](https://img.shields.io/badge/docs-available-brightgreen)](https://jxnl.github.io/instructor)
[![GitHub issues](https://img.shields.io/github/issues/jxnl/instructor.svg)](https://github.com/jxnl/instructor/issues)
[![Twitter Follow](https://img.shields.io/twitter/follow/jxnlco?style=social)](https://twitter.com/jxnlco)

Dive into the world of Python-based structured extraction, empowered by OpenAI's cutting-edge function calling API. Instructor stands out for its simplicity, transparency, and user-centric design. Whether you're a seasoned developer or just starting out, you'll find Instructor's approach intuitive and its results insightful.

## Get Started in Moments

Installing Instructor is a breeze. Just run `pip install instructor` in your terminal and you're on your way to a smoother data handling experience.

## How Instructor Enhances Your Workflow

Our `instructor.patch` for the `OpenAI` class introduces three key enhancements:
- **Response Mode:** Specify a Pydantic model to streamline data extraction.
- **Max Retries:** Set your desired number of retry attempts for requests.
- **Validation Context:** Provide a context object for enhanced validator access.
  A Glimpse into Instructor's Capabilities

!!! note "Using Validators"

    Learn more about validators checkout our blog post [Good llm validation is just good validation](https://jxnl.github.io/instructor/blog/2023/10/23/good-llm-validation-is-just-good-validation/)

With Instructor, your code becomes more efficient and readable. Here’s a quick peek:
**"Using `openai<1.0.0`"**
If you're using `openai<1.0.0` then make sure you `pip install instructor<0.3.0`
where you can patch a global client like so:
```python hl_lines="4 8"
import openai
import instructor
instructor.patch()
user = openai.ChatCompletion.create(
    ...,
    response_model=UserDetail,
)
```
**"Using async clients"**
For async clients you must use apatch vs patch like so:
```py
import instructor
from openai import AsyncOpenAI
aclient = instructor.apatch(AsyncOpenAI())
class UserExtract(BaseModel):
    name: str
    age: int
model = await aclient.chat.completions.create(
    model="gpt-3.5-turbo",
    response_model=UserExtract,
    messages=[
        {"role": "user", "content": "Extract jason is 25 years old"},
    ],
)
assert isinstance(model, UserExtract)
from openai import OpenAI
## Contributing

If you want to help out checkout some of the issues marked as `good-first-issue` or `help-wanted`. Found [here](https://github.com/jxnl/instructor/labels/good%20first%20issue). They could be anything from code improvements, a guest blog post, or a new cook book.


# Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<a href="https://github.com/jxnl/instructor/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=jxnl/instructor" />
</a>