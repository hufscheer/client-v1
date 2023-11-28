import { InfiniteData } from '@tanstack/react-query';
import { ReactNode } from 'react';

import { MatchCommentType } from '@/types/match';

import useMatchCommentById from './query';

type MatchCommentFetcherProps = {
  matchId: string;
  children: ({
    commentList,
    fetchNextPage,
    hasNextPage,
    isFetching,
  }: {
    commentList: InfiniteData<MatchCommentType[]>;
    fetchNextPage: () => void;
    hasNextPage: boolean;
    isFetching: boolean;
  }) => ReactNode;
};

export default function MatchCommentFetcher({
  matchId,
  children,
}: MatchCommentFetcherProps) {
  const { commentList, error, fetchNextPage, hasNextPage, isFetching } =
    useMatchCommentById(matchId);

  if (error) throw error;

  return children({ commentList, fetchNextPage, hasNextPage, isFetching });
}
