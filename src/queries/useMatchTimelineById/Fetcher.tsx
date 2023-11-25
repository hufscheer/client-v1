import { ReactNode } from 'react';

import { useMatchTimelineById } from './query';

type MatchRecordsType = {
  scoredAt: number;
  playerName: string;
  teamName: string;
  score: number;
};

type MatchTimelineType = {
  gameQuarter: string;
  records: MatchRecordsType[];
};

type MatchTimelineFetcherProps = {
  matchId: string;
  children: (data: MatchTimelineType[]) => ReactNode;
};

export default function MatchTimelineFetcher({
  matchId,
  children,
}: MatchTimelineFetcherProps) {
  const { timeline, error } = useMatchTimelineById(matchId);

  if (error) throw error;

  return children(timeline);
}
