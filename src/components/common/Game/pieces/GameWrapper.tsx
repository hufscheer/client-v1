import { createContext, ReactNode } from 'react';

import { GameDetailType } from '@/types/game';
import { $ } from '@/utils/core';

type GameProps = GameDetailType & {
  children: ReactNode;
  className?: string;
};

export const GameContext = createContext<GameDetailType>({} as GameDetailType);

export default function GameWrapper({
  className,
  children,
  ...props
}: GameProps) {
  return (
    <GameContext.Provider value={props}>
      <div
        className={$(
          'relative h-full min-h-[200px] justify-center rounded-xl bg-gray-1 shadow-lg',
          className,
        )}
      >
        {children}
      </div>
    </GameContext.Provider>
  );
}
