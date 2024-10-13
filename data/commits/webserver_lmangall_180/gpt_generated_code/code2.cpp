#include <sys/socket.h>
#include <iostream>

void check_socket_buffer_size(int sockfd) {
    int snd_size;
    int rcv_size;
    socklen_t optlen = sizeof(snd_size);  // Initialize to the size of the variable that will store the buffer size

    // Get the send buffer size
    if (getsockopt(sockfd, SOL_SOCKET, SO_SNDBUF, &snd_size, &optlen) < 0) {
        perror("getsockopt SO_SNDBUF failed");
    } else {
        std::cout << "Send buffer size: " << snd_size << " bytes" << std::endl;
    }

    // Get the receive buffer size
    if (getsockopt(sockfd, SOL_SOCKET, SO_RCVBUF, &rcv_size, &optlen) < 0) {
        perror("getsockopt SO_RCVBUF failed");
    } else {
        std::cout << "Receive buffer size: " << rcv_size << " bytes" << std::endl;
    }
}