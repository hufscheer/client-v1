import useDate from '@/hooks/useDate';

export const Comment = ({
  content,
  createdAt,
}: {
  content: string;
  createdAt: Date;
}) => {
  const { hour, minute } = useDate(createdAt);
  return (
    <li className="flex items-center gap-4">
      <span className="items-center justify-center p-3 rounded-lg shadow-md bg-white">
        {content}
      </span>
      <span className="text-xs opacity-50">
        {hour}시 {minute}분 작성
      </span>
    </li>
  );
};
