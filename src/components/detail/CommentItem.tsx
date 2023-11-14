import { Cross2Icon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

import { postBlockComment } from '@/api/admin';
import useDate from '@/hooks/useDate';
import { GameCommentType } from '@/types/game';
import { parseTime } from '@/utils/utc-times';

export const CommentItem = ({
  content,
  createdAt,
  isBlocked,
  id,
}: GameCommentType) => {
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
    <li className="flex items-center justify-start gap-4">
      <div
        className={`rounded-lg p-3 shadow-md ${
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
          className="flex min-h-max min-w-max items-center justify-center rounded-md border-2 border-red-500 bg-red-100 p-[0.1rem] text-red-500"
          onClick={handleBlockComment}
        >
          <Cross2Icon />
        </button>
      )}
    </li>
  );
};
