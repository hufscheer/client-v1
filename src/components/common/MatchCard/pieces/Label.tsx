import { useMatchCardContext } from '@/hooks/useMatchCardContext';
import { $ } from '@/utils/core';
import { parseTimeString } from '@/utils/time';

type LabelProps = {
  className?: string;
};

export default function Label({ className }: LabelProps) {
  const { gameName, sportsName, startTime } = useMatchCardContext();
  const { month, date, weekday, period, hours, minutes } =
    parseTimeString(startTime);

  return (
    <div className={$('flex items-center justify-between', className)}>
      <time>
        {month}. {date}. {weekday}요일 {period} {hours}:{minutes}
      </time>
      <div className="text-right">
        {sportsName} {gameName}
      </div>
    </div>
  );
}
