describe('GET /users/:email', () => {
  it('should retrieve a user by email and return 200 status code', async () => {
    const userEmail = 'john@example.com';
    const response = await request(app).get(`/users/${userEmail}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.email).toEqual(userEmail);
  });

  it('should return 404 when user does not exist', async () => {
    const userEmail = 'nonexistent@example.com';
    const response = await request(app).get(`/users/${userEmail}`);

    expect(response.statusCode).toBe(404);
  });
});