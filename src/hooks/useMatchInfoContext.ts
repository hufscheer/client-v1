import { useContext } from 'react';

import { MatchContext } from '@/components/common/MatchInfo/pieces/Wrapper';
import { MatchDetailType } from '@/types/match';

type MatchInfoContextType = () => MatchDetailType;

export const useMatchInfoContext: MatchInfoContextType = () => {
  const matchContext = useContext(MatchContext);

  if (!matchContext) throw new Error('Context가 비었습니다.');

  return matchContext;
};
