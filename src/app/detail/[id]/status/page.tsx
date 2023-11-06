'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

import { postGameStatus } from '@/api/auth';
import Select from '@/components/common/Select/Select';
import { GameStatusType } from '@/types/game';

export default function Status() {
  const router = useRouter();
  const params = useParams();
  const [gameState, setGameState] = useState<GameStatusType>('BEFORE');

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
        onChange={e => setGameState(e.target.value as GameStatusType)}
      >
        <option value="BEFORE">경기 전</option>
        <option value="FIRST_HALF">전반전</option>
        <option value="BREAK_TIME">휴식 시간</option>
        <option value="SECOND_HALF">후반전</option>
        <option value="END">경기 종료</option>
      </Select>
      <button
        onClick={updateGameStatus}
        className="mt-4 border border-slate-200 rounded-md bg-green-600 text-white py-2 px-4 w-full disabled:opacity-70 disabled:pointer-none"
      >
        변경하기
      </button>
    </div>
  );
}
