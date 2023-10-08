import { AllGamesResponse, DetailOfGameResponse } from '@/types/game';
import instance from './instance';

export const getAllGames = async () => {
  return instance.get<AllGamesResponse[]>('/games');
};

export const getDetailOfGame = (id: number) => {
  return instance.get<DetailOfGameResponse>(`/games/${id}`);
};
