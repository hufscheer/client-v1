'use client';

// import Link from 'next/link';

import { Suspense } from 'react';

import MatchBanner from '@/components/match/Banner';
import Cheer from '@/components/match/Cheer';
import Panel from '@/components/match/Panel';
import RecordList from '@/components/match/RecordList';
import MatchByIdFetcher from '@/queries/useMatchById/Fetcher';
import MatchCheerByIdFetcher from '@/queries/useMatchCheerById/Fetcher';
import MatchTimelineFetcher from '@/queries/useMatchTimelineById/Fetcher';

export default function Match({ params }: { params: { id: string } }) {
  const switchCase = {
    라인업: <div>라인업</div>,
    응원댓글: <div>응원댓글</div>,
    경기영상: <div>경기영상</div>,
    타임라인: (
      <Suspense fallback={<div>타임라인 로딩 중..</div>}>
        <MatchTimelineFetcher matchId={params.id}>
          {([firstHalf, secondHalf]) => (
            <div className="overflow-y-auto p-5">
              <RecordList {...firstHalf} />
              <RecordList {...secondHalf} />
            </div>
          )}
        </MatchTimelineFetcher>
      </Suspense>
    ),
  };

  return (
    <section>
      <Suspense fallback={<div>배너 로딩 중...</div>}>
        <MatchByIdFetcher matchId={params.id}>
          {data => <MatchBanner {...data} />}
        </MatchByIdFetcher>
      </Suspense>
      <Suspense fallback={<div>응원 로딩 중...</div>}>
        <MatchCheerByIdFetcher matchId={params.id}>
          {data => <Cheer cheers={data} />}
        </MatchCheerByIdFetcher>
      </Suspense>
      <Panel switchCase={switchCase} />
    </section>
  );
}
