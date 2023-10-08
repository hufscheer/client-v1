import Link from 'next/link';
import { Children, ReactNode, isValidElement } from 'react';
import GameScore from './GameScore';
import GameLabel from './GameLabel';
import GameTimer from './GameTimer';
import GameTeam from './GameTeam';
import GameInform from './GameStatus';
import GameStatus from './GameStatus';

interface GameMainProps {
  id: number;
  children?: ReactNode;
}

export default function GameMain({ id, children }: GameMainProps) {
  const gameStatus = getGameStatus(children);
  const gameLabel = getGameLabel(children);
  const [firstTeam, secondTeam] = getGameTeam(children);

  return (
    <li>
      <Link
        href={`/detail/${id}`}
        className='flex flex-col gap-1 justify-center p-2 rounded-lg shadow-md '
      >
        {gameLabel && <>{gameLabel}</>}
        <div className='flex justify-between items-center'>
          {firstTeam && <>{firstTeam}</>}
          {gameStatus && <>{gameStatus}</>}
          {secondTeam && <>{secondTeam}</>}
        </div>
      </Link>
    </li>
  );
}

// ! 중복된 코드가 반복되어서, 재사용 가능할 것 같음
const GameStatusType = (<GameStatus />).type;
function getGameStatus(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === GameStatusType
  );
}

const GameTeamType = (<GameTeam />).type;
function getGameTeam(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === GameTeamType
  );
}

const GameLabelType = (<GameLabel />).type;
function getGameLabel(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === GameLabelType
  );
}
