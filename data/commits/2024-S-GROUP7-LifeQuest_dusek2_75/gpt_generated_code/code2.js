const request = require('supertest');
const app = require('../app'); // Adjust this path to where your Express app is initialized

describe('POST /users', () => {
  it('should create a new user and return 201 status code', async () => {
    const userData = { name: 'John Doe', email: 'john@example.com' };
    const response = await request(app)
      .post('/users')
      .send(userData);

    expect(response.statusCode).toBe(201);
    expect(response.body.email).toEqual(userData.email); // assuming your model returns the user
  });

  it('should return a 400 status code on bad request', async () => {
    // Sending incomplete data to trigger a bad request
    const response = await request(app)
      .post('/users')
      .send({ name: 'Jane Doe' }); // Assuming email is required

    expect(response.statusCode).toBe(400);
  });
});