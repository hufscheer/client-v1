import { useMatchCardContext } from '@/hooks/useMatchCardContext';
import { $ } from '@/utils/core';
import { parseTimeString } from '@/utils/time';

type LabelProps = {
  className?: string;
};

export default function Label({ className }: LabelProps) {
  const { gameName, sportsName, startTime } = useMatchCardContext();
  const { year, month, date, weekday } = parseTimeString(startTime);

  return (
    <div className={$(className)}>
      {startTime && (
        <time>
          {year}. {month}. {date}. ({weekday})
        </time>
      )}
      {sportsName && <div className="text-center">{sportsName}</div>}
      {gameName && <div className="text-right">{gameName}</div>}
    </div>
  );
}
