  state: GameState;
export type GameState = 'playing' | 'scheduled' | 'finished';

export enum GameStateString {
  playing = '진행 중',
  scheduled = '예정',
  finished = '종료',
}