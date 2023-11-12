import Link from 'next/link';

import { Game } from '@/components/common/Game';
import { GameType } from '@/types/game';

interface GameListProps {
  data: GameType[];
}

export default function GameWithTimeStamp({ data }: GameListProps) {
  return (
    <ul className="space-y-4">
      {data.map(game => (
        <li key={game.id}>
          <Link
            href={`/detail/${game.id}`}
            className="flex flex-col gap-1 justify-center p-2 rounded-lg shadow-md bg-white"
          >
            <Game records={[]} videoId="" {...game}>
              <Game.Label />
              <Game.Team teamIndex={1} />
              <Game.Team teamIndex={2} />
            </Game>
          </Link>
        </li>
      ))}
    </ul>
  );
}
