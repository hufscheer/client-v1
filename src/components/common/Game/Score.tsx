import { useGameContext } from '@/hooks/useGameContext';

type ScoreProps = {
  teamIndex: number;
  className?: string;
};

export default function Score({ teamIndex, className = '' }: ScoreProps) {
  const { firstTeamScore, secondTeamScore } = useGameContext();

  return (
    <span className={`${className}`}>
      {teamIndex === 1 ? firstTeamScore : secondTeamScore}
    </span>
  );
}
