import { $ } from '@/utils/core';

type CommentItemProps = {
  content: string;
  order: number;
  isBlocked: boolean;
  createdAt: string;
};

export default function CommentItem({
  content,
  order,
  isBlocked,
  createdAt,
}: CommentItemProps) {
  const isEven = order % 2 === 0;

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
          {createdAt}
        </time>
        <div className="mx-2 text-red-400">신고 🚨</div>
      </div>
    </li>
  );
}
