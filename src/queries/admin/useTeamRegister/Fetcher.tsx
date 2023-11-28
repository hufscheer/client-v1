import { ReactNode } from 'react';

import { useLeagueIdContext } from '@/hooks/useLeagueIdContext';
import { TeamType } from '@/types/admin/team';

import { useTeamListByLeagueId } from './query';

type TeamRegisterFetcherProps = {
  children: (data: TeamType[] | string | undefined) => ReactNode;
};

export default function TeamRegisterFetcher({
  children,
}: TeamRegisterFetcherProps) {
  const { leagueId } = useLeagueIdContext();

  const { teamList, error } = useTeamListByLeagueId(leagueId);

  if (error) throw Error;

  return children(teamList);
}
