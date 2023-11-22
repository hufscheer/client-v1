import instance from '@/api/instance';

import { MatchCheerType } from './type';

export const getMatchCheerById = async (matchId: string) => {
  const { data } = await instance.get<MatchCheerType[]>(
    `/games/${matchId}/cheer`,
  );

  return data;
};
