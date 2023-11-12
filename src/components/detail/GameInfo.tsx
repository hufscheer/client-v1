import { Game } from '@/components/common/Game';
import { GameDetailType } from '@/types/game';

export default function GameInfo({ game }: { game: GameDetailType }) {
  return (
    <div className="flex flex-col gap-1 justify-center px-2 py-8 bg-white rounded-md">
      <Game {...game}>
        <Game.Team teamIndex={1} />
        <Game.Score teamIndex={1} />
        <Game.Status />
        <Game.Score teamIndex={2} />
        <Game.Team teamIndex={2} />
      </Game>
    </div>
  );
}
