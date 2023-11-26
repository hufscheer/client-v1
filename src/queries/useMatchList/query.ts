import { useSuspenseQuery } from '@tanstack/react-query';

import { getMatchList, MatchListParams } from '@/api/match';

export const useMatchList = ({
  sportsId,
  status,
  leagueId,
}: MatchListParams) => {
  const { data, error } = useSuspenseQuery({
    queryKey: ['match-list', sportsId, status, leagueId],
    queryFn: () => getMatchList({ sportsId, status, leagueId }),
  });

  return {
    matchList: data,
    error,
  };
};
