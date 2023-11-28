import useReportCommentMutation from '@/queries/useReportCommentMutation/query';
import { $ } from '@/utils/core';
import { parseTimeString } from '@/utils/time';

type CommentItemProps = {
  commentId: number;
  content: string;
  order: number;
  isBlocked: boolean;
  createdAt: string;
};

const teamColor = [
  'bg-[#ffb2b2]',
  'bg-[#fdd3b1]',
  'bg-[#b2c3ff]',
  'bg-[#a6e7be]',
] as const;

export default function CommentItem({
  commentId,
  content,
  order,
  isBlocked,
  createdAt,
}: CommentItemProps) {
  const { mutate } = useReportCommentMutation();
  const handleClickReportButton = (payload: { commentId: number }) => {
    mutate(payload);
  };

  const isEven = order % 2 === 0;
  const { period, hours, minutes } = parseTimeString(createdAt);

  if (isBlocked)
    return (
      <div className="rounded-xl border bg-gray-2 px-3 py-1">
        ⚠️ 관리자에 의해 차단된 댓글입니다.
      </div>
    );

  return (
    <li className={$('mb-1 flex items-end', isEven && 'flex-row-reverse')}>
      <div className={$('rounded-xl border px-3 py-1', teamColor[order - 1])}>
        {content}
      </div>
      <div
        className={$(
          'mb-1 flex items-end justify-between text-xs',
          isEven && 'flex-row-reverse',
        )}
      >
        <time
          className={$(
            'w-max px-2 text-gray-4',
            isEven ? 'border-l' : 'border-r',
          )}
        >
          {`${period} ${hours}:${minutes.toString().padStart(2, '0')}`}
        </time>
        <button
          onClick={() => handleClickReportButton({ commentId })}
          className="mx-2 w-max text-red-400"
        >
          신고
        </button>
      </div>
    </li>
  );
}
