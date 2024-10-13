#include <sys/socket.h>

int sockfd; // Socket file descriptor
int bufsize = 1024 * 1024; // Size of the buffer (1 MB)
setsockopt(sockfd, SOL_SOCKET, SO_SNDBUF, &bufsize, sizeof(bufsize));
setsockopt(sockfd, SOL_SOCKET, SO_RCVBUF, &bufsize, sizeof(bufsize));