        // Retrieve all markers from the database with projection to include only longitude and latitude
        const markers = await Marker.find({}, 'longitude latitude');
        return res.status(200).json(markers); // Return retrieved markers as JSON response
        return res.status(500).json({ message: 'Internal server error' }); // Handle errors gracefully
        // Check if longitude and latitude are provided
        // Create a new marker instance and save it to the database
        res.status(201).json({ message: 'Marker saved successfully', marker: newMarker }); // Respond with success message and saved marker
        res.status(500).json({ message: 'Internal server error' }); // Handle errors gracefully
        // Check if longitude and latitude are provided
        // Find and delete a marker by longitude and latitude
        res.status(200).json({ message: 'Marker deleted successfully' }); // Respond with success message
        res.status(500).json({ message: 'Internal server error' }); // Handle errors gracefully