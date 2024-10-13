export default class Game {
    //... existing class methods
}

// Function to initialize game
function initGame() {
  const game = new Game();

  document.querySelector("#startPlayingButton").addEventListener('click', () => game.startPlaying());
  document.querySelector("#switchUserButton").addEventListener('click', () => game.switchUser());
  document.querySelector("#backfillResultsButton").addEventListener('click', () => game.backfillResults());
}

// If running in the browser, execute initGame
if (typeof window !== 'undefined') {
  window.onload = initGame;
}