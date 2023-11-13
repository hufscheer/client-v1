import { useGameContext } from '@/hooks/useGameContext';
import { $ } from '@/utils/core';

type LabelProps = {
  className?: string;
};

export default function Label({ className }: LabelProps) {
  const { name } = useGameContext();

  return <div className={$(className)}>{name}</div>;
}
