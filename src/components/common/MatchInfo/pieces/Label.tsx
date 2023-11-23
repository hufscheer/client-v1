import { useMatchInfoContext } from '@/hooks/useMatchInfoContext';
import { $ } from '@/utils/core';

type LabelProps = {
  className?: string;
};

export default function Label({ className }: LabelProps) {
  const { gameName } = useMatchInfoContext();

  return <div className={$(className)}>{gameName}</div>;
}
