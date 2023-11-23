import { useSuspenseQuery } from '@tanstack/react-query';

import { getMatchCheerById } from '@/api/match';

export const useMatchCheerById = (matchId: string) => {
  const { data, error } = useSuspenseQuery({
    queryKey: ['match-cheer', matchId],
    queryFn: () => getMatchCheerById(matchId),
  });

  return {
    cheers: data,
    error,
  };
};
