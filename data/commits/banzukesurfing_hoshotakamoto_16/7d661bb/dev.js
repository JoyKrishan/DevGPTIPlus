class Wave {
    constructor(id) {
        this.id = id; // To distinguish different waves
        this.bashos = []; // Array to hold all Bashos in this wave
    }

    // Function to add a Basho to the wave
    addBasho(basho) {
        this.bashos.push(basho);
    }

    // Function to get a Basho by id
    getBasho(bashoId) {
        return this.bashos.find(basho => basho.id === bashoId);
    }
}

module.exports = Wave;