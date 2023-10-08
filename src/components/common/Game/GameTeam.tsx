import { ReactNode } from 'react';

interface GameTeamProps {
  direction?: 'row' | 'col';
  reverse?: boolean;
  gap?: number;
  children?: ReactNode;
}

export default function GameTeam({
  direction = 'row',
  reverse = false,
  gap = 0,
  children,
}: GameTeamProps) {
  const flexDirection = {
    row: 'flex-row',
    col: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'col-reverse': 'flex-col-reverse',
  } as const;
  const flexGap = ['gap-0', 'gap-1', 'gap-2', 'gap-3', 'gap-4'] as const;

  return (
    <div
      className={`flex ${
        flexDirection[`${direction}${reverse ? '-reverse' : ''}`]
      } items-center justify-center ${flexGap[`${gap}`]} w-full`}
    >
      {children}
    </div>
  );
}
