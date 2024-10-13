router.get('/', validateToken, markerController.getMarkers);
router.post('/', validateToken, markerController.saveMarker);
router.delete('/', validateToken, markerController.deleteMarker);