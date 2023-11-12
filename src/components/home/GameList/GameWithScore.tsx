import GameItem from '@/components/home/GameItem';
import { GameDetailType } from '@/types/game';

interface GameListProps {
  data: GameDetailType[];
}

export default function GameList({ data }: GameListProps) {
  return (
    <ul className="space-y-4">
      {data.map(game => (
        <GameItem key={game.id} {...game} />
      ))}
    </ul>
  );
}
