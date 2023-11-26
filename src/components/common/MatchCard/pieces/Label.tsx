import { useMatchCardContext } from '@/hooks/useMatchCardContext';
import { $ } from '@/utils/core';

type LabelProps = {
  className?: string;
};

export default function Label({ className }: LabelProps) {
  const { gameName, sportsName, startTime } = useMatchCardContext();

  return (
    <div className={$(className)}>
      {startTime && <div>{startTime}</div>}
      {sportsName && <div className="text-center">{sportsName}</div>}
      {gameName && <div className="text-right">{gameName}</div>}
    </div>
  );
}
