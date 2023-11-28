import { AxiosError } from 'axios';

import { FallbackProps } from '@/components/common/ErrorBoundary';
import { LINEUP_API_ERROR_MESSAGE } from '@/constants/error';
import { MatchLineupType } from '@/types/match';

import LineupItem from '../LineupItem';

export default function Lineup({ teamName, gameTeamPlayers }: MatchLineupType) {
  return (
    <div>
      <div className="mb-3 px-4 text-primary">{teamName}</div>
      <ul className="relative px-4">
        {gameTeamPlayers.map((player, idx) => (
          <LineupItem key={player.playerName + idx} {...player} />
        ))}
      </ul>
    </div>
  );
}

Lineup.ErrorFallback = function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  let message;

  if (error instanceof AxiosError) {
    const code = error.code;

    message =
      LINEUP_API_ERROR_MESSAGE[code as keyof typeof LINEUP_API_ERROR_MESSAGE];
  } else if (error instanceof Error) {
    message = '라인업이 등록되지 않았어요!';
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-xl py-10">
      <span className="text-gary-5">⚠️ {message}</span>

      <button
        onClick={resetErrorBoundary}
        className="text-primary underline-offset-1"
      >
        새로고침
      </button>
    </div>
  );
};
