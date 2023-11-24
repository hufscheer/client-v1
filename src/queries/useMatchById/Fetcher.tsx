import { ReactNode } from 'react';

import { MatchDetailType } from '@/types/match';

import useMatchById from './query';

type MatchByIdFetcherProps = {
  matchId: string;
  children: (data: MatchDetailType) => ReactNode;
};

export default function MatchByIdFetcher({
  matchId,
  children,
}: MatchByIdFetcherProps) {
  const { matchDetail, error } = useMatchById(matchId);

  if (error) throw error;

  return children(matchDetail);
}
