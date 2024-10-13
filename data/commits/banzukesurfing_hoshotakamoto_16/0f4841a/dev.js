class Basho {
    constructor(id, waveId) {
        this.id = id; // To distinguish different bashos
        this.waveId = waveId; // To associate basho with a wave
        this.picks = {}; // Dictionary mapping player names to their picks
    }

    // Function to allow a player to select a wrestler
    selectWrestler(playerName, wrestler) {
        // Check if player already has a pick
        if (this.picks[playerName]) {
            console.log(`Player ${playerName} already selected a wrestler for this basho.`);
            return;
        }
        this.picks[playerName] = wrestler;
    }

    // Function to get a player's pick
    getPlayerPick(playerName) {
        return this.picks[playerName];
    }

    // Function to get all player's picks
    getAllPicks() {
        return this.picks;
    }

    // Function to change a player's pick
    changePick(playerName, newWrestler) {
        if (!this.picks[playerName]) {
            console.log(`Player ${playerName} has not selected a wrestler for this basho.`);
            return;
        }
        this.picks[playerName] = newWrestler;
    }
}

module.exports = Basho;