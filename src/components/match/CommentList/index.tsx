'use client';

import { AxiosError } from 'axios';
import { useEffect } from 'react';

import { FallbackProps } from '@/components/common/ErrorBoundary';
import { COMMENT_API_ERROR_MESSAGE } from '@/constants/error';
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

CommentList.ErrorFallback = function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  let message;

  if (error instanceof AxiosError) {
    const code = error.code;

    message =
      COMMENT_API_ERROR_MESSAGE[code as keyof typeof COMMENT_API_ERROR_MESSAGE];
  } else if (error instanceof Error) {
    message = '댓글 목록을 불러올 수가 없어요!';
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-xl py-10">
      <span className="text-gary-5">⚠️ {message}</span>

      <button
        onClick={resetErrorBoundary}
        className="text-primary underline-offset-1"
      >
        새로고침
      </button>
    </div>
  );
};
