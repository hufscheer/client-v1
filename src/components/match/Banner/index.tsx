import { GameBanner } from '@/components/common/Game';
import { GameDetailType } from '@/types/game';

export default function MatchBanner(props: GameDetailType) {
  return (
    <GameBanner {...props} className="flex flex-col">
      <GameBanner.Label className="absolute left-2 top-2" />
      <div className="flex h-full items-center justify-around">
        <GameBanner.Team teamIndex={1} className="flex flex-col items-center" />
        <GameBanner.Score teamIndex={1} />
        <GameBanner.Status />
        <GameBanner.Score teamIndex={2} />
        <GameBanner.Team teamIndex={2} className="flex flex-col items-center" />
      </div>
    </GameBanner>
  );
}
