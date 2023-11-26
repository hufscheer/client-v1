import { ReactNode } from 'react';

import { SportsType } from '@/types/league';

import useSportsListByLeagueId from './query';

type SportsListFetcherProps = {
  leagueId: string;
  children: (data: SportsType[]) => ReactNode;
};

const DUMMY = [
  {
    sportId: 1,
    name: '축구',
  },
  {
    sportId: 3,
    name: '농구',
  },
  {
    sportId: 2,
    name: '롤',
  },
];

export default function SportsListFetcher({
  leagueId,
  children,
}: SportsListFetcherProps) {
  const { error } = useSportsListByLeagueId(leagueId);

  if (error) throw error;

  return children(DUMMY);
}
