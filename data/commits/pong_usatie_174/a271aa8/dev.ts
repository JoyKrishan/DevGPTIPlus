    let _publicRoom: RoomEntity;
    let _privateRoom: RoomEntity;
    let _protectedRoom: RoomEntity;
    let _duplicatedRoom: RoomEntity;
      await app.deleteRoom(_publicRoom.id, owner.accessToken);
      await app.deleteRoom(_privateRoom.id, owner.accessToken);
      await app.deleteRoom(_protectedRoom.id, owner.accessToken);
      await app.deleteRoom(_duplicatedRoom.id, owner.accessToken);
      _publicRoom = await app
    it('should create private room (201 Created)', async () => {
      _privateRoom = await app
        .createRoom(constants.room.privateRoom, owner.accessToken)
        .expect(201)
        .expect((res) => expectRoom(res.body))
        .then((res) => res.body);
    });
    it('should create password protected room (201 Created)', async () => {
      _protectedRoom = await app
        .createRoom(constants.room.protectedRoom, owner.accessToken)
        .expect(201)
        .expect((res) => expectRoom(res.body))
        .then((res) => res.body);
    });
    it('should not create protected room without password (400 Bad Request)', async () => {
      let dtoWithoutPassword = { ...constants.room.protectedRoom };
      delete dtoWithoutPassword.password;
      await app.createRoom(dtoWithoutPassword, owner.accessToken).expect(400);
    });
    it('should create room with duplicated name (201 OK)', async () => {
      _duplicatedRoom = await app
        .createRoom(constants.room.publicRoom, owner.accessToken)
        .expect(201)
        .expect((res) => expectRoom(res.body))
        .then((res) => res.body);
    });