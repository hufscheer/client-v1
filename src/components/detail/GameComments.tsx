'use client';

import { getGameComments, postGameComment } from '@/api/game';
import { GameCommentResponse } from '@/types/game';
import { useEffect, useState } from 'react';
import { Comment } from './Comment';

export default function GameComments({ gameId }: { gameId: number }) {
  const [comments, setComments] = useState<GameCommentResponse[]>();
  const [inputContent, setInputContent] = useState<string>('');
  const getData = async () => {
    const res = await getGameComments(gameId);
    typeof res !== 'number' && setComments(res);
  };
  useEffect(() => {
    getData();
  }, [gameId]);

  const CommentSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    if (!inputContent) return;

    await postGameComment({ content: inputContent, gameId });
    getData();
    setInputContent('');
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl font-bold">응원 댓글</p>
      <form onSubmit={CommentSubmitHandler} className="space-y-1">
        <input
          type="text"
          name="comment"
          value={inputContent}
          onChange={e => setInputContent(e.target.value)}
          placeholder="댓글을 작성하세요"
          className="w-full p-4 border-2 rounded-lg border-slate-400"
        />
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">
            욕설 및 스포츠와 무관한 내용을 포함한 댓글은
            <br />
            관리자에 의해 차단될 수 있습니다.
          </span>
          <button
            type="submit"
            className="float-right px-4 py-2 text-white bg-green-600 border rounded-lg border-slate-200 disabled:opacity-70 disabled:pointer-none"
            disabled={inputContent.length == 0}
          >
            등록
          </button>
        </div>
      </form>
      <ul className="flex flex-col gap-2">
        {comments &&
          comments.map((comment, idx) => <Comment {...comment} key={idx} />)}
      </ul>
    </div>
  );
}
