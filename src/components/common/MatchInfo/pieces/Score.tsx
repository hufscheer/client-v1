import { useMatchInfoContext } from '@/hooks/useMatchInfoContext';
import { $ } from '@/utils/core';

type ScoreProps = {
  teamIndex: number;
  className?: string;
};

export default function Score({ teamIndex, className }: ScoreProps) {
  const { gameTeams } = useMatchInfoContext();

  const [targetTeam] = gameTeams.filter(team => team.gameTeamId === teamIndex);

  return <span className={$('text-3xl', className)}>{targetTeam.score}</span>;
}
