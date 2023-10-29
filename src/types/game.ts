export type Game = {
  id: number;
  name: string;
  sportsName: string;
  startTime: Date;
  firstTeamScore: number;
  secondTeamScore: number;
  gameStatus: GameStatus;
  statusChangedAt: Date;
  firstTeam: Team;
  secondTeam: Team;
  records?: Record[];
};

export type Team = {
  id: number;
  name: string;
  logoImageUrl: string;
};

type Record = {
  id: number;
  teamId: number;
  playerName: string;
  score: number;
  scoredAt: Date;
};

export type Comment = {
  id: number;
  content: string;
  createdAt: Date;
  isBlocked: boolean;
};

export type GameDetail = Omit<
  Game,
  'sportsName' | 'startTime' | 'statusChangedAt'
>;

export type GameStatus =
  | 'BEFORE'
  | 'FIRST_HALF'
  | 'BREAK_TIME'
  | 'SECOND_HALF'
  | 'END';
