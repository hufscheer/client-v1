interface GameScoreProps {
  firstTeamScore: number;
  secondTeamScore: number;
  fontSize?: string;
  fontWeight?: string;
}

export default function GameScore({
  firstTeamScore = 0,
  secondTeamScore = 0,
  fontSize = 'text-lg',
  fontWeight = 'font-semibold',
}: GameScoreProps) {
  return (
    <div
      className={`flex items-center justify-center gap-4 w-full ${fontWeight}`}
    >
      <span className={`${fontSize}`}>{firstTeamScore}</span>
      <span>:</span>
      <span className={`${fontSize}`}>{secondTeamScore}</span>
    </div>
  );
}
