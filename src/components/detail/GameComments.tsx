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
    <div>
      <div>응원 댓글</div>
      <ul className="flex flex-col gap-1">
        {comments &&
          comments.map((comment, idx) => (
            <li key={idx} className="flex items-center gap-4">
              <span className="">{comment.content}</span>
              <span className="text-xs opacity-50">
                {useDate(comment.createdAt).hour}시{' '}
                {useDate(comment.createdAt).minute}분 작성
              </span>
            </li>
          ))}
      </ul>
      <form onSubmit={CommentSubmitHandler}>
        <input
          type="text"
          name="comment"
          value={inputContent}
          onChange={e => setInputContent(e.target.value)}
          placeholder="댓글을 작성하세요"
        />
        <button type="submit">작성</button>
      </form>
    </div>
  );
}
