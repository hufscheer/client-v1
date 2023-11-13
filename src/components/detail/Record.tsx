import useDate from '@/hooks/useDate';
import { GameRecordType } from '@/types/game';

export const Record = ({ id, playerName, score, scoredAt }: GameRecordType) => {
  const { hour, minute } = useDate(scoredAt);
  return (
    <li
      className="flex items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-md"
      key={id}
    >
      <span className="text-center text-lg">
        {playerName} 선수 {score}골 득점!
      </span>
      <span className="text-center text-xs opacity-50">
        {hour}시 {minute}분
      </span>
    </li>
  );
};
