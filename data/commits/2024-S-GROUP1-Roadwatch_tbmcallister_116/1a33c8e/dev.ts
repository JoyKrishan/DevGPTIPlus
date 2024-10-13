import express, { Request, Response, NextFunction } from 'express';
import Marker from '../../src/models/Marker';
import * as markerController from '../../src/controllers/MarkerController';
import { jest, describe, expect, test, beforeEach } from '@jest/globals';

jest.mock('../../src/models/Marker');

describe('Marker Routes', () => {
  let app: express.Application;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock<NextFunction>;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use('/', require('../src/../routes/Marker').default);

    mockRequest = {};
    mockResponse = {
        status: jest.fn(function(this: Response, code: number) { 
          this.statusCode = code;
          return this;
        }),
        json: jest.fn(function(this: Response, data: any) {
          return this;
        }),
    };
    mockNext = jest.fn();
  });

  describe('GET /markers', () => {
    test('should return all markers', async () => {
      const mockMarkers: never = {} as never;
      const mockQuery = { exec: jest.fn().mockResolvedValue(mockMarkers) };
      (Marker.find as jest.Mock).mockReturnValue(mockQuery);

      await markerController.getMarkers(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockMarkers);
    });

    test('should handle errors gracefully', async () => {
      (Marker.find as jest.Mock).mockRejectedValue(new Error('Database error') as never);

      await markerController.getMarkers(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Could not get markers' });
    });
  });

  describe('POST /markers', () => {
    test('should save a new marker', async () => {
      const newMarker = { longitude: 5, latitude: 6 };
      const mockRequestWithBody = { body: newMarker } as Request;
      const mockResponseWithStatus = { ...mockResponse, status: jest.fn(() => mockResponse) };

      await markerController.saveMarker(mockRequestWithBody, mockResponseWithStatus as Response);

      expect(mockResponseWithStatus.status).toHaveBeenCalledWith(201);
      expect(mockResponseWithStatus.json).toHaveBeenCalledWith({ message: 'Marker saved successfully', marker: newMarker });
    });

    test('should handle missing longitude and latitude', async () => {
      const mockRequestWithBody = { body: {} } as Request;

      await markerController.saveMarker(mockRequestWithBody, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Longitude and Latitude are required' });
    });

    test('should handle errors gracefully', async () => {
      (Marker.prototype.save as jest.Mock).mockRejectedValue(new Error('Database error') as never);
      const mockRequestWithBody = { body: { longitude: 5, latitude: 6 } } as Request;

      await markerController.saveMarker(mockRequestWithBody, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Could not save marker' });
    });
  });

  describe('DELETE /markers', () => {
    test('should delete a marker', async () => {
      const markerToDelete = { longitude: 5, latitude: 6 };
      const mockRequestWithBody = { body: markerToDelete } as Request;

      await markerController.deleteMarker(mockRequestWithBody, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Marker deleted successfully' });
    });

    test('should handle missing longitude and latitude', async () => {
      const mockRequestWithBody = { body: {} } as Request;

      await markerController.deleteMarker(mockRequestWithBody, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Longitude and Latitude are required' });
    });

    test('should handle errors gracefully', async () => {
      (Marker.findOneAndDelete as jest.Mock).mockRejectedValue(new Error('Database error') as never);
      const mockRequestWithBody = { body: { longitude: 5, latitude: 6 } } as Request;

      await markerController.deleteMarker(mockRequestWithBody, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Could not delete user' });
    });
  });
});