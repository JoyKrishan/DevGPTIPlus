import socket # Importa el módulo socket

host = "localhost"# Direccion del servidor remoto
port = 12345 # Puerto del servidor remoto
user = "Jhon" # Nombre de usuario

#s = socket.socket() # Crea un objeto socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)


try:
    s.connect((host, port))# Conecta el socket al servidor remoto
    print("Connected to server successfully!")
   
except ConnectionRefusedError:
    print("Connection refused. Please check if the server is running and the host and port are correct.")
except Exception as e:
    print(f"An error occurred while connecting to the server: {e}")

s.sendall(user.encode())# Envia el nombre de usuario al servidor remoto

data = s.recv(1024)# Recibe datos del servidor remoto
print(data.decode())

s.close() # Cierra la conexión
