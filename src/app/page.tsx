'use client';

import { Suspense } from 'react';

import SportsList from '@/components/league/SportsList';
import useQueryParams from '@/hooks/useQueryParams';
import SportsListFetcher from '@/queries/useSportsListByLeagueId/Fetcher';

export default function Home() {
  const { appendToParams, setInParams } = useQueryParams();

  return (
    <section className="flex flex-col items-center">
      <Suspense>
        <SportsListFetcher leagueId="1">
          {data => <SportsList sportsList={data} onClick={appendToParams} />}
        </SportsListFetcher>
      </Suspense>

      <div className="mb-8 flex w-fit items-center gap-5 rounded-xl bg-gray-2 text-center">
        <button
          onClick={() => setInParams('status', 'finished')}
          className="text-gary-5 rounded-xl px-5 py-3"
        >
          종료
        </button>
        <button
          onClick={() => setInParams('status', 'playing')}
          className="text-gary-5 rounded-xl px-5 py-3"
        >
          진행 중
        </button>
        <button
          onClick={() => setInParams('status', 'scheduled')}
          className="text-gary-5 rounded-xl px-5 py-3"
        >
          예정
        </button>
      </div>

      {/* <div className="flex flex-col gap-8">
        <Suspense fallback={<div>MatchList 로딩중...</div>}>
          <MatchListFetcher {...params} leagueId={1} size={10} cursor={1}>
            {data => <MatchList matchList={data} />}
          </MatchListFetcher>
        </Suspense>
      </div> */}
    </section>
  );
}
