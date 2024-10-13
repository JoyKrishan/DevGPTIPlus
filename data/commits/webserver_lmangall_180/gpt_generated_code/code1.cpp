#include <sys/socket.h>
#include <iostream>

void set_socket_buffer_size(int sockfd, int size) {
    // Set the send buffer size
    if (setsockopt(sockfd, SOL_SOCKET, SO_SNDBUF, &size, sizeof(size)) < 0) {
        perror("setsockopt SO_SNDBUF failed");
    }

    // Set the receive buffer size
    if (setsockopt(sockfd, SOL_SOCKET, SO_RCVBUF, &size, sizeof(size)) < 0) {
        perror("setsockopt SO_RCVBUF failed");
    }
}