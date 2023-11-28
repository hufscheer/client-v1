import Image from 'next/image';

import { useMatchCardContext } from '@/hooks/useMatchCardContext';
import { $ } from '@/utils/core';

import { Icon } from '../../Icon';

type TeamProps = {
  teamIndex: number;
  className?: string;
};

export default function Team({ teamIndex, className }: TeamProps) {
  const { gameTeams } = useMatchCardContext();

  if (gameTeams.length === 0) {
    return (
      <div className={$(className)}>
        <Icon
          iconName="profile"
          className="h-16 w-16 text-gray-200 dark:text-gray-700"
        />
      </div>
    );
  }

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
