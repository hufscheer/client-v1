'use client';

import Link from 'next/link';
import { Suspense } from 'react';

import LeagueList from '@/components/admin/league/LeagueList';
import Button from '@/components/common/Button';
import LeagueListFetcher from '@/queries/admin/useLeagueList/Fetcher';

export default function LeaguePage() {
  return (
    <div className="space-y-8 py-8">
      <div className="text-2xl font-medium">전체 리그</div>
      <Suspense fallback={<div>리그 로딩중...</div>}>
        <LeagueListFetcher>
          {data => <LeagueList data={data} />}
        </LeagueListFetcher>
      </Suspense>
      <Button className="w-full rounded-lg bg-primary p-3 text-white hover:bg-[#303ECE]">
        <Link href="/admin/register" className="w-full">
          새 리그 등록
        </Link>
      </Button>
    </div>
  );
}
