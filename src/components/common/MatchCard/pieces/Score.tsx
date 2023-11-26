import { useMatchCardContext } from '@/hooks/useMatchCardContext';
import { $ } from '@/utils/core';

type ScoreProps = {
  teamIndex: number;
  className?: string;
};

export default function Score({ teamIndex, className }: ScoreProps) {
  const { gameTeams } = useMatchCardContext();
  const targetTeam = gameTeams[teamIndex - 1];

  return <span className={$('text-3xl', className)}>{targetTeam.score}</span>;
}