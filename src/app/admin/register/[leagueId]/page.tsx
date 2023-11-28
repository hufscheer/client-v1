'use client';

import { Suspense } from 'react';

import RegisterLeague from '@/components/admin/register/League';
import LeagueRegisterFetcher from '@/queries/admin/useLeagueRegister/Fetcher';
import useSportsListByLeagueId from '@/queries/useSportsListByLeagueId/query';

export default function EditLeague({
  params,
}: {
  params: { leagueId: string };
}) {
  const { leagueId } = params;
  const { sportsList: leagueSportsData } = useSportsListByLeagueId(leagueId);
  return (
    <div className="space-y-8 py-8">
      <Suspense fallback={<div>리그 정보 로딩중...</div>}>
        <LeagueRegisterFetcher>
          {data => (
            <RegisterLeague
              data={{ ...data, leagueSportsData }}
              leagueId={Number(leagueId)}
            />
          )}
        </LeagueRegisterFetcher>
      </Suspense>
    </div>
  );
}
