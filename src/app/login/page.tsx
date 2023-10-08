'use client';

import { postLogin } from '@/api/auth';
import { adminInstance } from '@/api/instance';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const login = async (email: string, password: string) => {
    const { data } = await postLogin({
      email: email,
      password: password,
    });
    console.log(data);
    return data.access;
  };

  const loginSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const loginRes = await login(
      formData.get('email') as string,
      formData.get('password') as string,
    );
    if (!loginRes) return;
    adminInstance.defaults.headers['Authorization'] = `Bearer ${loginRes}`;
    console.log(adminInstance.defaults);
    sessionStorage.setItem('isAdmin', 'true');
    router.push('/');
  };
  return (
    <div className="flex items-center justify-center ">
      <form onSubmit={loginSubmitHandler} className="flex flex-col gap-4">
        <label className="flex flex-col">
          Email:
          <input type="text" name="email" placeholder="ID를 입력하세요." />
        </label>
        <label className="flex flex-col">
          PW:
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
          />
        </label>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
