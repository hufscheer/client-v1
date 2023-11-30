import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteLeagueByIdWithAuth } from '@/api/admin/league';
import { ADMIN_MUTATION_KEY } from '@/constants/admin/mutationKey';
import { ADMIN_QUERY_KEY } from '@/constants/admin/queryKey';

export default function useDeleteLeagueMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [ADMIN_MUTATION_KEY.DELETE_LEAGUE],
    mutationFn: deleteLeagueByIdWithAuth,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ADMIN_QUERY_KEY.LEAGUE_LIST],
      });
    },
  });
}
