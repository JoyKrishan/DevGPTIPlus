import { logger } from "./logger";
function CreateNewPlayer(socketId: string, playerName: string) {
    const randomValue = Math.floor(Math.random() * rangValue);
const sessionMap: Map<string, string> = new Map();
    logger.info(
  socket.on("bomb_activated", (bomb: { x: number; y: number }) => {