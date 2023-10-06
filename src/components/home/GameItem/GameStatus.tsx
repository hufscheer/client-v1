interface GameStatusProps {
  firstTeamScore: number;
  secondTeamScore: number;
}

export default function GameStatus({
  firstTeamScore = 0,
  secondTeamScore = 0,
}: GameStatusProps) {
  return (
    <div className='flex items-center justify-around w-full'>
      <span>{firstTeamScore}</span>
      <span>vs</span>
      <span>{secondTeamScore}</span>
    </div>
  );
}
