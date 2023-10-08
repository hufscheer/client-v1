import { GameTeamProps } from '@/types/game';
import { adminInstance } from './instance';

type CreateGameRequest = {
  name: string;
  sportsName: string;
  firstTeam: number;
  secondTeam: number;
  startTime: Date;
};

export type TeamsOfGameResponse = {
  firstTeam: GameTeamProps;
  secondTeam: GameTeamProps;
};

export const createGame = (body: CreateGameRequest) => {
  return adminInstance.post('/manage/game/register/', body);
};
