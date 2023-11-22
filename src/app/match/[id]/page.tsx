'use client';

// import Link from 'next/link';

import { Suspense } from 'react';

import MatchBanner from '@/components/match/Banner';
import Cheer from '@/components/match/Cheer';
// import CommentList from '@/components/detail/CommentList';
// import GameInfo from '@/components/detail/GameInfo';
// import GameTimeline from '@/components/detail/GameTimeline';
import MatchByIdFetcher from '@/queries/useMatchById/Fetcher';
import MatchCheerByIdFetcher from '@/queries/useMatchCheerById/Fetcher';

export default function DetailPage({ params }: { params: { id: string } }) {
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
    </section>
  );
}
