'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getGameDetail } from '@/api/game';
import CommentList from '@/components/detail/CommentList';
import GameInfo from '@/components/detail/GameInfo';
import GameTimeline from '@/components/detail/GameTimeline';
import { GameDetailType } from '@/types/game';

export default function DetailPage({ params }: { params: { id: string } }) {
  const [gameData, setGameData] = useState<GameDetailType>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const gameId = params.id;

  useEffect(() => {
    const getGameData = async () => {
      const res = await getGameDetail(Number(gameId));

      if (typeof res === 'number') return notFound();

      setGameData(res);
    };
    getGameData();
    const token = localStorage.getItem('token');
    if (!token) return;
    setIsLoggedIn(true);
  }, [gameId]);

  return (
    <div className="flex flex-col gap-8">
      {isLoggedIn && (
        <Link
          href={`/detail/${gameId}/modify`}
          className="w-fit rounded-lg border border-red-500 bg-red-400 p-2 text-white"
        >
          수정
        </Link>
      )}
      {gameData && <GameInfo game={gameData} />}
      {isLoggedIn && (
        <Link href={`/detail/${gameId}/status`} className="text-right">
          전/후반 변경하러 가기
        </Link>
      )}
      {gameData && (
        <GameTimeline records={gameData.records} status={gameData.gameStatus} />
      )}
      {gameData && <CommentList gameId={gameData.id} />}
    </div>
  );
}
