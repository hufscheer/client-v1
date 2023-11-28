import { InfiniteData } from '@tanstack/react-query';
import { ReactNode } from 'react';

import { MatchListParams } from '@/api/match';
import { MatchListType } from '@/types/match';

import { useMatchList } from './query';

interface MatchListFetcherProps
  extends Omit<MatchListParams, 'cursor' | 'size'> {
  children: ({
    matchList,
    hasNextPage,
    fetchNextPage,
    isFetching,
  }: {
    matchList: InfiniteData<MatchListType[]>;
    hasNextPage: boolean;
    fetchNextPage: () => void;
    isFetching: boolean;
  }) => ReactNode;
}

export default function MatchListFetcher({
  children,
  ...props
}: MatchListFetcherProps) {
  const { matchList, error, hasNextPage, fetchNextPage, isFetching } =
    useMatchList(props satisfies { status: string });

  if (error) throw error;

  return children({ matchList, hasNextPage, fetchNextPage, isFetching });
}
