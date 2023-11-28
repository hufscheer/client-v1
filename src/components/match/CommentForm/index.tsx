import { UseMutateFunction } from '@tanstack/react-query';
import { ChangeEvent, FormEvent, useState } from 'react';

import { MatchCommentPayload, MatchTeamType } from '@/types/match';

type CommentFormProps = {
  matchId: string;
  matchTeams: MatchTeamType[];
  mutate: UseMutateFunction<void, Error, MatchCommentPayload, unknown>;
  scrollToBottom: () => void;
};

export default function CommentForm({
  matchId,
  matchTeams,
  mutate,
  scrollToBottom,
}: CommentFormProps) {
  const [inputValue, setInputValue] = useState('');
  const [selectedTeamId, setSelectedTeamId] = useState<number>(1);

  const handleCommentSubmit = (
    e: FormEvent<HTMLFormElement>,
    payload: MatchCommentPayload,
  ) => {
    e.preventDefault();
    mutate({ ...payload, gameTeamId: selectedTeamId });
    setInputValue('');
    scrollToBottom();
  };

  const handleRadioClick = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedTeamId(Number(e.target.value));
  };

  return (
    <>
      <form
        className="h-70px absolute bottom-0 left-0 w-full translate-y-full"
        onSubmit={e =>
          handleCommentSubmit(e, {
            gameTeamId: Number(matchId),
            content: inputValue,
          })
        }
      >
        <fieldset className="absolute top-0 flex w-full -translate-y-full items-center justify-start gap-4 rounded-lg bg-white px-5 py-3">
          {matchTeams.map(team => (
            <label key={team.gameTeamId} className="flex items-center">
              <input
                type="radio"
                checked={selectedTeamId === team.gameTeamId}
                value={team.gameTeamId}
                onChange={handleRadioClick}
                className="dark:border-gray-6 dark:bg-gray-6 mr-1 h-4 w-4 border-gray-3 bg-gray-1 text-primary focus:ring-2 focus:ring-primary dark:ring-offset-black dark:focus:ring-primary"
              />
              {team.gameTeamName}
            </label>
          ))}
        </fieldset>

        <div
          className="z-10 grid items-center rounded-lg bg-gray-2"
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
    </>
  );
}
