import { ReactNode } from 'react';

import { MatchListParams } from '@/api/match';
import { MatchListType } from '@/types/match';

import { useMatchList } from './query';

const DUMMY: MatchListType[] = [
  {
    gameId: 1,
    startTime: '2023-11-07 23:00',
    gameQuarter: '전반',
    gameName: '4강',
    sportsName: '축구',
    gameTeams: [
      {
        gameTeamId: 1,
        logoImageUrl:
          'https://hufscheer-server.s3.ap-northeast-2.amazonaws.com/먹거리대회/팬돌이.png',
        gameTeamName: '팬돌이',
        score: 7,
      },
      {
        gameTeamId: 3,
        logoImageUrl:
          'https://hufscheer-server.s3.ap-northeast-2.amazonaws.com/먹거리대회/요구르트.png',
        gameTeamName: '요구르트',
        score: 7,
      },
    ],
  },
  {
    gameId: 2,
    startTime: '2023-11-07 23:00',
    gameQuarter: '전반',
    gameName: '4강',
    sportsName: '축구',
    gameTeams: [
      {
        gameTeamId: 1,
        logoImageUrl:
          'https://hufscheer-server.s3.ap-northeast-2.amazonaws.com/먹거리대회/팬돌이.png',
        gameTeamName: '팬돌이',
        score: 7,
      },
      {
        gameTeamId: 3,
        logoImageUrl:
          'https://hufscheer-server.s3.ap-northeast-2.amazonaws.com/먹거리대회/요구르트.png',
        gameTeamName: '요구르트',
        score: 7,
      },
    ],
  },
];

interface MatchListFetcherProps extends MatchListParams {
  children: (data: MatchListType[]) => ReactNode;
}

export default function MatchListFetcher({
  children,
  ...props
}: MatchListFetcherProps) {
  const { error } = useMatchList(props);

  if (error) throw error;

  return children(DUMMY);
}
