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
        records.map(record => (
          <li className="flex gap-4 items-center justify-center p-4 rounded-lg shadow-md bg-white">
            <span className="text-lg text-center">
              {record.playerName} 선수 {record.score}골 득점!
            </span>
            <span className="text-xs opacity-50 text-center">
              {useDate(record.scoredAt).hour}시{' '}
              {useDate(record.scoredAt).minute}분
            </span>
          </li>
        ))
      ) : (
        <li>경기 시작 전입니다.</li>
      )}
    </ul>
  );
}
