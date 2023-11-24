'use client';

import { Suspense } from 'react';

import MatchBanner from '@/components/match/Banner';
import Cheer from '@/components/match/Cheer';
import Lineup from '@/components/match/LineupList';
import Panel from '@/components/match/Panel';
import RecordList from '@/components/match/RecordList';
import MatchByIdFetcher from '@/queries/useMatchById/Fetcher';
import MatchCheerByIdFetcher from '@/queries/useMatchCheerById/Fetcher';
import MatchLineupFetcher from '@/queries/useMatchLineupById/Fetcher';
import MatchTimelineFetcher from '@/queries/useMatchTimelineById/Fetcher';

export default function Match({ params }: { params: { id: string } }) {
  const options = [
    { label: '라인업' },
    { label: '응원댓글' },
    { label: '경기영상' },
    { label: '타임라인' },
  ];

  return (
    <section>
      <Suspense fallback={<div>배너 로딩중...</div>}>
        <MatchByIdFetcher matchId={params.id}>
          {data => <MatchBanner {...data} />}
        </MatchByIdFetcher>
      </Suspense>
      <Suspense fallback={<div>응원 로딩중...</div>}>
        <MatchCheerByIdFetcher matchId={params.id}>
          {data => <Cheer cheers={data} />}
        </MatchCheerByIdFetcher>
      </Suspense>

      <Panel options={options} defaultValue="라인업">
        {({ selected }) => (
          <Suspense fallback={<div>로딩중...</div>}>
            {selected === '라인업' && (
              <MatchLineupFetcher matchId={params.id}>
                {([firstTeam, secondTeam]) => (
                  <div className="grid grid-cols-2 py-5 [&>*:first-child>ul]:before:absolute [&>*:first-child>ul]:before:right-0 [&>*:first-child>ul]:before:h-full [&>*:first-child>ul]:before:border-l-2 [&>*:first-child>ul]:before:bg-gray-2">
                    <Lineup {...firstTeam} />
                    <Lineup {...secondTeam} />
                  </div>
                )}
              </MatchLineupFetcher>
            )}
            {selected === '타임라인' && (
              <MatchTimelineFetcher matchId={params.id}>
                {([firstHalf, secondHalf]) => (
                  <div className="overflow-y-auto p-5">
                    <RecordList {...firstHalf} />
                    <RecordList {...secondHalf} />
                  </div>
                )}
              </MatchTimelineFetcher>
            )}
          </Suspense>
        )}
      </Panel>
    </section>
  );
}
