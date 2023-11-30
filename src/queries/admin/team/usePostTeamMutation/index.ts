import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postTeamByLeagueIdWithAuth } from '@/api/admin/team';
import { ADMIN_MUTATION_KEY } from '@/constants/admin/mutationKey';
import { ADMIN_QUERY_KEY } from '@/constants/admin/queryKey';

export default function usePostTeamMutation(leagueId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [ADMIN_MUTATION_KEY.POST_TEAM],
    mutationFn: postTeamByLeagueIdWithAuth,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ADMIN_QUERY_KEY.TEAM_LIST, leagueId],
      });
    },
  });
}
