'use client';

import { getEachGame } from '@/api/game';
import GameComments from '@/components/detail/GameComments';
import GameInfo from '@/components/detail/GameInfo';
import GameTimeline from '@/components/detail/GameTimeline';
import { GameDetailType } from '@/types/game';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DetailPage({ params }: { params: { id: string } }) {
  const [gameData, setGameData] = useState<GameDetailType>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const gameId = params.id;

  useEffect(() => {
    const getGameData = async () => {
      const res = await getEachGame(Number(gameId));

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
          className="p-2 text-white bg-red-400 border border-red-500 rounded-lg w-fit"
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
      {gameData && <GameComments gameId={gameData.id} />}
    </div>
  );
}
