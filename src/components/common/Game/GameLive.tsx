import { AllGamesResponse } from '@/types/game';

interface GameLiveProps {
  gameStatus: AllGamesResponse['gameStatus'];
}

export default function GameLive({ gameStatus }: GameLiveProps) {
  return (
    <>
      {gameStatus === 'FIRST_HALF' ||
        (gameStatus === 'SECOND_HALF' && (
          <p className="text-sm font-semibold text-center bg-red-200 rounded-md p-4 text-red-600 ">
            Live
          </p>
        ))}
    </>
  );
}
