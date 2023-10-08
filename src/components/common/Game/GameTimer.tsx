import useDate from '@/hooks/useDate';
import { parseTime } from '@/utils/utc-times';

interface GameTimerProps {
  date: Date;
}

export default function GameTimer({ date }: GameTimerProps) {
  const { month, day, hour, minute } = useDate(date);

  return (
    <div className="w-full text-center">
      <p>
        {month}월 {day}일
      </p>
      <p>
        {parseTime(hour)}:{parseTime(minute)}
      </p>
    </div>
  );
}
