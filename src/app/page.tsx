'use client';

import { getAllGames } from '@/api/game';
import GameWithScore from '@/components/home/GameList/GameWithScore';
import GameWithTimeStamp from '@/components/home/GameList/GameWithTimeStamp';
import { AllGamesResponse } from '@/types/game';
import { useEffect, useState } from 'react';

export default function Home() {
  const [gamesScheduled, setGamesScheduled] = useState<AllGamesResponse[]>([]);
  const [gamesInProgress, setGamesInProgress] = useState<AllGamesResponse[]>(
    []
  );
  const [gamesEnded, setGamesEnded] = useState<AllGamesResponse[]>([]);

  useEffect(() => {
    const getGames = async () => {
      const { data } = await getAllGames();

      data.forEach((game) => {
        if (game.gameStatus === 'BEFORE')
          setGamesScheduled((prevGames) => [...prevGames, game]);
        else if (game.gameStatus === 'END')
          setGamesEnded((prevGames) => [...prevGames, game]);
        else setGamesInProgress((prevGames) => [...prevGames, game]);
      });
    };

    getGames();
  }, []);

  return (
    <main className='w-full'>
      <p>진행 중인 경기</p>
      <GameWithScore data={gamesInProgress} />
      <p>예정된 경기</p>
      <GameWithTimeStamp data={gamesScheduled} />
      <p>종료된 경기</p>
      <GameWithScore data={gamesEnded} />
    </main>
  );
}
