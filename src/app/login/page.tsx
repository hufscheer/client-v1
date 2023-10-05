"use client";

export default function Login() {
  const login = (id: string, password: string) => {
    // id, pw 가지고 로그인
    return;
  };

  const loginSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const loginRes = login(
      formData.get("id") as string,
      formData.get("password") as string
    );
  };
  return (
    <div className="flex items-center justify-center ">
      <form onSubmit={loginSubmitHandler} className="flex flex-col gap-4">
        <label className="flex flex-col">
          ID:
          <input type="text" name="id" placeholder="ID를 입력하세요." />
        </label>
        <label className="flex flex-col">
          PW:
          <input
            type="password"
            name="pw"
            placeholder="비밀번호를 입력하세요."
          />
        </label>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
