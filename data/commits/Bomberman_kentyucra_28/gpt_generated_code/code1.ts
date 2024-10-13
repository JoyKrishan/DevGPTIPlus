function emitToClientsWithSameSession(sessionIdToEmit: number, event: string, data: any) {
    sessionMap.forEach((sessionId, socketId) => {
        if (sessionId === sessionIdToEmit) {
            io.to(socketId).emit(event, data);
        }
    });
}