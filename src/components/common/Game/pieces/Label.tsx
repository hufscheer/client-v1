import { useGameContext } from '@/hooks/useGameContext';
import { $ } from '@/utils/core';

type LabelProps = {
  className?: string;
};

export default function Label({ className }: LabelProps) {
  const { gameName } = useGameContext();

  return <div className={$(className)}>{gameName}</div>;
}
