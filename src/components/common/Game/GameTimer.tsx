import useDate from '@/hooks/useDate';

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
        {hour}:{minute}
      </p>
    </div>
  );
}
