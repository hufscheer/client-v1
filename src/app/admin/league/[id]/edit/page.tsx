'use client';

import { Suspense } from 'react';

import EditLeague from '@/components/admin/register/League/edit';
import LeagueRegisterFetcher from '@/queries/admin/league/useLeagueRegister/Fetcher';
import useSportsListByLeagueId from '@/queries/useSportsListByLeagueId/query';

export default function Page({ params }: { params: { leagueId: string } }) {
  const { leagueId } = params;
  const { sportsList: leagueSportsData } = useSportsListByLeagueId(leagueId);
  return (
    <div className="space-y-8">
      <Suspense fallback={<div>리그 정보 로딩중...</div>}>
        <LeagueRegisterFetcher>
          {data => (
            <EditLeague
              data={{ ...data, leagueSportsData }}
              leagueId={Number(leagueId)}
            />
          )}
        </LeagueRegisterFetcher>
      </Suspense>
    </div>
  );
}
