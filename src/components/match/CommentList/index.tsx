'use client';

import { useEffect } from 'react';

import useInfiniteObserver from '@/hooks/useInfiniteObserver';
import { MatchCommentType } from '@/types/match';

import CommentItem from '../CommentItem';

type CommentListProps = {
  commentList: MatchCommentType[];
  hasNextPage: boolean;
  fetchNextPage: () => void;
  isFetching: boolean;
  scrollToBottom: () => void;
};

export default function CommentList({
  commentList,
  fetchNextPage,
  hasNextPage,
  isFetching,
  scrollToBottom,
}: CommentListProps) {
  const { ref } = useInfiniteObserver<HTMLDivElement>(
    async (entry, observer) => {
      observer.unobserve(entry.target);
      if (hasNextPage && !isFetching) {
        fetchNextPage();
      }
    },
  );

  useEffect(() => {
    if (!scrollToBottom) return;

    scrollToBottom();
  }, [scrollToBottom]);

  return (
    <>
      <div ref={ref}></div>
      {commentList.map(comment => (
        <CommentItem {...comment} key={comment.commentId} order={1} />
      ))}
    </>
  );
}

CommentList.SocketList = function SocketList({
  commentList,
}: Pick<CommentListProps, 'commentList'>) {
  return (
    <>
      {commentList.map(comment => (
        <CommentItem {...comment} key={comment.commentId} order={1} />
      ))}
    </>
  );
};
