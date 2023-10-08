'use client';

import { getEachGame } from '@/api/game';
import GameComments from '@/components/detail/GameComments';
import GameInfo from '@/components/detail/GameInfo';
import GameTimeline from '@/components/detail/GameTimeline';
import { EachGameResponse } from '@/types/game';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DetailPage({ params }: { params: { id: string } }) {
  const [gameData, setGameData] = useState<EachGameResponse>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const gameID = params.id;

  useEffect(() => {
    const getGameData = async () => {
      const res = await getEachGame(Number(gameID));
      if (typeof res === 'number') return notFound();
      setGameData(res);
    };
    getGameData();
    const token = localStorage.getItem('token');
    token && setIsLoggedIn(true);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {isLoggedIn && (
        <Link
          href={`/detail/${gameID}/modify`}
          className="p-2 rounded-lg border border-red-500 w-fit bg-red-400 text-white"
        >
          수정
        </Link>
      )}
      {gameData && <GameInfo game={gameData} />}
      {gameData && (
        <GameTimeline records={gameData.records} status={gameData.gameStatus} />
      )}
      {gameData && <GameComments gameID={gameData.id} />}
    </div>
  );
}
