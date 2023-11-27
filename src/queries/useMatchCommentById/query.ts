import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getMatchCommentById } from '@/api/match';
export default function useMatchCommentById(matchId: string) {
  const { data, error, fetchNextPage, hasNextPage } = useSuspenseInfiniteQuery({
    queryKey: ['match-comment', matchId],
    initialPageParam: 0,
    queryFn: ({ pageParam }) => getMatchCommentById(matchId, pageParam),
    getPreviousPageParam: firstPage => {
      return firstPage[0].commentId || null;
    },
    getNextPageParam: lastPage => lastPage[0]?.commentId || null,
  });

  return {
    commentList: data,
    fetchNextPage,
    hasNextPage,
    error,
  };
}
