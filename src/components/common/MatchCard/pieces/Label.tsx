import { useMatchCardContext } from '@/hooks/useMatchCardContext';
import { $ } from '@/utils/core';

type LabelProps = {
  className?: string;
};

export default function Label({ className }: LabelProps) {
  const { gameName } = useMatchCardContext();

  return <div className={$(className)}>{gameName}</div>;
}
