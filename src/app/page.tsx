'use client';

import AsyncBoundary from '@/components/common/AsyncBoundary';
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
      <AsyncBoundary
        errorFallback={() => <div>에러</div>}
        loadingFallback={<SportsList.Skeleton />}
      >
        <SportsListFetcher leagueId={params.get(QUERY_PARAMS.league) || '1'}>
          {data => (
            <SportsList
              selectedId={paramsObj[QUERY_PARAMS.sports] as string[]}
              sportsList={data}
              onClick={appendToParams}
            />
          )}
        </SportsListFetcher>
      </AsyncBoundary>

      <div className="mb-8 flex w-fit items-center gap-5 rounded-xl bg-gray-2 text-center">
        <button
          onClick={() => setInParams(QUERY_PARAMS.status, 'finished')}
          className={$(
            'rounded-xl px-5 py-3 text-gray-5',
            params.get(QUERY_PARAMS.status) === 'finished' &&
              'bg-primary text-white',
          )}
        >
          종료
        </button>
        <button
          onClick={() => setInParams(QUERY_PARAMS.status, 'playing')}
          className={$(
            'rounded-xl px-5 py-3 text-gray-5',
            (params.get(QUERY_PARAMS.status) === 'playing' ||
              params.get(QUERY_PARAMS.status) === null) &&
              'bg-primary text-white',
          )}
        >
          진행 중
        </button>
        <button
          onClick={() => setInParams(QUERY_PARAMS.status, 'scheduled')}
          className={$(
            'rounded-xl px-5 py-3 text-gray-5',
            params.get(QUERY_PARAMS.status) === 'scheduled' &&
              'bg-primary text-white',
          )}
        >
          예정
        </button>
      </div>

      <AsyncBoundary
        errorFallback={props => <MatchList.ErrorFallback {...props} />}
        loadingFallback={<MatchList.Skeleton />}
      >
        <MatchListFetcher {...paramsObj}>
          {({ matchList, ...props }) => (
            <div className="flex w-full flex-col gap-8">
              <MatchList matchList={matchList.pages.flat()} {...props} />
            </div>
          )}
        </MatchListFetcher>
      </AsyncBoundary>
    </section>
  );
}
