import { createContext, ReactNode } from 'react';

import { GameDetailType } from '@/types/game';
import { $ } from '@/utils/core';

type GameProps = GameDetailType & {
  children: ReactNode;
  className?: string;
};

export const GameContext = createContext<null | GameDetailType>(
  {} as GameDetailType,
);

export default function GameWrapper({
  className,
  children,
  ...props
}: GameProps) {
  return (
    <GameContext.Provider value={props}>
      <div className={$(className)}>{children}</div>
    </GameContext.Provider>
  );
}
