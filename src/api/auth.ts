import { PostLoginRequest, PostLoginResponse } from '@/types/auth';
import { adminInstance } from './instance';
import { GameStatusType } from '@/types/game';

export const postLogin = async (body: PostLoginRequest) => {
  return adminInstance.post<PostLoginResponse>('/accounts/login/', body);
};

export const postGameStatus = async (
  id: number,
  gameStatus: GameStatusType,
) => {
  console.log(id, gameStatus);
  adminInstance.post(`/manage/game/statustype/${id}/`, { gameStatus });
};
