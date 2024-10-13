(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS
        module.exports = factory();
    } else {
        // Browser globals
        root.Game = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    // Your actual module
    class Game {
        //... existing class methods
    }

    // Function to initialize game
    function initGame() {
        const game = new Game();
    
        document.querySelector("#startPlayingButton").addEventListener('click', () => game.startPlaying());
        document.querySelector("#switchUserButton").addEventListener('click', () => game.switchUser());
        document.querySelector("#backfillResultsButton").addEventListener('click', () => game.backfillResults());
    }
    
    // Expose initGame function to the global scope
    window.initGame = initGame;
    
    // Return the Game class
    return Game;
}));