import { useSuspenseQuery } from '@tanstack/react-query';

import { getAllLeaguesWithAuth } from '@/api/admin/league';
import { ADMIN_QUERY_KEY } from '@/constants/admin/queryKey';

export default function useLeagueList() {
  const { data, error } = useSuspenseQuery({
    queryKey: [ADMIN_QUERY_KEY.LEAGUE_LIST],
    queryFn: () => getAllLeaguesWithAuth(),
  });

  return {
    data,
    error,
  };
}
