import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

import {
  deleteLeagueByIdWithAuth,
  getAllLeaguesWithAuth,
} from '@/api/admin/league';

export const QUERY_KEY = {
  LEAGUE_LIST: 'league-list',
};

export function useLeagueList() {
  const { data, error } = useSuspenseQuery({
    queryKey: [QUERY_KEY.LEAGUE_LIST],
    queryFn: () => getAllLeaguesWithAuth(),
  });

  return {
    data,
    error,
  };
}

export function useDeleteLeagueMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteLeagueByIdWithAuth,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.LEAGUE_LIST],
      });
    },
  });
}
