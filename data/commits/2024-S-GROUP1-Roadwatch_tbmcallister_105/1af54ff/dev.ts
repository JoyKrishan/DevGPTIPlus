import express from 'express';
import * as markerController from '../controllers/MarkerController';

const router = express.Router();

// define routes
router.get('/home', markerController.getMarkers);

router.post('/home', markerController.saveMarker);

router.delete('/home', markerController.deleteMarker);

export default router; 