'use client';

import { Suspense } from 'react';

import SportsList from '@/components/league/SportsList';
import MatchList from '@/components/match/MatchList';
import { QUERY_PARAMS } from '@/constants/queryParams';
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
        <SportsListFetcher leagueId={params.get(QUERY_PARAMS.league) || '1'}>
          {data => (
            <SportsList
              selectedId={paramsObj[QUERY_PARAMS.sports] as string[]}
              sportsList={data}
              onClick={appendToParams}
            />
          )}
        </SportsListFetcher>
      </Suspense>

      <div className="mb-8 flex w-fit items-center gap-5 rounded-xl bg-gray-2 text-center">
        <button
          onClick={() => setInParams(QUERY_PARAMS.status, 'finished')}
          className={$(
            'text-gary-5 rounded-xl px-5 py-3',
            params.get(QUERY_PARAMS.status) === 'finished' &&
              'bg-primary text-white',
          )}
        >
          종료
        </button>
        <button
          onClick={() => setInParams(QUERY_PARAMS.status, 'playing')}
          className={$(
            'text-gary-5 rounded-xl px-5 py-3',
            (params.get(QUERY_PARAMS.status) === 'playing' || null) &&
              'bg-primary text-white',
          )}
        >
          진행 중
        </button>
        <button
          onClick={() => setInParams(QUERY_PARAMS.status, 'scheduled')}
          className={$(
            'text-gary-5 rounded-xl px-5 py-3',
            params.get(QUERY_PARAMS.status) === 'scheduled' &&
              'bg-primary text-white',
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
