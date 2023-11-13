'use client';

import { Game } from '@/components/common/Game';
import { GameType } from '@/types/game';

const DUMMY_GAME: GameType[] = [
  {
    id: 2,
    name: '삼건물대학',
    sportsName: '축구',
    startTime: '2023-10-01T23:00:00',
    firstTeam: {
      id: 1,
      name: '독일어과',
      logoImageUrl:
        'https://velog.velcdn.com/images/rlaclghks123/post/e3c0aa80-c815-478e-8bc6-713e71d10c55/image.jpg',
    },
    secondTeam: {
      id: 2,
      name: '네덜란드어과',
      logoImageUrl:
        'https://velog.velcdn.com/images/rlaclghks123/post/e3c0aa80-c815-478e-8bc6-713e71d10c55/image.jpg',
    },
    firstTeamScore: 0,
    secondTeamScore: 0,
    gameStatus: 'FIRST_HALF',
    statusChangedAt: '2023-08-17T23:00:00',
  },
  {
    id: 3,
    name: '유로컵',
    sportsName: '축구',
    startTime: '2023-10-02T23:00:00',
    firstTeam: {
      id: 1,
      name: '독일어과',
      logoImageUrl:
        'https://velog.velcdn.com/images/rlaclghks123/post/e3c0aa80-c815-478e-8bc6-713e71d10c55/image.jpg',
    },
    secondTeam: {
      id: 2,
      name: '네덜란드어과',
      logoImageUrl:
        'https://velog.velcdn.com/images/rlaclghks123/post/e3c0aa80-c815-478e-8bc6-713e71d10c55/image.jpg',
    },
    firstTeamScore: 0,
    secondTeamScore: 0,
    gameStatus: 'FIRST_HALF',
    statusChangedAt: '2023-08-17T23:00:00',
  },
];

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-3">
      <p className="text-xl font-bold text-center my-2">매치</p>
      <div className="flex flex-col gap-8">
        {DUMMY_GAME.map(game => (
          <Game records={[]} videoId={''} key={game.id} {...game}>
            <Game.Label className="border-black pb-1 mb-2 border-b-[1px]" />
            <div className="flex items-center">
              <Game.Team teamIndex={1} />
              <Game.Score teamIndex={1} />
              <Game.Status />
              <Game.Score teamIndex={2} />
              <Game.Team teamIndex={2} />
            </div>
          </Game>
        ))}
      </div>
    </main>
  );
}
