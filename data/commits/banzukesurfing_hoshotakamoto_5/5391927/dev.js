export default class Game {
    constructor() {
        this.user = this.getUser();
        this.initialize();
    }
    startPlaying() {
        var rikishi = document.querySelector('#rikishi').value;
        var picks = this.getPicks();
        var message = "You selected: " + rikishi + "\nPrevious Picks: " + JSON.stringify(picks);
        this.updatePicks(rikishi); // Update the picks with the new selection
        return message;
    getUser() {
        // get user from local storage
        var user = localStorage.getItem('user');
        if (!user) {
            user = 'admin';
            localStorage.setItem('user', user);
        }
        return user;
    getPicks() {
        var picks = JSON.parse(localStorage.getItem(this.user));
        if (!picks) {
            picks = {};
        }
        return picks;
    updatePicks(rikishi) {
        var picks = this.getPicks();
        var currentContest = new Date().getMonth();
        if ([0, 2, 4, 6, 8, 10].includes(currentContest)) {
            var contestName = new Date().toLocaleString('default', { month: 'long' }) + ' ' + new Date().getFullYear();
            picks[contestName] = rikishi;
            localStorage.setItem(this.user, JSON.stringify(picks));
        }
    }
    switchUser() {
        var newUser = document.querySelector('#userSwitch').value;
        localStorage.setItem('user', newUser);
        document.querySelector('#user').textContent = 'Current user: ' + newUser;
        this.user = newUser;
    }

    backfillResults() {
        var contestName = document.querySelector('#backfillContest').value;
        var rikishi = document.querySelector('#backfillRikishi').value;
        var picks = this.getPicks();
        picks[contestName] = rikishi;
        localStorage.setItem(this.user, JSON.stringify(picks));
    }
    initialize() {
        var userElement = document.querySelector('#user');
        if (userElement) {
            userElement.textContent = 'Current user: ' + this.user;
        }
function initGame() {
  const game = new Game();

  document.querySelector("#startPlayingButton").addEventListener('click', () => game.startPlaying());
  document.querySelector("#switchUserButton").addEventListener('click', () => game.switchUser());
  document.querySelector("#backfillResultsButton").addEventListener('click', () => game.backfillResults());
}
if (typeof window !== 'undefined') {
    window.onload = initGame;
}