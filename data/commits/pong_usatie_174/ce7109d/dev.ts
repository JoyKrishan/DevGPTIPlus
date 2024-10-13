import { expectRoom } from './utils/matcher';
  let publicRoom: RoomEntity;
  let privateRoom: RoomEntity;
  let protectedRoom: RoomEntity;
      publicRoom = await app
      privateRoom = await app
        .createRoom(constants.room.privateRoom, owner.accessToken)
        .expect(201)
        .then((res) => res.body);
      protectedRoom = await app
        .createRoom(constants.room.protectedRoom, owner.accessToken)
        .expect(201)
        .then((res) => res.body);
      await app.enterRoom(publicRoom.id, member.accessToken).expect(201);
      await app.enterRoom(privateRoom.id, member.accessToken).expect(201);
      await app.enterRoom(protectedRoom.id, member.accessToken).expect(201);
      await app.enterRoom(publicRoom.id, admin.accessToken).expect(201);
      await app.enterRoom(privateRoom.id, admin.accessToken).expect(201);
      await app.enterRoom(protectedRoom.id, admin.accessToken).expect(201);
      await app
        .updateUserOnRoom(
          publicRoom.id,
          admin.id,
          { role: Role.ADMINISTRATOR },
          owner.accessToken,
        )
        .expect(200);
      await app
        .updateUserOnRoom(
          privateRoom.id,
          admin.id,
          { role: Role.ADMINISTRATOR },
          owner.accessToken,
        )
        .expect(200);
          protectedRoom.id,
    await app.deleteRoom(publicRoom.id, owner.accessToken);
    await app.deleteRoom(privateRoom.id, owner.accessToken);
    await app.deleteRoom(protectedRoom.id, owner.accessToken);
    await app.getRoom(publicRoom.id, 'invalid_access_token').expect(401);
    await app
      .updateRoom(publicRoom.id, dto, 'invalid_access_token')
      .expect(401);
    await app.deleteRoom(publicRoom.id, 'invalid_access_token').expect(401);
    await app.enterRoom(publicRoom.id, 'invalid_access_token').expect(401);
    describe('owner', () => {
      it('should get public room', () => {
        return app.getRoom(publicRoom.id, owner.accessToken).expect(200);
      });
      it('should get protected room', () => {
        return app.getRoom(protectedRoom.id, owner.accessToken).expect(200);
      });
      it('should get private room', () => {
        return app.getRoom(privateRoom.id, owner.accessToken).expect(200);
      });
    });

    describe('admin', () => {
      it('should get public room', () => {
        return app.getRoom(publicRoom.id, admin.accessToken).expect(200);
      });
      it('should get protected room', () => {
        return app.getRoom(protectedRoom.id, admin.accessToken).expect(200);
      });
      it('should get private room', () => {
        return app.getRoom(privateRoom.id, admin.accessToken).expect(200);
      });
    });

    describe('member', () => {
      it('should get public room', () => {
        return app.getRoom(publicRoom.id, member.accessToken).expect(200);
      });
      it('should get protected room', () => {
        return app.getRoom(protectedRoom.id, member.accessToken).expect(200);
      });
      it('should get private room', () => {
        return app.getRoom(privateRoom.id, member.accessToken).expect(200);
      });
    });

    describe('notMember', () => {
      it('should get public room', () => {
        return app.getRoom(publicRoom.id, notMember.accessToken).expect(200);
      });
      it('should get protected room', () => {
        return app.getRoom(protectedRoom.id, notMember.accessToken).expect(200);
      });
      it('should not get private room', () => {
        return app.getRoom(privateRoom.id, notMember.accessToken).expect(403);
      });
        await app.enterRoom(publicRoom.id, user.accessToken).expect(409);
      await app.enterRoom(publicRoom.id, notMember.accessToken).expect(201);
      await app.enterRoom(publicRoom.id, notMember.accessToken).expect(409);
        .leaveRoom(publicRoom.id, notMember.id, notMember.accessToken)
        const expected = { ...publicRoom, ...dto };
          .updateRoom(publicRoom.id, dto, owner.accessToken)
        await app.updateRoom(publicRoom.id, dto, user.accessToken).expect(403);
        await app.deleteRoom(publicRoom.id, user.accessToken).expect(403);