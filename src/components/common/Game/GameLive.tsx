import { GameType } from '@/types/game';

interface GameLiveProps {
  gameStatus: GameType['gameStatus'];
}

export default function GameLive({ gameStatus }: GameLiveProps) {
  return (
    <div
      className={`text-[0.6rem] text-center py-[0.4rem] w-16 rounded-md  ${
        gameStatus === 'END' || gameStatus === 'BEFORE'
          ? 'text-gray-500 bg-slate-100'
          : 'text-blue-500 bg-blue-100 '
      }`}
    >
      {gameStatus === 'BEFORE' && '경기 전'}
      {gameStatus === 'BREAK_TIME' && '하프 타임'}
      {gameStatus === 'FIRST_HALF' && '전반전'}
      {gameStatus === 'SECOND_HALF' && '후반전'}
      {gameStatus === 'END' && '경기 종료'}
    </div>
  );
}
