import useDate from '@/hooks/useDate';

interface GameTimerProps {
  date: Date;
}

export default function GameTimer({ date }: GameTimerProps) {
  const { month, day, hour, minute } = useDate(date);
  return (
    <div>
      <p>
        {month}.{day}
      </p>
      <p>
        {hour}:{minute}
      </p>
    </div>
  );
}
