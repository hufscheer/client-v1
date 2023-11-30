import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postNewLeagueWithAuth } from '@/api/admin/league';
import { ADMIN_MUTATION_KEY } from '@/constants/admin/mutationKey';
import { ADMIN_QUERY_KEY } from '@/constants/admin/queryKey';
import { useLeagueIdContext } from '@/hooks/useLeagueIdContext';

export default function usePostNewLeagueMutation() {
  const queryClient = useQueryClient();
  const { setLeagueId } = useLeagueIdContext();

  return useMutation({
    mutationKey: [ADMIN_MUTATION_KEY.POST_NEW_LEAGUE],
    mutationFn: postNewLeagueWithAuth,
    onSuccess: data => {
      const { leagueId } = data;
      setLeagueId(leagueId.toString());
      queryClient.invalidateQueries({
        queryKey: [ADMIN_QUERY_KEY.LEAGUE_LIST],
      });
      queryClient.invalidateQueries({
        queryKey: [ADMIN_QUERY_KEY.LEAGUE_SPORTS, leagueId],
      });
    },
  });
}
