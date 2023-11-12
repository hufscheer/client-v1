import { createContext, ReactNode } from 'react';

import { GameDetailType } from '@/types/game';

type GameProps = GameDetailType & {
  children: ReactNode;
  className?: string;
};

export const GameContext = createContext<null | GameDetailType>(
  {} as GameDetailType,
);

export default function GameWrapper({
  className = '',
  children,
  ...props
}: GameProps) {
  return (
    <GameContext.Provider value={props}>
      <div className={className}>{children}</div>
    </GameContext.Provider>
  );
}

{
  /* <Game height position=relative >
  <Game.Timeline position="absolute" />
  <div background-image="image" border height="100%">
    <Game.Team />
    <Game.Status />
    <Game.Team />
  </div>
</Game.Timeline> */
}
