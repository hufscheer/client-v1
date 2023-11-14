import { GAME_STATUS } from '@/constants/gameStatus';
import { useGameContext } from '@/hooks/useGameContext';
import { $ } from '@/utils/core';

type StatusProps = {
  className?: string;
};

export default function Status({ className }: StatusProps) {
  const { gameStatus } = useGameContext();

  return <div className={$(className)}>{GAME_STATUS[gameStatus]}</div>;
}
