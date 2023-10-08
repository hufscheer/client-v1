import instance from './instance';

type CreateGameRequest = {
  name: string;
  sportsName: string;
  firstTeam: number;
  secondTeam: number;
  startTime: Date;
};

export const createGame = (body: CreateGameRequest) => {
  return instance.post('/manage/game/register/', body);
};
