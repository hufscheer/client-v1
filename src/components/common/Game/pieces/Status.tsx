import { useGameContext } from '@/hooks/useGameContext';
import { $ } from '@/utils/core';

type StatusProps = {
  className?: string;
};

export default function Status({ className }: StatusProps) {
  const { gameQuarter } = useGameContext();

  return (
    <div className={$('z-10 px-5 text-white', className)}>{gameQuarter}</div>
  );
}
