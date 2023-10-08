import { ReactNode } from 'react';

interface GameLabelProps {
  children?: ReactNode;
}

export default function GameLabel({ children }: GameLabelProps) {
  return <p className="w-full text-sm text-center">{children}</p>;
}
