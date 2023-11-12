export type NewGamePayload = {
  name: string;
  sportsName: string;
  firstTeam: number;
  secondTeam: number;
  startTime: string;
};

export type GameScorePayload = {
  playerName: string;
  team: number;
  scoredAt: Date;
};
