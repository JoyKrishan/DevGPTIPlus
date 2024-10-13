

    def __init__(self, client_id, api_key=None):
        self.client_id = client_id
    def append_system_message(self, message):
        self.history.append({"role": "system", "content": message})
