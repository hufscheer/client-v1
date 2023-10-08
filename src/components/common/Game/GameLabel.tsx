import { ReactNode } from 'react';

interface GameLabelProps {
  children?: ReactNode;
}

export default function GameLabel({ children }: GameLabelProps) {
  return <div className="w-full text-sm text-center">{children}</div>;
}
