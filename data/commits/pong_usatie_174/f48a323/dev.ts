import { EnterRoomDto } from 'src/room/dto/enter-room.dto';
  enterRoom = (
    roomId: number,
    accessToken: string,
    enterRoomDto: EnterRoomDto = {},
  ) =>
      .set('Authorization', `Bearer ${accessToken}`)
      .send(enterRoomDto);