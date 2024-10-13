router.get('/', markerController.getMarkers);
router.post('/', markerController.saveMarker);
router.delete('/', markerController.deleteMarker);