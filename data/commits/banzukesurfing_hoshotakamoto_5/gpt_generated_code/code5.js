import 'jest-localstorage-mock';
import Game from './game.js';

let game;

beforeEach(() => {
  //... setup logic
  game = new Game();
});

//... your tests