import { ReactNode } from 'react';

interface GameInformProps {
  children?: ReactNode;
}

export default function GameInform({ children }: GameInformProps) {
  return <div>{children}</div>;
}
