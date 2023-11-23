import { useMatchInfoContext } from '@/hooks/useMatchInfoContext';
import { $ } from '@/utils/core';

type StatusProps = {
  className?: string;
};

export default function Status({ className }: StatusProps) {
  const { gameQuarter } = useMatchInfoContext();

  return (
    <div className={$('z-10 px-5 text-white', className)}>{gameQuarter}</div>
  );
}