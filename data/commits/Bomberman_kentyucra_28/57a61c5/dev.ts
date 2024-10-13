function CreateNewPlayer(socketId: string, playerName: any) {
let sessionMap: Map<string, string> = new Map();

  socket.on("initPlayer", (playerInfo: { name: string; session: number }) => {
    console.log(
      `connect player: ${playerInfo.name} to the session: ${playerInfo.session}`
    );
    CreateNewPlayer(socket.id, playerInfo.name);
    sessionMap.set(socket.id, playerInfo.session.toString());
    socket.join(sessionMap.get(socket.id));
    io.to(socket.id).emit("game_maze", game_maze);
    socket.to(sessionMap.get(socket.id)).emit("newPlayer", players[socket.id]);
    const sessionPlayers = Object.entries(players)
      .filter(
        ([key, _]) => sessionMap.get(key) === playerInfo.session.toString()
      )
      .map(([key, value]) => {
        return { key, ...value };
      });
    io.to(sessionMap.get(socket.id)).emit("currentPlayers", sessionPlayers);
    io.to(sessionMap.get(socket.id)).emit("bomb_activated", bomb);
    io.to(sessionMap.get(socket.id)).emit("disconnect_player", socket.id);
    socket.leave(sessionMap.get(socket.id));
    sessionMap.delete(socket.id);
    socket.to(sessionMap.get(socket.id)).emit("playerMoved", {
    io.to(sessionMap.get(socket.id)).emit("changeScore", {