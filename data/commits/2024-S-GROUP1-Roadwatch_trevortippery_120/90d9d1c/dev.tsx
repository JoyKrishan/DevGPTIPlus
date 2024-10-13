        setDate(new Date().toISOString().split('T')[0]);

        // Check for Geolocation support
        if (navigator.geolocation) {
            // Ask for user permission
            navigator.geolocation.getCurrentPosition(
                // Success callback
                (position) => {
                    // Extract latitude and longitude
                    const { latitude, longitude } = position.coords;
                    // Set location to latitude and longitude
                    setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
                },
                // Error callback
                (error) => {
                    console.error('Error getting current location:', error);
                    // Set a default location if there's an error
                    setLocation('Default location');
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            // Set a default location if Geolocation is not supported
            setLocation('Default location');
        }

        <>
        </>