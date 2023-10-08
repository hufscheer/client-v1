'use client';
import { getGameComments, postGameComment } from '@/api/game';
import useDate from '@/hooks/useDate';
import { GameCommentsResponse } from '@/types/game';
import { useEffect, useState } from 'react';

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
          comments.map((comment, idx) => (
            <li key={idx} className="flex items-center gap-4">
              <span className="items-center justify-center p-3 rounded-lg shadow-md bg-white">
                {comment.content}
              </span>
              <span className="text-xs opacity-50">
                {useDate(comment.createdAt).hour}시{' '}
                {useDate(comment.createdAt).minute}분 작성
              </span>
            </li>
          ))}
      </ul>
      <form onSubmit={CommentSubmitHandler} className="flex flex-col gap-1">
        <input
          type="text"
          name="comment"
          value={inputContent}
          onChange={e => setInputContent(e.target.value)}
          placeholder="댓글을 작성하세요"
          className="p-4 border-2 border-slate-400 rounded-lg w-full"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="border border-slate-200 rounded-lg bg-green-600 text-white py-2 px-4  disabled:opacity-70 disabled:pointer-none"
            disabled={inputContent.length == 0}
          >
            등록
          </button>
        </div>
      </form>
    </div>
  );
}
