import { PostLoginRequest, PostLoginResponse } from '@/types/auth';
import { adminInstance } from './instance';

export const postLogin = async (body: PostLoginRequest) => {
  return adminInstance.post<PostLoginResponse>('/accounts/login/', body);
};
