import Link from 'next/link';
import { Children, ReactNode, isValidElement } from 'react';
import GameStatus from './GameStatus';
import GameLabel from './GameLabel';
import GameLogo from './GameLogo';
import GameTimer from './GameTimer';

interface GameMainProps {
  children?: ReactNode;
}

export default function GameMain({ children }: GameMainProps) {
  const gameStatus = getGameStatus(children);
  const gameTimer = getGameTimer(children);
  const gameLabel = getGameLabel(children);
  const [firstLogo, secondLogo] = getGameLogo(children);

  return (
    <li>
      <Link
        href={`${'id'}`}
        className='flex flex-col gap-1 justify-center p-2 rounded-lg shadow-md '
      >
        {gameLabel && <>{gameLabel}</>}
        <div className='flex justify-between items-center'>
          {firstLogo && <>{firstLogo}</>}
          <>{gameStatus ? gameStatus : gameTimer}</>
          {secondLogo && <>{secondLogo}</>}
        </div>
      </Link>
    </li>
  );
}

// ! 중복된 코드가 반복되어서, 재사용 가능할 것 같음
const GameStatusType = (<GameStatus firstTeamScore={0} secondTeamScore={0} />)
  .type;
function getGameStatus(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === GameStatusType
  );
}

const GameTimerType = (<GameTimer date={new Date()} />).type;
function getGameTimer(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === GameTimerType
  );
}

const GameLogoType = (<GameLogo src={''} alt={''} direction={'row'} />).type;
function getGameLogo(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === GameLogoType
  );
}

const GameLabelType = (<GameLabel />).type;
function getGameLabel(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === GameLabelType
  );
}

export const Game = Object.assign(GameMain, {
  Label: GameLabel,
  Status: GameStatus,
  Logo: GameLogo,
  Timer: GameTimer,
});
