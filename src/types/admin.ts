export type NewGamePayload = {
  name: string;
  sportsName: string;
  firstTeam: number;
  secondTeam: number;
  startTime: Date;
};

export type GameScorePayload = {
  playerName: string;
  team: number;
  scoredAt: Date;
};
