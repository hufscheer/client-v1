'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { getAllLeagues, LeagueType } from '@/api/league';

type SidebarProps = {
  onClickChange: () => void;
};

export default function Sidebar({ onClickChange }: SidebarProps) {
  const [menuContent, setMenuContent] = useState<LeagueType[]>([
    { name: '전체' },
  ]);

  useEffect(() => {
    const getLeagueData = async () => {
      const res = await getAllLeagues();

      if (typeof res === 'number') return;

      setMenuContent(prev => [...prev, ...res]);
    };

    getLeagueData();
  }, []);

  return (
    <div>
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClickChange}
        aria-hidden="true"
      />
      <aside className="fixed right-0 top-0 z-40 h-screen w-64 bg-gray-1 p-5 py-8">
        <ul className="overflow-y-auto text-gray-5">
          <div className="my-2 text-xl font-semibold">대회 목록</div>
          {menuContent.map(content => (
            <Link
              href={{ pathname: '/', query: { leagueId: content.leagueId } }}
              onClick={onClickChange}
              key={content.name}
              className="flex items-center rounded-lg p-2 hover:bg-gray-2 dark:text-white dark:hover:bg-gray-5"
            >
              {content.name}
            </Link>
          ))}
        </ul>
      </aside>
    </div>
  );
}
