export type AllGamesResponse = {
  id: number;
  name: string;
  sportsName: string;
  startTime: Date;
  firstTeamScore: number;
  secondTeamScore: number;
  gameStatus: 'BEFORE' | 'FIRST_HALF' | 'SECOND_HALF' | 'END';
  statusChangedAt: Date;
  firstTeam: GameTeamProps;
  secondTeam: GameTeamProps;
};

export interface EachGameResponse extends AllGamesResponse {
  records: GameRecordProps[];
}

export type GameTeamProps = {
  id: number;
  name: string;
  logoImageUrl: string;
};

type GameRecordProps = {
  id: number;
  teamId: number;
  playerName: string;
  score: number;
  scoredAt: Date;
};

export type GameCommentsResponse = {
  content: string;
  createdAt: Date;
};

export type DetailOfGameResponse = Omit<
  AllGamesResponse,
  'sportsName' | 'startTime' | 'statusChangedAt'
>;
