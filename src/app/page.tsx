'use client';

import { Suspense } from 'react';

import MatchList from '@/components/match/MatchList';
import MatchListFetcher from '@/queries/useMatchList/Fetcher';

export default function Home() {
  return (
    <main className="flex w-full flex-col gap-3">
      <p className="my-2 text-center text-xl font-bold">매치</p>
      <div className="flex flex-col gap-8">
        <Suspense fallback={<div>MatchList 로딩중...</div>}>
          {/* // TODO sportsId, leagueId, status 상태를 동적 주입 */}
          <MatchListFetcher sportsId={1} leagueId={1} status="playing">
            {data => <MatchList matchList={data} />}
          </MatchListFetcher>
        </Suspense>
      </div>
    </main>
  );
}
