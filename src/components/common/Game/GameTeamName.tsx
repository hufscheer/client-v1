import { ReactNode } from 'react';

interface GameTeamNameProps {
  children?: ReactNode;
  fontSize?: string;
  fontWeight?: string;
}

export default function GameTeamName({
  children,
  fontSize,
  fontWeight,
}: GameTeamNameProps) {
  return <p className={`${fontSize} ${fontWeight}`}>{children}</p>;
}
