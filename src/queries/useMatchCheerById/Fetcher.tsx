import { ReactNode } from 'react';

import { useMatchCheerById } from './query';
import { MatchCheerType } from './type';

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
