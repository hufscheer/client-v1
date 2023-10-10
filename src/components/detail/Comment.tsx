import useDate from '@/hooks/useDate';
import { Cross2Icon } from '@radix-ui/react-icons';
import { GameCommentResponse } from '@/types/game';
import { postBlockComment } from '@/api/admin';
import { useEffect, useState } from 'react';

export const Comment = ({
  content,
  createdAt,
  isBlocked,
  id,
}: GameCommentResponse) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { hour, minute } = useDate(createdAt);

  useEffect(() => {
    const token = localStorage.getItem('token');
    token && setIsLoggedIn(true);
  }, []);

  const handleBlockComment = async () => {
    await postBlockComment(id);
  };
  return (
    <li className="flex justify-start items-center gap-4">
      <div
        className={`p-3 rounded-lg shadow-md ${
          isBlocked ? 'bg-gray-200' : 'bg-white'
        }`}
      >
        <div>
          <span className="text-xs opacity-50">
            {hour}시 {minute}분 작성
          </span>
        </div>
        <div
          className={`items-center justify-center  ${
            isBlocked ? 'text-gray-400' : ''
          }`}
        >
          {isBlocked ? '관리자에 의해 차단된 댓글입니다.' : content}
        </div>
      </div>
      {!isBlocked && isLoggedIn && (
        <button
          type="button"
          className="text-red-500 min-w-max min-h-max p-[0.1rem] rounded-md border-2 border-red-500 bg-red-100 flex justify-center items-center"
          onClick={handleBlockComment}
        >
          <Cross2Icon />
        </button>
      )}
    </li>
  );
};
