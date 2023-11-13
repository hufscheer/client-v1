import Link from 'next/link';

import { Game } from '@/components/common/Game';
import { GameDetailType } from '@/types/game';

export default function GameItem(props: GameDetailType) {
  return (
    <li key={props.id}>
      <Link
        href={`/detail/${props.id}`}
        className="flex flex-col gap-1 justify-center p-2 rounded-lg shadow-md bg-white"
      >
        <Game {...props}>
          <Game.Label />
          <Game.Team teamIndex={1} />
          <Game.Status />
          <Game.Team teamIndex={2} />
        </Game>
      </Link>
    </li>
  );
}
