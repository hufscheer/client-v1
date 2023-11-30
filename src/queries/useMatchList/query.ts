import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getMatchList, MatchListParams } from '@/api/match';

export const useMatchList = ({
  sport_id,
  status = 'playing',
  league_id,
}: Omit<MatchListParams, 'cursor' | 'size'>) => {
  const { data, error, isFetching, hasNextPage, fetchNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: ['match-list', sport_id, status, league_id],
      queryFn: ({ pageParam }) =>
        getMatchList({
          sport_id,
          status,
          league_id,
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
