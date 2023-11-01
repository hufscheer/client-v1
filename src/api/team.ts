import { AxiosError } from 'axios';
import instance, { adminInstance } from './instance';
import { GameTeamProps } from '@/types/game';

import * as Sentry from '@sentry/nextjs';

export const getTeams = async () => {
  try {
    const response = await instance.get<GameTeamProps[]>('/teams');

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    Sentry.captureException(axiosError);

    if (axiosError.response) {
      throw new Error(axiosError.response.statusText);
    } else {
      throw new Error('팀 목록을 불러오는 데에 실패했습니다!');
    }
  }
};
