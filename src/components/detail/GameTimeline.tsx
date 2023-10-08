'use client';

import useDate from '@/hooks/useDate';
import { EachGameResponse } from '@/types/game';

type GameTimelineProps = {
  records: EachGameResponse['records'];
  status: EachGameResponse['gameStatus'];
};

export default function GameTimeline({ records, status }: GameTimelineProps) {
  return (
    <ul className="flex flex-col gap-2">
      <p className="text-xl font-bold">타임라인</p>
      {status !== 'BEFORE' ? (
        records.map(record => <Record {...record} key={record.id} />)
      ) : (
        <li>경기 시작 전입니다.</li>
      )}
    </ul>
  );
}

const Record = ({
  id,
  playerName,
  score,
  scoredAt,
}: GameTimelineProps['records'][0]) => {
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
