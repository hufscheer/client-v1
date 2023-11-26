import { ReactNode } from 'react';

import { MatchVideoType } from '@/types/match';

import { useMatchVideoById } from './query';

type MatchVideoFetcherProps = {
  matchId: string;
  children: (data: MatchVideoType) => ReactNode;
};

export default function MatchVideoFetcher({
  matchId,
  children,
}: MatchVideoFetcherProps) {
  const { videoId, error } = useMatchVideoById(matchId);

  if (error) throw error;

  return children(videoId);
}
