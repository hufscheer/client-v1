import { useMutation, useQueryClient } from '@tanstack/react-query';

import { putLeagueWithAuth } from '@/api/admin/league';
import { ADMIN_MUTATION_KEY } from '@/constants/admin/mutationKey';
import { ADMIN_QUERY_KEY } from '@/constants/admin/queryKey';

export default function usePutLeagueMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [ADMIN_MUTATION_KEY.PUT_LEAGUE],
    mutationFn: putLeagueWithAuth,
    onSuccess: leagueId => {
      queryClient.invalidateQueries({
        queryKey: [ADMIN_QUERY_KEY.LEAGUE_LIST],
      });
      queryClient.invalidateQueries({
        queryKey: [ADMIN_QUERY_KEY.LEAGUE_SPORTS, leagueId],
      });
    },
  });
}
