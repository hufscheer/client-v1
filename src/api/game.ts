import {
  AllGamesResponse,
  EachGameResponse,
  GameCommentsResponse,
} from '@/types/game';
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

export const getGameComments = async (gameID: number) => {
  try {
    const response: AxiosResponse<GameCommentsResponse[]> = await instance.get(
      `/games/${gameID}/comments`,
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

export const postGameComment = async (body: {
  content: string;
  gameId: number;
}) => {
  try {
    await instance.post('/comments/register', body);
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      return axiosError.response.status;
    } else {
      throw new Error();
    }
  }
};
