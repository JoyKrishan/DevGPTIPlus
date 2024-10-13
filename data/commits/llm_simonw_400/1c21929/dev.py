def _log_response(response, *args, **kwargs):
    click.echo(response.text, err=True)
    return response

_log_session = requests.Session()
_log_session.hooks["response"].append(_log_response)


def is_openai_pre_1():
    return openai.version.VERSION.startswith("0.")


if is_openai_pre_1 and os.environ.get("LLM_OPENAI_SHOW_RESPONSES"):
    openai.requestssession = _log_session


class OpenAILegacyWrapper:
    def __init__(self, client):
        self.client = client

    @property
    def ChatCompletion(self):
        return self.client.chat.completions

    @property
    def Completion(self):
        return self.client.completions

    @property
    def Embedding(self):
        return self.client.embeddings


def get_openai_client():
    if is_openai_pre_1:
        return openai

    if os.environ.get("LLM_OPENAI_SHOW_RESPONSES"):
        client = openai.OpenAI(requestssession=_log_session)
    else:
        client = openai.OpenAI()

    return OpenAILegacyWrapper(client)


client = get_openai_client()
        results = client.Embedding.create(**kwargs)["data"]
            completion = client.ChatCompletion.create(
            completion = client.ChatCompletion.create(
            completion = client.Completion.create(
            completion = client.Completion.create(