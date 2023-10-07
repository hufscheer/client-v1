interface GameScoreProps {
  firstTeamScore: number;
  secondTeamScore: number;
}

export default function GameScore({
  firstTeamScore = 0,
  secondTeamScore = 0,
}: GameScoreProps) {
  return (
    <div className='flex items-center justify-around gap-4 w-full'>
      <span>{firstTeamScore}</span>
      <span>vs</span>
      <span>{secondTeamScore}</span>
    </div>
  );
}
