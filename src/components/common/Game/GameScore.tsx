interface GameScoreProps {
  firstTeamScore: number;
  secondTeamScore: number;
  fontSize?: string;
  fontWeight?: string;
}

export default function GameScore({
  firstTeamScore = 0,
  secondTeamScore = 0,
  fontSize,
  fontWeight,
}: GameScoreProps) {
  return (
    <div className="flex items-center justify-around gap-4 w-full">
      <span className={`${fontSize} ${fontWeight}`}>{firstTeamScore}</span>
      <span>:</span>
      <span className={`${fontSize} ${fontWeight}`}>{secondTeamScore}</span>
    </div>
  );
}
