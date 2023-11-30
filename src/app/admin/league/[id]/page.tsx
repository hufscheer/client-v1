'use client';

import { Suspense } from 'react';

import LeagueDetail from '@/components/admin/league/detail';
import LeagueRegisterFetcher from '@/queries/admin/league/useLeagueRegister/Fetcher';
import useSportsListByLeagueId from '@/queries/useSportsListByLeagueId/query';

export default function Page({ params }: { params: { id: string } }) {
  const { id: leagueId } = params;
  const { sportsList: leagueSportsData } = useSportsListByLeagueId(leagueId);
  return (
    <Suspense fallback={<div>리그 정보 로딩중...</div>}>
      <LeagueRegisterFetcher>
        {data => (
          <LeagueDetail
            data={{ ...data, leagueSportsData }}
            leagueId={Number(leagueId)}
          />
        )}
      </LeagueRegisterFetcher>
    </Suspense>
  );
}
