import useDate from '@/hooks/useDate';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Comment } from '@/types/game';
import { postBlockComment } from '@/api/admin';
import { useEffect, useState } from 'react';
import { parseTime } from '@/utils/utc-times';

export const Comment = ({ content, createdAt, isBlocked, id }: Comment) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { month, day, hour, minute } = useDate(createdAt);

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
          <span className="text-xs opacity-30">
            {month}월 {day}일 {parseTime(hour < 24 ? hour : hour - 24)}시{' '}
            {parseTime(minute)}분
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
