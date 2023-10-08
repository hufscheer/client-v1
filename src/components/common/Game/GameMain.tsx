import { Children, ReactNode, isValidElement } from 'react';

import GameLabel from './GameLabel';
import GameTeam from './GameTeam';
import GameStatus from './GameStatus';

interface GameMainProps {
  children?: ReactNode;
}

export default function GameMain({ children }: GameMainProps) {
  const gameStatus = getGameStatus(children);
  const gameLabel = getGameLabel(children);
  const [firstTeam, secondTeam] = getGameTeam(children);

  return (
    <>
      {gameLabel && <>{gameLabel}</>}
      <div className="flex justify-between items-center">
        {firstTeam && <>{firstTeam}</>}
        {gameStatus && <>{gameStatus}</>}
        {secondTeam && <>{secondTeam}</>}
      </div>
    </>
  );
}

// ! 중복된 코드가 반복되어서, 재사용 가능할 것 같음
const GameStatusType = (<GameStatus />).type;
function getGameStatus(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    child => isValidElement(child) && child.type === GameStatusType,
  );
}

const GameTeamType = (<GameTeam />).type;
function getGameTeam(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    child => isValidElement(child) && child.type === GameTeamType,
  );
}

const GameLabelType = (<GameLabel />).type;
function getGameLabel(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    child => isValidElement(child) && child.type === GameLabelType,
  );
}
