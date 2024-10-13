import json
import pytest
from pytest_httpx import HTTPXMock, IteratorStream

def stream_completion_events():
    choices_chunks = [
        [
            {
                "text": "\n\n",
                "index": 0,
                "logprobs": {
                    "tokens": ["\n\n"],
                    "token_logprobs": [-0.6],
                    "top_logprobs": [{"\n\n": -0.6, "\n": -1.9}],
                    "text_offset": [16],
                },
                "finish_reason": None,
            }
        ],
        [
            {
                "text": "Hi",
                "index": 0,
                "logprobs": {
                    "tokens": ["Hi"],
                    "token_logprobs": [-1.1],
                    "top_logprobs": [{"Hi": -1.1, "Hello": -0.7}],
                    "text_offset": [18],
                },
                "finish_reason": None,
            }
        ],
        [
            {
                "text": ".",
                "index": 0,
                "logprobs": {
                    "tokens": ["."],
                    "token_logprobs": [-1.1],
                    "top_logprobs": [{".": -1.1, "!": -0.9}],
                    "text_offset": [20],
                },
                "finish_reason": None,
            }
        ],
        [
            {
                "text": "",
                "index": 0,
                "logprobs": {
                    "tokens": [],
                    "token_logprobs": [],
                    "top_logprobs": [],
                    "text_offset": [],
                },
                "finish_reason": "stop",
            }
        ],
    ]

    for choices in choices_chunks:
        yield "data: {}\n\n".format(
            json.dumps(
                {
                    "id": "cmpl-80MdSaou7NnPuff5ZyRMysWBmgSPS",
                    "object": "text_completion",
                    "created": 1695097702,
                    "choices": choices,
                    "model": "gpt-3.5-turbo-instruct",
                }
            )
        ).encode("utf-8")
    yield "data: [DONE]\n\n".encode("utf-8")

@pytest.fixture
def mocked_openai_completion_logprobs_stream(httpx_mock: HTTPXMock):
    httpx_mock.add_response(
        method="POST",
        url="https://api.openai.com/v1/completions",
        stream=IteratorStream(stream_completion_events()),
        headers={"Content-Type": "text/event-stream"},
    )