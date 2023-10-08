import { Children, ReactNode, isValidElement } from 'react';

import GameLabel from './GameLabel';
import GameTeam from './GameTeam';
import GameStatus from './GameStatus';
import GameScore from './GameScore';
import GameTimer from './GameTimer';

interface GameMainProps {
  children?: ReactNode;
}

export default function GameMain({ children }: GameMainProps) {
  const gameScore = getGameScore(children);
  const gameTimer = getGameTimer(children);
  const gameLabel = getGameLabel(children);
  const [firstTeam, secondTeam] = getGameTeam(children);

  return (
    <>
      {gameLabel && <>{gameLabel}</>}
      <div className="grid grid-cols-[1fr,auto,1fr] justify-center items-center ">
        {firstTeam && <>{firstTeam}</>}
        {gameScore && <>{gameScore}</>}
        {gameTimer && <>{gameTimer}</>}
        {secondTeam && <>{secondTeam}</>}
      </div>
    </>
  );
}

// ! 중복된 코드가 반복되어서, 재사용 가능할 것 같음
const GameScoreType = (<GameScore firstTeamScore={0} secondTeamScore={0} />)
  .type;
function getGameScore(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    child => isValidElement(child) && child.type === GameScoreType,
  );
}

const GameTimerType = (<GameTimer date={new Date()} />).type;
function getGameTimer(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    child => isValidElement(child) && child.type === GameTimerType,
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
