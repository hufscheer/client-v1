import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getMatchCommentById } from '@/api/match';
export default function useMatchCommentById(matchId: string) {
  const { data, error, fetchNextPage, hasNextPage, isFetching } =
    useSuspenseInfiniteQuery({
      queryKey: ['match-comment', matchId],
      initialPageParam: 0,
      queryFn: ({ pageParam }) => getMatchCommentById(matchId, pageParam || ''),
      getNextPageParam: lastPage => lastPage[0]?.commentId || null,
      select: data => ({
        pages: [...data.pages].reverse(),
        pageParams: [...data.pageParams].reverse(),
      }),
    });

  return {
    commentList: data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    error,
  };
}
