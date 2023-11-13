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
            className="flex flex-col justify-center gap-1 rounded-lg bg-white p-2 shadow-md"
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
