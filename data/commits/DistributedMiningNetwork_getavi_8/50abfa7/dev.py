
class Client:
        self.host = host  # Server IP
        self.port = port  # Server port
        self.user = user  # User name
            # Connect to the server
            self.socket.connect((self.host, self.port))
            print(
                "Connection refused. Please check if the server is running and the host and port are correct.")
    def send_user(self, msg=USER):
        self.socket.sendall(msg.encode())
        # print(data.decode('utf-8', 'ignore'))
        print(data.decode('latin-1'))

client = Client(HOST, PORT, USER)