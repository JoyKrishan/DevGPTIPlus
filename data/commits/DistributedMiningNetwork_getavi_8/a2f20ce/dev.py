import socket
from Constanst import *

class Client: 
    def __init__(self, host, port, user):
        self.host = host # Server IP
        self.port = port # Server port
        self.user = user # User name
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    def connect(self):
        try:
            self.socket.connect((self.host, self.port)) # Connect to the server
            print("Connected to server successfully!")
        except ConnectionRefusedError:
            print("Connection refused. Please check if the server is running and the host and port are correct.")
        except Exception as e:
            print(f"An error occurred while connecting to the server: {e}")

    def send_user(self):
        self.socket.sendall(self.user.encode())

    def receive_data(self):
        data = self.socket.recv(1024)
        print(data.decode())

    def close(self):
        self.socket.close()

# Example usage
client = Client(host, port, user)
client.connect()
client.send_user()
client.receive_data()
client.close()