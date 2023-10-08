import { AllGamesResponse, EachGameResponse } from '@/types/game';
import instance from './instance';
import { AxiosError, AxiosResponse } from 'axios';

export const getAllGames = async () => {
  return instance.get<AllGamesResponse[]>('/games');
};

export const getEachGame = async (gameID: number) => {
  try {
    const response: AxiosResponse<EachGameResponse> = await instance.get(
      `/games/${gameID}`,
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      return axiosError.response.status;
    } else {
      throw new Error();
    }
  }
};
