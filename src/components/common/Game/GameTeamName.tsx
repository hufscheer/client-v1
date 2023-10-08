import { ReactNode } from 'react';

interface GameTeamNameProps {
  children?: ReactNode;
}

export default function GameTeamName({ children }: GameTeamNameProps) {
  return <p>{children}</p>;
}
