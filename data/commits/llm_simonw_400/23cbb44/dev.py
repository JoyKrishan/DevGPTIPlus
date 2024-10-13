import json
        last_request = mocked_openai_chat.get_requests()[-1]
        assert json.loads(last_request.content) == {
        mocked_openai_chat.reset(assert_all_responses_were_requested=False)