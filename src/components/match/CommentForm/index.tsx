import { UseMutateFunction } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';

import { MatchCommentPayload } from '@/types/match';

type CommentFormProps = {
  mutate: UseMutateFunction<void, Error, MatchCommentPayload, unknown>;
};

export default function CommentForm({ mutate }: CommentFormProps) {
  const [inputValue, setInputValue] = useState('');
  const handleCommentSubmit = (
    e: FormEvent<HTMLFormElement>,
    payload: MatchCommentPayload,
  ) => {
    e.preventDefault();
    mutate(payload);
  };

  return (
    <form
      onSubmit={e =>
        handleCommentSubmit(e, { gameTeamId: 1, content: inputValue })
      }
    >
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button>등록</button>
    </form>
  );
}
