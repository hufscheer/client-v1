import * as Sentry from '@sentry/nextjs';
import { AxiosError, AxiosResponse } from 'axios';

import {
  AllGamesResponse,
  EachGameResponse,
  GameCommentResponse,
} from '@/types/game';

import instance from './instance';

export const getAllGames = async () => {
  try {
    const response = await instance.get<AllGamesResponse[]>('/games');

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    Sentry.captureException(axiosError);

    if (axiosError.response) {
      throw new Error(axiosError.response.statusText);
    } else {
      throw new Error('경기 목록을 불러오는 데에 실패했습니다!');
    }
  }
};

export const getEachGame = async (gameID: number) => {
  try {
    const response = await instance.get<EachGameResponse>(`/games/${gameID}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    Sentry.captureException(error);

    if (axiosError.response) {
      throw new Error(axiosError.response.statusText);
    } else {
      throw new Error('경기 상세 정보를 불러오는 데에 실패했습니다!');
    }
  }
};

export const getGameComments = async (gameID: number) => {
  try {
    const response = await instance.get<GameCommentResponse[]>(
      `/games/${gameID}/comments`,
    );

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    Sentry.captureException(axiosError);

    if (axiosError.response) {
      throw new Error(axiosError.response.statusText);
    } else {
      throw new Error('댓글을 불러오는 데에 실패했습니다!');
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

    Sentry.captureException(axiosError);

    if (axiosError.response) {
      throw new Error(axiosError.response.statusText);
    } else {
      throw new Error('댓글 등록에 실패했습니다!');
    }
  }
};
