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
      <div>타임라인</div>
      {status !== 'BEFORE' ? (
        records.map(record => (
          <li>
            <div>
              {record.playerName} 선수 {record.score}골 득점!
            </div>
            <div>
              {useDate(record.scoredAt).hour}:{useDate(record.scoredAt).minute}
            </div>
          </li>
        ))
      ) : (
        <li>경기 시작 전입니다.</li>
      )}
    </ul>
  );
}
