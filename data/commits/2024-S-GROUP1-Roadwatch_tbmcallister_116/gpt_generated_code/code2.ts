import axios from 'axios';
import { beforeAll } from '@jest/globals';

beforeAll(async () => {
  const testUserData = {
    firstName: 'Test',
    lastName: 'User',
    userName: 'testuser',
    password: 'password',
    email: 'test@example.com',
    phoneNumber: '1234567890',
    dob: '1990-01-01',
    city: 'Test City',
    address: '123 Test St',
    state: 'Test State',
    zip: '12345',
  };

  async function createUser() {
    try {
      const response = await axios.post('http://localhost:3000/api/user', testUserData);
      console.log('User creation response status code:', response.status);

      if (response.status === 200) {
        console.log('Test user created successfully');
      } else {
        console.error('New test user was not created:', response.status);
      }
    } catch (error) {
      console.error('Error creating test user:', error.message);
    }
  }

  try {
    await createUser();
  } catch (error) {
    console.error('Test setup failed:', error);
    throw error;
  }
}, 10000); // Timeout value of 10 seconds