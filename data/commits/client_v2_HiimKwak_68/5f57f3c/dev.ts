export type GameListParams = {
  league_id?: string;
  state: GameStatus;
  sport_id?: string;
  cursor?: string | number;
  size?: string;
  league_team_id?: string;
  round?: string;
};
