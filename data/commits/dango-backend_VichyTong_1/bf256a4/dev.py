import uuid
clients = {}

class OpenAIClient:
        self.history = []
    def generate_chat_completion(self, model="gpt-3.5-turbo"):
        return (
            self.client.chat.completions.create(messages=self.history, model=model)
            .choices[0]
            .message.content
        )


def create_client():
    client_id = str(uuid.uuid4())
    client = OpenAIClient(client_id, api_key=os.environ.get("OPENAI_API_KEY"))
    clients[client_id] = client
    return client_id, client


def get_client(client_id): 
    return clients.get(client_id)