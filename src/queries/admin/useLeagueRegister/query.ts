import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

import {
  getSportsCategoriesWithAuth,
  postNewLeagueWithAuth,
  putLeagueWithAuth,
} from '@/api/admin/league';
import { useLeagueIdContext } from '@/hooks/useLeagueIdContext';

export const QUERY_KEY = {
  LEAGUE_LIST: 'league-list',
  LEAGUE_SPORTS: 'league-sports',
  SPORTS_LIST: 'sports-list',
};

export function useSportsList() {
  const { data: sportsListData, error: sportsListError } = useSuspenseQuery({
    queryKey: [QUERY_KEY.SPORTS_LIST],
    queryFn: () => getSportsCategoriesWithAuth(),
  });

  return {
    sportsListData,
    sportsListError,
  };
}

export function usePostLeagueMutation() {
  const queryClient = useQueryClient();
  const { setLeagueId } = useLeagueIdContext();

  return useMutation({
    mutationKey: ['post-new-league'],
    mutationFn: postNewLeagueWithAuth,
    onSuccess: data => {
      const { leagueId } = data;
      setLeagueId(leagueId.toString());
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.LEAGUE_LIST] });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.LEAGUE_SPORTS, leagueId],
      });
    },
  });
}

export function usePutLeagueMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['put-league'],
    mutationFn: putLeagueWithAuth,
    onSuccess: leagueId => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.LEAGUE_LIST] });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.LEAGUE_SPORTS, leagueId],
      });
    },
  });
}
