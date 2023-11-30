import { useSuspenseQueries, useSuspenseQuery } from '@tanstack/react-query';

import {
  getAllLeaguesWithAuth,
  getSportsCategoriesWithAuth,
} from '@/api/admin/league';
import { ADMIN_QUERY_KEY } from '@/constants/admin/queryKey';

export default function useSportsList() {
  const { data, error } = useSuspenseQuery({
    queryKey: [ADMIN_QUERY_KEY.SPORTS_LIST],
    queryFn: () => getSportsCategoriesWithAuth(),
  });

  return {
    data,
    error,
  };
}

export function useLeagueRegisterData() {
  // leagueRegisterFetcher에서 각 쿼리의 data를 지명해서 변수로 쓰고 싶은데, 아래와 같이 작성하면 array 데이터로 묶여서 사용하기 불편해짐
  // TODO: 복수 쿼리들의 결과값을 1:1 네이밍해 내보낼 수 있는 방법 찾기
  return useSuspenseQueries({
    queries: [
      {
        queryKey: [ADMIN_QUERY_KEY.LEAGUE_LIST],
        queryFn: getAllLeaguesWithAuth,
      },
      {
        queryKey: [ADMIN_QUERY_KEY.SPORTS_LIST],
        queryFn: getSportsCategoriesWithAuth,
      },
    ],
    combine: results => {
      return {
        data: results.map(result => result.data),
        error: results.some(result => result.error),
      };
    },
  });
}
