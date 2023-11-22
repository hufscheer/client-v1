import { ReactNode } from 'react';

import { GameDetailType } from '@/types/game';

import useMatchById from './query';

type MatchByIdFetcherProps = {
  matchId: string;
  children: (data: GameDetailType) => ReactNode;
};

export default function MatchByIdFetcher({
  matchId,
  children,
}: MatchByIdFetcherProps) {
  const { matchDetail, error } = useMatchById(matchId);

  if (error) throw error;

  return children(matchDetail);
}
