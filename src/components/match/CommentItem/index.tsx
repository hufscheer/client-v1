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

  return (
    <li className={$('mb-1 flex items-end', isEven && 'flex-row-reverse')}>
      {isBlocked ? (
        <div
          className={$(
            'w-fit rounded-xl border px-3 py-1',
            isEven ? 'bg-[#b2c3ff]' : 'bg-[#ffb2b2]',
          )}
        >
          ⚠️ 관리자에 의해 차단된 댓글입니다.
        </div>
      ) : (
        <div
          className={$(
            'w-fit rounded-xl border px-3 py-1',
            isEven ? 'bg-[#b2c3ff]' : 'bg-[#ffb2b2]',
          )}
        >
          {content}
        </div>
      )}
      <div
        className={$(
          'mb-1 flex items-end justify-between text-xs',
          isEven && 'flex-row-reverse',
        )}
      >
        <time
          className={$('px-2 text-gray-4', isEven ? 'border-l' : 'border-r')}
        >
          {`${period} ${hours}:${minutes.toString().padStart(2, '0')}`}
        </time>
        <button
          onClick={() => handleClickReportButton({ commentId })}
          className="mx-2 text-red-400"
        >
          신고
        </button>
      </div>
    </li>
  );
}
