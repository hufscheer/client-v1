import { getGameComments } from '@/api/game';
import useDate from '@/hooks/useDate';

export default async function GameComments({ gameID }: { gameID: number }) {
  const comments = await getGameComments(gameID);
  console.log(comments);

  return (
    <div>
      <div>응원 댓글</div>
      <ul>
        {typeof comments !== 'number' &&
          comments.map((comment, idx) => (
            <li key={idx} className="p-4">
              <span className="">{comment.content}</span>
              <span className="text-xs">
                {useDate(comment.createdAt).hour}시{' '}
                {useDate(comment.createdAt).minute}분 작성
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}
