import 'jest-localstorage-mock';
import Game from './game.js';
let game;
    localStorage.clear();
    // set localStorage values
    localStorage.setItem('user', 'testUser');
    localStorage.setItem('testUser', JSON.stringify({ 'July 2023': '1' }));

    game = new Game();
    const result = game.startPlaying();