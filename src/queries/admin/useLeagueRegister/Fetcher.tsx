import { ReactNode } from 'react';

import { useLeagueList } from '@/queries/admin/useLeagueList/query';
import { LeagueRegisterDataType } from '@/types/admin/league';

import { useSportsList } from './query';

type LeagueRegisterFetcherProps = {
  children: ({
    leagueData,
    sportsListData,
  }: LeagueRegisterDataType) => ReactNode;
};

export default function LeagueRegisterFetcher({
  children,
}: LeagueRegisterFetcherProps) {
  const { data: leagueData, error: leagueDataError } = useLeagueList();
  const { sportsListData, sportsListError } = useSportsList();

  if (leagueDataError) throw leagueDataError;
  if (sportsListError) throw sportsListError;

  return children({
    leagueData,
    sportsListData,
  });
}
