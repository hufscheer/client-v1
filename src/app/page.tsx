'use client';

import { getAllGames } from '@/api/game';
import GameWithScore from '@/components/home/GameList/GameWithScore';
import GameWithTimeStamp from '@/components/home/GameList/GameWithTimeStamp';
import { AllGamesResponse } from '@/types/game';
import { useEffect, useState } from 'react';

export default function Home() {
  const [gamesScheduled, setGamesScheduled] = useState<AllGamesResponse[]>([]);
  const [gamesInProgress, setGamesInProgress] = useState<AllGamesResponse[]>(
    [],
  );
  const [gamesEnded, setGamesEnded] = useState<AllGamesResponse[]>([]);

  useEffect(() => {
    const getGames = async () => {
      const { data } = await getAllGames();

      data.forEach(game => {
        if (game.gameStatus === 'BEFORE')
          setGamesScheduled(prevGames => [...prevGames, game]);
        else if (game.gameStatus === 'END')
          setGamesEnded(prevGames => [...prevGames, game]);
        else setGamesInProgress(prevGames => [...prevGames, game]);
      });
    };

    getGames();
  }, []);

  return (
    <main className="w-full flex flex-col gap-3">
      <p className="text-xl font-bold text-center my-2">매치</p>
      <div className="flex flex-col gap-8">
        <div>
          <p className="font-semibold ml-4 mb-2">진행 중</p>
          <GameWithScore data={gamesInProgress} />
        </div>
        <div>
          <p className="font-semibold ml-4 mb-2">예정</p>
          <GameWithTimeStamp data={gamesScheduled} />
        </div>
        <div>
          <p className="font-semibold ml-4 mb-2">종료</p>
          <GameWithScore data={gamesEnded} />
        </div>
      </div>
    </main>
  );
}
