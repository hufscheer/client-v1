import { ReactNode } from 'react';

import { MatchCheerType } from '@/types/match';

import { useMatchCheerById } from './query';

type MatchCheerByIdFetcherProps = {
  matchId: string;
  children: (data: MatchCheerType[]) => ReactNode;
};

export default function MatchCheerByIdFetcher({
  matchId,
  children,
}: MatchCheerByIdFetcherProps) {
  const { cheers, error } = useMatchCheerById(matchId);

  if (error) throw error;

  return children(cheers);
}
