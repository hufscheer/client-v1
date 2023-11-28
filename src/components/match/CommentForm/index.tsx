import { UseMutateFunction } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';

import { MatchCommentPayload } from '@/types/match';

type CommentFormProps = {
  matchId: string;
  mutate: UseMutateFunction<void, Error, MatchCommentPayload, unknown>;
  scrollToBottom: () => void;
};

export default function CommentForm({
  matchId,
  mutate,
  scrollToBottom,
}: CommentFormProps) {
  const [inputValue, setInputValue] = useState('');
  const handleCommentSubmit = (
    e: FormEvent<HTMLFormElement>,
    payload: MatchCommentPayload,
  ) => {
    e.preventDefault();
    mutate(payload);
    setInputValue('');
    scrollToBottom();
  };

  return (
    <form
      className="h-70px absolute -bottom-1 left-0 w-full"
      onSubmit={e =>
        handleCommentSubmit(e, {
          gameTeamId: Number(matchId),
          content: inputValue,
        })
      }
    >
      <div
        className="grid items-center rounded-lg bg-gray-2"
        style={{ gridTemplateColumns: '1fr auto' }}
      >
        <input
          className="bg-inherit px-5 text-gray-5 outline-none"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="응원하는 팀에 댓글을 남겨보세요!"
        />
        <button className="rounded-xl bg-primary px-5 py-3 text-white">
          댓글
        </button>
      </div>
    </form>
  );
}
