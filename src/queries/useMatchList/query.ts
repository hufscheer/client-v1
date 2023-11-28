import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getMatchList, MatchListParams } from '@/api/match';

export const useMatchList = ({
  sportsId,
  status = 'playing',
  leagueId,
}: Omit<MatchListParams, 'cursor' | 'size'>) => {
  const { data, error, isFetching, hasNextPage, fetchNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: ['match-list', sportsId, status, leagueId],
      queryFn: ({ pageParam }) =>
        getMatchList({
          sportsId,
          status,
          leagueId,
          cursor: pageParam,
        }),
      initialPageParam: 0,
      getNextPageParam: lastPage => lastPage.at(-1)?.id || null,
    });

  return {
    matchList: data,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
  };
};
