import { useSuspenseQuery } from '@tanstack/react-query';

import { getMatchCheerById } from './api';

export const useMatchCheerById = (matchId: string) => {
  const { data, isLoading, error } = useSuspenseQuery({
    queryKey: ['match-cheer', matchId],
    queryFn: () => getMatchCheerById(matchId),
  });

  return {
    cheers: data,
    isLoading,
    error,
  };
};
