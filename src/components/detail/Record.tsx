import useDate from '@/hooks/useDate';
import { EachGameResponse } from '@/types/game';

export const Record = ({
  id,
  playerName,
  score,
  scoredAt,
}: EachGameResponse['records'][0]) => {
  const { hour, minute } = useDate(scoredAt);
  return (
    <li
      className="flex gap-4 items-center justify-center p-4 rounded-lg shadow-md bg-white"
      key={id}
    >
      <span className="text-lg text-center">
        {playerName} 선수 {score}골 득점!
      </span>
      <span className="text-xs opacity-50 text-center">
        {hour}시 {minute}분
      </span>
    </li>
  );
};
