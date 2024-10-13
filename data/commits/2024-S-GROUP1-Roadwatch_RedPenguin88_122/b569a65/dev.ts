import express, { Request, Response } from 'express';
import Marker from '../../src/models/Marker'; // Import Marker model
import * as markerController from '../../src/controllers/MarkerController'; // Import Marker controller functions
import { jest, describe, expect, test, beforeEach, beforeAll } from '@jest/globals'; // Import Jest testing functions
import axios from 'axios'; // Import Axios for making HTTP requests

// Mock the Marker model
jest.mock('../../src/models/Marker');

// Describe the test suite for Marker routes
describe('Marker Routes', () => {
  let app: express.Application; // Express application instance
  let mockRequest: Partial<Request>; // Partial mock request object
  let mockResponse: Partial<Response>; // Partial mock response object
  let accessToken: string | null = null; // Access token for authentication

  // Perform setup tasks before running tests
  beforeAll(async () => {
    // Define test user data
    const testUserData = {
      userName: 'testuser',
      password: 'password',
    };

    // Function to create a new user for testing
    async function createUser() {
      try {
        // Make HTTP POST request to create a new user
        const response = await axios.post('http://localhost:3000/api/user', {
          // User data
          firstName: 'Test',
          lastName: 'User',
          userName: testUserData.userName,
          password: testUserData.password,
          email: 'test@example.com',
          phoneNumber: '1234567890',
          dob: '1990-01-01',
          city: 'Test City',
          address: '123 Test St',
          state: 'Test State',
          zip: '12345',
        });

        // Log user creation status
        console.log('User creation response status code:', response.status);

        // Log user creation success or failure
        if (response.status === 200) {
          console.log('Test user created successfully');
        } else {
          console.log('New test user was not created:', response.status);
        }
      } catch (error) {
        console.log('A new test user was not created, this is not necessarily an error');
      }
    }

    // Function to authenticate the test user
    async function loginUser() {
      try {
        // Make HTTP POST request to authenticate user login
        const response = await axios.post('http://localhost:3000/api/user/login', {
          userInput: testUserData.userName, // User input (username or email)
          password: testUserData.password, // User password
        });

        // Log login status
        console.log('Login response status code:', response.status);

        // Log login success or failure
        if (response.status === 200) {
          console.log('Login successful');
          accessToken = response.data["access_token"]; // Extract and store access token
        } else {
          console.log('Login failed:', response.status);
        }
      } catch (error) {
        console.log('Error logging in');
      }
    }

    try {
      // Create test user
      await createUser();
      // Authenticate test user
      await loginUser();
    } catch (error) {
      console.error('Test setup failed:', error);
      throw error;
    }
  }, 10000); // Timeout value of 10 seconds

  // Perform setup tasks before each test
  beforeEach(() => {
    app = express(); // Create Express application instance
    app.use(express.json()); // Add JSON parsing middleware to application

    // Add access token to the request headers
    mockRequest = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    };

    // Mock response object with status and json functions
    mockResponse = {
      status: jest.fn(function(this: Response, code: number) { 
        this.statusCode = code;
        return this;
      }),
      json: jest.fn(function(this: Response) {
        return this;
      }),
    };
  });

  // Describe the test suite for POST /markers route
  describe('POST /markers', () => {
    // Test to save a new marker
    test('should save a new marker', async () => {
      const newMarker = { longitude: 17837483744, latitude: 1018444443 };
      const mockRequestWithBody = { body: newMarker } as Request;

      // Call the saveMarker function with the mockRequest and mockResponse
      await markerController.saveMarker(mockRequestWithBody, mockResponse as Response);

      // Assert that the status was called with 201
      expect(mockResponse.status).toHaveBeenCalledWith(201);
    
      // Assert that the json function was called with a response containing a message indicating success
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({ message: 'Marker saved successfully' })
      );
    });

    // Test to handle missing longitude and latitude
    test('should handle missing longitude and latitude', async () => {
      const mockRequestWithBody = { body: {} } as Request;

      // Call the saveMarker function with the mockRequest and mockResponse
      await markerController.saveMarker(mockRequestWithBody, mockResponse as Response);

      // Assert that the status was called with 400
      expect(mockResponse.status).toHaveBeenCalledWith(400);
      
      // Assert that the json function was called with a response containing an error message
      expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Longitude and Latitude are required' });
    });

    // Test to handle errors gracefully
    test('should handle errors gracefully', async () => {
      (Marker.prototype.save as jest.Mock).mockRejectedValue(new Error('Database error') as never);
      const mockRequestWithBody = { body: { longitude: 5, latitude: 6 } } as Request;

      // Call the saveMarker function with the mockRequest and mockResponse
      await markerController.saveMarker(mockRequestWithBody, mockResponse as Response);

      // Assert that the status was called with 500
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      
      // Assert that the json function was called with a response containing an error message
      expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Could not save marker' });
    });
  });

  // Describe the test suite for GET /markers route
  describe('GET /markers', () => {
    // Test to return all markers
    test('should return all markers', async () => {
      await markerController.getMarkers(mockRequest as Request, mockResponse as Response);

      // Assert that the status was called with 200
      expect(mockResponse.status).toHaveBeenCalledWith(200);
    });

    // Test to handle errors gracefully
    test('should handle errors gracefully', async () => {
      (Marker.find as jest.Mock).mockRejectedValue(new Error('Database error') as never);

      // Call the getMarkers function with the mockRequest and mockResponse
      await markerController.getMarkers(mockRequest as Request, mockResponse as Response);

      // Assert that the status was called with 500
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      
      // Assert that the json function was called with a response containing an error message
      expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Could not get markers' });
    });
  });

  // Describe the test suite for DELETE /markers route
  describe('DELETE /markers', () => {
    // Test to delete a marker
    test('should delete a marker', async () => {
      const markerToDelete = { longitude: 5, latitude: 6 };
      const mockRequestWithBody = { body: markerToDelete } as Request;

      // Call the deleteMarker function with the mockRequest and mockResponse
      await markerController.deleteMarker(mockRequestWithBody, mockResponse as Response);

      // Assert that the status was called with 200
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      
      // Assert that the json function was called with a response containing a success message
      expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Marker deleted successfully' });
    });

    // Test to handle missing longitude and latitude
    test('should handle missing longitude and latitude', async () => {
      const mockRequestWithBody = { body: {} } as Request;

      // Call the deleteMarker function with the mockRequest and mockResponse
      await markerController.deleteMarker(mockRequestWithBody, mockResponse as Response);

      // Assert that the status was called with 400
      expect(mockResponse.status).toHaveBeenCalledWith(400);
      
      // Assert that the json function was called with a response containing an error message
      expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Longitude and Latitude are required' });
    });

    // Test to handle errors gracefully
    test('should handle errors gracefully', async () => {
      (Marker.findOneAndDelete as jest.Mock).mockRejectedValue(new Error('Database error') as never);
      const mockRequestWithBody = { body: { longitude: 5, latitude: 6 } } as Request;

      // Call the deleteMarker function with the mockRequest and mockResponse
      await markerController.deleteMarker(mockRequestWithBody, mockResponse as Response);

      // Assert that the status was called with 500
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      
      // Assert that the json function was called with a response containing an error message
      expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Could not delete user' });
    });
  });
});