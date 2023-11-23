import { ReactNode } from 'react';

import { useMatchTimelineById } from './query';

type MatchRecordsType = {
  scoredAt: number;
  playerName: string;
  teamName: string;
  score: number;
};

type MatchTimelineType = {
  gameQuater: string;
  records: MatchRecordsType[];
};

type MatchTimelineFetcherProps = {
  matchId: string;
  children: (data: MatchTimelineType[]) => ReactNode;
};

const DUMMY = [
  {
    gameQuater: '후반전',
    records: [
      {
        scoredAt: 26,
        playerName: '진승희',
        teamName: '팀 A',
        score: 1,
      },
      {
        scoredAt: 25,
        playerName: '이동규',
        teamName: '팀 B',
        score: 1,
      },
    ],
  },
  {
    gameQuater: '전반전',
    records: [
      {
        scoredAt: 26,
        playerName: '진승희',
        teamName: '팀 A',
        score: 1,
      },
      {
        scoredAt: 25,
        playerName: '이동규',
        teamName: '팀 B',
        score: 1,
      },
    ],
  },
];

export default function MatchTimelineFetcher({
  matchId,
  children,
}: MatchTimelineFetcherProps) {
  const { timeline, error } = useMatchTimelineById(matchId);

  if (error) throw error;

  return children(timeline.length === 0 ? DUMMY : timeline);
}
