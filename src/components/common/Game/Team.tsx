import Image from 'next/image';

import { useGameContext } from '@/hooks/useGameContext';

type TeamProps = {
  teamIndex: number;
  className?: string;
};

export default function Team({ teamIndex, className = '' }: TeamProps) {
  const { firstTeam, secondTeam } = useGameContext();

  const targetTeamInfo = teamIndex === 1 ? firstTeam : secondTeam;

  return (
    <div className={`${className}`}>
      <Image
        width="100"
        height="100"
        src={targetTeamInfo.logoImageUrl}
        alt={`${targetTeamInfo.name}팀 로고`}
      />
      <span>{targetTeamInfo.name}</span>
    </div>
  );
}
