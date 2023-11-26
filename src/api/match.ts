import {
  MatchCheerType,
  MatchCommentType,
  MatchLineupType,
  MatchListType,
  MatchTimelineType,
  MatchType,
  MatchVideoType,
} from '@/types/match';
import { convertObjectToQueryString } from '@/utils/queryString';

import instance from '.';

export type MatchListParams = {
  sportsId: number | number[];
  status: 'playing' | 'scheduled' | 'finished';
  leagueId: number;
  cursor: number;
  size: number;
};

export const getMatchList = async (params: MatchListParams) => {
  const queryString = convertObjectToQueryString<
    keyof MatchListParams,
    MatchListParams[keyof MatchListParams]
  >(params);

  const { data } = await instance.get<MatchListType[]>(`games?${queryString}`);

  return data;
};

export const getMatchById = async (gameId: string) => {
  const { data } = await instance.get<MatchType>(`/games/${gameId}`);

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

export const getMatchVideoById = async (matchId: string) => {
  const { data } = await instance.get<MatchVideoType>(
    `/games/${matchId}/video`,
  );

  return data;
};
