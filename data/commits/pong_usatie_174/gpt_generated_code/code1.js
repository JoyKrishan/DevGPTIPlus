describe('non-member', () => {
  it('should not get private rooms (200 OK)', async () => {
    await testGetRooms(notMember.accessToken).expect((res) => {
      console.log(res.body);
      expect(res.body.every((room) => room.accessLevel !== 'PRIVATE')).toBeTruthy();
    });
  });
});