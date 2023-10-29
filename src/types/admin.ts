export type CreateGameRequest = {
  name: string;
  sportsName: string;
  firstTeam: number;
  secondTeam: number;
  startTime: Date;
};

export type GameScoreRequest = {
  playerName: string;
  team: number;
  scoredAt: Date;
};
