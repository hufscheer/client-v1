import { useContext } from 'react';

import { GameContext } from '@/components/common/Game/GameWrapper';
import { GameDetailType } from '@/types/game';

type GameContextType = () => GameDetailType;

export const useGameContext: GameContextType = () => {
  const gameContext = useContext(GameContext);

  if (!gameContext) throw new Error('Context가 비었습니다.');

  return gameContext;
};
