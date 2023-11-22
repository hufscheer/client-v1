import { useGameContext } from '@/hooks/useGameContext';
import { $ } from '@/utils/core';

type StatusProps = {
  className?: string;
};

export default function Status({ className }: StatusProps) {
  const { gameQuarter } = useGameContext();

  return <div className={$('px-5', className)}>{gameQuarter}</div>;
}
