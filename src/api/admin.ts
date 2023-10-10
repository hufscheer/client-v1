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

type GameScoreRequest = {
  playerName: string;
  team: number;
  scoredAt: Date;
};

export const createGame = (body: CreateGameRequest) => {
  return adminInstance.post('/manage/game/register/', body);
};

export const postGameScore = (id: number, body: GameScoreRequest) => {
  return adminInstance.post(`/manage/game/score/${id}/`, body);
};

export const postBlockComment = (id: number) => {
  return adminInstance.post(`/manage/comments/block/${id}/`);
};
