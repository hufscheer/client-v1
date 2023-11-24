import {
  MatchCheerType,
  MatchCommentType,
  MatchDetailType,
  MatchLineupType,
  MatchTimelineType,
} from '@/types/match';

import instance from '.';

export const getMatchById = async (gameId: string) => {
  const { data } = await instance.get<MatchDetailType>(`/games/${gameId}`);

  return data;
};

export const getMatchCheerById = async (matchId: string) => {
  const { data } = await instance.get<MatchCheerType[]>(
    `/games/${matchId}/cheer`,
  );

  return data;
};

export const getGameComments = async (gameId: string, cursor = 1) => {
  const response = await instance.get<MatchCommentType[]>(
    `/games/${gameId}/comments?cursor=${cursor}`,
  );

  return response.data;
};

export const getMatchTimelineById = async (matchId: string) => {
  const { data } = await instance.get<MatchTimelineType[]>(
    `/games/${matchId}/timeline`,
  );

  return data;
};

export const getMatchLineupById = async (matchId: string) => {
  const { data } = await instance.get<MatchLineupType[]>(
    `/games/${matchId}/lineup`,
  );

  return data;
};
