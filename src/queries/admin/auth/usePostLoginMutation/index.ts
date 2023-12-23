import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { adminInstance } from '@/api';
import { postLogin } from '@/api/auth';
import { ADMIN_MUTATION_KEY } from '@/constants/admin/mutationKey';

export default function usePostLoginMutation() {
  const router = useRouter();

  return useMutation({
    mutationKey: [ADMIN_MUTATION_KEY.POST_LOGIN],
    mutationFn: postLogin,
    onSuccess: ({ access }) => {
      localStorage.setItem('token', access);

      adminInstance.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${access}`;

        return config;
      });

      router.push('/admin/league');
    },
  });
}
