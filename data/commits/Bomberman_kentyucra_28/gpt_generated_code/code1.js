const players = {
    "pepe123": { /* PlayerInfo */ },
    "pepe456": { /* PlayerInfo */ },
    "john789": { /* PlayerInfo */ },
    // ... other players
};

// Filter and map players whose key starts with "pepe"
const filteredPlayers = Object.entries(players)
    .filter(([key, _]) => key.startsWith("pepe"))
    .map(([key, value]) => {
        // Process or transform the [key, value] pair if needed
        return { key, ...value };  // Example transformation
    });

console.log(filteredPlayers);