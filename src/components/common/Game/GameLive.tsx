import { AllGamesResponse } from '@/types/game';

interface GameLiveProps {
  gameStatus: AllGamesResponse['gameStatus'];
}

export default function GameLive({ gameStatus }: GameLiveProps) {
  return (
    <div
      className={`text-center text-red-400 ${
        gameStatus === 'END' || (gameStatus === 'BEFORE' && 'text-gray-400')
      }`}
    >
      {gameStatus === 'BEFORE' && '경기 예정'}
      {gameStatus === 'FIRST_HALF' || (gameStatus === 'SECOND_HALF' && 'Live')}
      {gameStatus === 'END' && '경기 종료'}
    </div>
  );
}
