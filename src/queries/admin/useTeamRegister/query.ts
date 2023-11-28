import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

import {
  getTeamListByLeagueIdWithAuth,
  postTeamByLeagueIdWithAuth,
} from '@/api/admin/team';

const QUERY_KEY = {
  TEAM_LIST: 'team-list',
};

export function useTeamListByLeagueId(leagueId: string) {
  const { data, error } = useSuspenseQuery({
    queryKey: [QUERY_KEY.TEAM_LIST, leagueId],
    queryFn: () => getTeamListByLeagueIdWithAuth(leagueId),
  });

  return {
    teamList: data,
    error,
  };
}

export function usePostTeamMutation(leagueId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['post-team'],
    mutationFn: postTeamByLeagueIdWithAuth,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.TEAM_LIST, leagueId],
      });
    },
  });
}
