import { AxiosError } from 'axios';
import instance from './instance';
import { Team } from '@/types/game';

import * as Sentry from '@sentry/nextjs';

export const getTeamList = async () => {
  try {
    const response = await instance.get<Team[]>('/teams');

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
