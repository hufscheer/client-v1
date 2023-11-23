'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

import { postGameStatus } from '@/api/auth';
import Select from '@/components/common/AdminSelect/Select';
import { MatchQuarterType } from '@/types/match';

export default function Status() {
  const router = useRouter();
  const params = useParams();
  const [gameState, setGameState] = useState<MatchQuarterType>('전반');

  const updateGameStatus = async () => {
    postGameStatus(Number(params.id), gameState).then(() =>
      router.push(`/detail/${params.id}`),
    );
  };

  return (
    <div>
      <Select
        defaultValue={gameState}
        value={gameState}
        onChange={e => setGameState(e.target.value as MatchQuarterType)}
      >
        <option value="BEFORE">경기 전</option>
        <option value="FIRST_HALF">전반전</option>
        <option value="BREAK_TIME">휴식 시간</option>
        <option value="SECOND_HALF">후반전</option>
        <option value="END">경기 종료</option>
      </Select>
      <button
        onClick={updateGameStatus}
        className="disabled:pointer-none mt-4 w-full rounded-md border border-slate-200 bg-green-600 px-4 py-2 text-white disabled:opacity-70"
      >
        변경하기
      </button>
    </div>
  );
}
