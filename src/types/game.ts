export type GameType = {
  id: number;
  name: string;
  sportsName: string;
  startTime: string;
  firstTeamScore: number;
  secondTeamScore: number;
  gameStatus: GameQuarterType;
  statusChangedAt: string;
  firstTeam: GameTeamType;
  secondTeam: GameTeamType;
};

export type GameDetailType = {
  gameTeams: GameTeamType[];
  startTime: string;
  videoId: number;
  gameQuarter: GameQuarterType;
  gameName: string;
};

export type GameTeamType = {
  gameTeamId: number;
  gameTeamName: string;
  logoImageUrl: string;
  score: number;
};

export type GameRecordType = {
  id: number;
  teamId: number;
  playerName: string;
  score: number;
  scoredAt: string;
};

export type GameCommentType = {
  id: number;
  content: string;
  createdAt: string;
  isBlocked: boolean;
};

export type GameQuarterType =
  | 'BEFORE'
  | 'FIRST_HALF'
  | 'BREAK_TIME'
  | 'SECOND_HALF'
  | 'END';
