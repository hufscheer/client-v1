import instance from '@/api/instance';
import { GameDetailType } from '@/types/game';

export const getMatchById = async (gameId: string) => {
  const { data } = await instance.get<GameDetailType>(`/games/${gameId}`);

  return data;
};
