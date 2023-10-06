import { AllGamesResponse } from '@/types/game';
import instance from './instance';

export const getAllGames = async () => {
  return instance.get<AllGamesResponse[]>('/games');
};
