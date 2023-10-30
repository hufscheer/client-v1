'use client';

import { getGameList } from '@/api/game';
import GameWithScore from '@/components/home/GameList/GameWithScore';
import GameWithTimeStamp from '@/components/home/GameList/GameWithTimeStamp';
import { Game } from '@/types/game';
import { useEffect, useState } from 'react';

export default function Home() {
  const [gamesScheduled, setGamesScheduled] = useState<Game[]>([]);
  const [gamesInProgress, setGamesInProgress] = useState<Game[]>([]);
  const [gamesEnded, setGamesEnded] = useState<Game[]>([]);

  useEffect(() => {
    const getGames = async () => {
      const data = await getGameList();

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
    <main className="flex flex-col w-full gap-3">
      <p className="my-2 text-xl font-bold text-center">매치</p>
      <div className="flex flex-col gap-8">
        <div>
          <p className="mb-2 ml-4 font-semibold">진행 중</p>
          <GameWithScore data={gamesInProgress} />
        </div>
        <div>
          <p className="mb-2 ml-4 font-semibold">예정</p>
          <GameWithTimeStamp data={gamesScheduled} />
        </div>
        <div>
          <p className="mb-2 ml-4 font-semibold">종료</p>
          <GameWithScore data={gamesEnded} />
        </div>
      </div>
    </main>
  );
}
