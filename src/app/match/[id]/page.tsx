'use client';

// import Link from 'next/link';

import { Suspense } from 'react';

import MatchBanner from '@/components/match/Banner';
// import CommentList from '@/components/detail/CommentList';
// import GameInfo from '@/components/detail/GameInfo';
// import GameTimeline from '@/components/detail/GameTimeline';
import MatchByIdFetcher from '@/queries/useMatchById/Fetcher';

export default function DetailPage({ params }: { params: { id: string } }) {
  return (
    <section>
      <Suspense fallback={<div>배너 로딩 중...</div>}>
        <MatchByIdFetcher matchId={params.id}>
          {data => <MatchBanner {...data} />}
        </MatchByIdFetcher>
      </Suspense>
    </section>
  );
}
