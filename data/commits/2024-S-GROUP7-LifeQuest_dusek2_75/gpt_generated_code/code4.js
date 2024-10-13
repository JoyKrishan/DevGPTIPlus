describe('DELETE /users/:email', () => {
  it('should delete a user by email and return 200 status code', async () => {
    const userEmail = 'john@example.com';
    const response = await request(app).delete(`/users/${userEmail}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toEqual('User deleted successfully');
  });

  it('should return 404 when trying to delete a user that does not exist', async () => {
    const userEmail = 'nonexistent@example.com';
    const response = await request(app).delete(`/users/${userEmail}`);

    expect(response.statusCode).toBe(404);
  });
});