import Image from 'next/image';

import { useGameContext } from '@/hooks/useGameContext';
import { $ } from '@/utils/core';

type TeamProps = {
  teamIndex: number;
  className?: string;
};

export default function Team({ teamIndex, className }: TeamProps) {
  const { gameTeams } = useGameContext();

  const targetTeamInfo = gameTeams[teamIndex - 1];

  return (
    <div className={$(className)}>
      <Image
        width="65"
        height="65"
        src={targetTeamInfo.logoImageUrl}
        alt={`${targetTeamInfo.gameTeamName}팀 로고`}
        className="my-5"
      />
      <span>{targetTeamInfo.gameTeamName}</span>
    </div>
  );
}
