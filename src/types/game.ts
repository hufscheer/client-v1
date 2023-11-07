export type GameType = {
  id: number;
  name: string;
  sportsName: string;
  startTime: Date;
  firstTeamScore: number;
  secondTeamScore: number;
  gameStatus: GameStatusType;
  statusChangedAt: Date;
  firstTeam: GameTeamType;
  secondTeam: GameTeamType;
};

export interface GameDetailType extends GameType {
  records: GameRecordType[];
  videoId: string;
}

export type GameTeamType = {
  id: number;
  name: string;
  logoImageUrl: string;
};

export type GameRecordType = {
  id: number;
  teamId: number;
  playerName: string;
  score: number;
  scoredAt: Date;
};

export type GameCommentType = {
  id: number;
  content: string;
  createdAt: Date;
  isBlocked: boolean;
};

export type GameStatusType =
  | 'BEFORE'
  | 'FIRST_HALF'
  | 'BREAK_TIME'
  | 'SECOND_HALF'
  | 'END';
