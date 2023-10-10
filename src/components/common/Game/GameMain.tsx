import { Children, ReactNode, isValidElement } from 'react';

import GameLabel from './GameLabel';
import GameTeam from './GameTeam';
import GameStatus from './GameStatus';
import GameScore from './GameScore';
import GameTimer from './GameTimer';
import GameLive from './GameLive';

interface GameMainProps {
  children?: ReactNode;
}

export default function GameMain({ children }: GameMainProps) {
  const gameLive = getGameLive(children);
  const gameScore = getGameScore(children);
  const gameTimer = getGameTimer(children);
  const gameLabel = getGameLabel(children);
  const [firstTeam, secondTeam] = getGameTeam(children);

  return (
    <>
      <div className="grid grid-cols-[1fr,auto,1fr] justify-center items-center ">
        {firstTeam && <>{firstTeam}</>}
        <div className="grid grid-rows-[1fr,2fr,1fr] place-items-center items-center">
          {gameLive && <>{gameLive}</>}
          {gameLabel && <>{gameLabel}</>}
          {gameScore && <>{gameScore}</>}
          {gameTimer && <>{gameTimer}</>}
        </div>
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

const GameLiveType = (<GameLive gameStatus={'BEFORE'} />).type;
function getGameLive(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    child => isValidElement(child) && child.type === GameLiveType,
  );
}
