'use client';

import { EachGameResponse } from '@/types/game';

import { Record } from './Record';

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
