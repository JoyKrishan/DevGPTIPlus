stack<string> _88MPH(const unordered_map<string, list<edge>>& mapOfChargingStations, const unordered_map<string, double>& chargingStation, const string& startingLocation, double initialBattery) {
    // Initialize an empty stack to store the path
    stack<string> stationPath;

    // Check if initial battery is non-positive or starting location is invalid
    if (initialBattery <= 0.0 || chargingStation.find(startingLocation) == chargingStation.end())
        return stationPath; // Return empty stack

    // Calculate current battery charge including charge from the starting location
    double currentBattery = initialBattery + chargingStation.at(startingLocation);

    // Check if current battery exceeds maximum allowed charge
    if (currentBattery > 75.5)
        return stationPath; // Return empty stack

    // If battery charge is between 62.5 and 75.5 (inclusive), push the starting location onto the path and return
    if (currentBattery >= 62.5) {
        stationPath.push(startingLocation);
        return stationPath;
    }

    // Iterate over neighbors of the starting location in the map of charging stations
    for (const auto& neighbor : mapOfChargingStations.at(startingLocation)) {
        // Calculate battery decrease based on distance traveled
        double decreaseBattery = neighbor.distance * 0.346;
        // Recursively call _88MPH function with updated parameters
        stack<string> path = _88MPH(mapOfChargingStations, chargingStation, neighbor.station, currentBattery - decreaseBattery);

        // If a non-empty path is found, push the starting location onto the path and return
        if (!path.empty()) {
            path.push(startingLocation);
            return path;
        }
    }

    // Return empty stack if no valid path is found
    return stationPath;
}