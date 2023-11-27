'use client';

import { useEffect } from 'react';

import { MatchCommentType } from '@/types/match';

import CommentItem from '../CommentItem';

type CommentListProps = {
  commentList: MatchCommentType[];
  hasNextPage?: boolean;
  fetchNextPage?: () => void;
  isFetching?: boolean;
  scrollToBottom?: () => void;
};

export default function CommentList({
  commentList,
  scrollToBottom,
}: CommentListProps) {
  useEffect(() => {
    if (!scrollToBottom) return;

    scrollToBottom();
  }, [scrollToBottom]);

  return (
    <>
      {commentList.map(comment => (
        <CommentItem {...comment} key={comment.commentId} order={1} />
      ))}
    </>
  );
}
