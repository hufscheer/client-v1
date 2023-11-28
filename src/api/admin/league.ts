import { adminInstance } from '@/api';
import {
  DeleteLeaguePayload,
  LeagueIdType,
  LeagueType,
  NewLeaguePayload,
  PutLeaguePayload,
  SportsCategoriesType,
  SportsQuarterType,
} from '@/types/admin/league';

export const getAllLeaguesWithAuth = async () => {
  const { data } = await adminInstance.get<LeagueType[]>('/league/all/');

  return data;
};

export const postNewLeagueWithAuth = async (body: NewLeaguePayload) => {
  const { data } = await adminInstance.post<LeagueIdType>('/league/', body);

  return data;
};

export const deleteLeagueByIdWithAuth = async (body: DeleteLeaguePayload) => {
  const { status } = await adminInstance.delete('/league/', { data: body });

  return status;
};

export const putLeagueWithAuth = async (data: PutLeaguePayload) => {
  const { status } = await adminInstance.put('/league/', data);

  return status;
};

export const getSportsCategoriesWithAuth = async () => {
  const { data } = await adminInstance.get<SportsCategoriesType[]>('/sport/');

  return data;
};

export const getSportsQuarterByIdWithAuth = async (sportId: string) => {
  const { data } = await adminInstance.get<SportsQuarterType[]>(
    `/sport/${sportId}/quarter/`,
  );

  return data;
};
