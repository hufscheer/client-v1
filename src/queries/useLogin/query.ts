import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { adminInstance } from '@/api';
import { postLogin } from '@/api/auth';
import { AuthPayload } from '@/types/auth';

export default function usePostLoginMutation({ email, password }: AuthPayload) {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: () => postLogin({ email, password }),
    onSuccess: ({ access }) => {
      localStorage.setItem('token', access);

      adminInstance.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${access}`;

        return config;
      });

      queryClient.setQueryData(['login'], access);

      router.push('/admin/league');
    },
    // onError: () => {
    //   setIsLoginFailed(true);
    // },
  });
}
