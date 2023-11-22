import { createContext, ReactNode } from 'react';

import { Icon } from '@/components/common/Icon';
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
          'relative h-full min-h-[200px] justify-center rounded-xl bg-gray-1  shadow-lg',
          className,
        )}
      >
        <Icon
          viewBox="-3 120 100 50"
          width={150}
          height={200}
          iconName="logo"
          className="absolute left-1/2 h-full -translate-x-1/2 fill-primary"
        />
        {children}
      </div>
    </GameContext.Provider>
  );
}
