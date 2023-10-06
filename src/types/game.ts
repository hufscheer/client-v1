export type AllGamesResponse = {
  id: number;
  name: string;
  sportsName: string;
  startTime: Date;
  firstTeamScore: number;
  secondTeamScore: number;
  gameStatus: 'BEFORE' | 'FIRST_HALF' | 'SECOND_HALF' | 'END';
  statusChangedAt: Date;
  firstTeam: {
    id: number;
    logoImageUrl: string;
    name: string;
  };
  secondTeam: {
    id: number;
    logoImageUrl: string;
    name: string;
  };
};
