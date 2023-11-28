'use client';

import { Suspense } from 'react';

import SportsList from '@/components/league/SportsList';
import MatchList from '@/components/match/MatchList';
import useQueryParams from '@/hooks/useQueryParams';
import MatchListFetcher from '@/queries/useMatchList/Fetcher';
import SportsListFetcher from '@/queries/useSportsListByLeagueId/Fetcher';
import { MatchStatus } from '@/types/match';
import { $ } from '@/utils/core';

export default function Home() {
  const { params, repeatIterator, appendToParams, setInParams } =
    useQueryParams();

  const paramsObj = repeatIterator(
    {} as { status: MatchStatus },
    params.entries(),
  );

  return (
    <section className="flex flex-col items-center">
      <Suspense>
        <SportsListFetcher leagueId={params.get('leagueId') || '1'}>
          {data => (
            <SportsList
              selectedId={paramsObj['sportsId'] as string[]}
              sportsList={data}
              onClick={appendToParams}
            />
          )}
        </SportsListFetcher>
      </Suspense>

      <div className="mb-8 flex w-fit items-center gap-5 rounded-xl bg-gray-2 text-center">
        <button
          onClick={() => setInParams('status', 'finished')}
          className={$(
            'text-gary-5 rounded-xl px-5 py-3',
            params.get('status') === 'finished' && 'bg-primary text-white',
          )}
        >
          종료
        </button>
        <button
          onClick={() => setInParams('status', 'playing')}
          className={$(
            'text-gary-5 rounded-xl px-5 py-3',
            params.get('status') === 'playing' && 'bg-primary text-white',
          )}
        >
          진행 중
        </button>
        <button
          onClick={() => setInParams('status', 'scheduled')}
          className={$(
            'text-gary-5 rounded-xl px-5 py-3',
            params.get('status') === 'scheduled' && 'bg-primary text-white',
          )}
        >
          예정
        </button>
      </div>

      <div className="flex flex-col gap-8">
        <Suspense fallback={<div>MatchList 로딩중...</div>}>
          <MatchListFetcher {...paramsObj}>
            {({ matchList, ...props }) => (
              <MatchList matchList={matchList.pages.flat()} {...props} />
            )}
          </MatchListFetcher>
        </Suspense>
      </div>
    </section>
  );
}
