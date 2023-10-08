'use client';

import { getGameComments, postGameComment } from '@/api/game';
import { GameCommentsResponse } from '@/types/game';
import { useEffect, useState } from 'react';
import { Comment } from './Comment';

export default function GameComments({ gameID }: { gameID: number }) {
  const [comments, setComments] = useState<GameCommentsResponse[]>();
  const [inputContent, setInputContent] = useState<string>('');
  const getData = async () => {
    const res = await getGameComments(gameID);
    typeof res !== 'number' && setComments(res);
  };
  useEffect(() => {
    getData();
  }, []);

  const CommentSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    inputContent &&
      (await postGameComment({ content: inputContent, gameId: gameID }));
    getData();
    setInputContent('');
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl font-bold">응원 댓글</p>
      <ul className="flex flex-col gap-2">
        {comments &&
          comments.map((comment, idx) => <Comment {...comment} key={idx} />)}
      </ul>
      <form onSubmit={CommentSubmitHandler} className="space-y-1">
        <input
          type="text"
          name="comment"
          value={inputContent}
          onChange={e => setInputContent(e.target.value)}
          placeholder="댓글을 작성하세요"
          className="p-4 border-2 border-slate-400 rounded-lg w-full"
        />
        <button
          type="submit"
          className="border border-slate-200 rounded-lg bg-green-600 text-white py-2 px-4  disabled:opacity-70 disabled:pointer-none float-right w-fit"
          disabled={inputContent.length == 0}
        >
          등록
        </button>
      </form>
    </div>
  );
}
