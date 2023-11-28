'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { getAllLeagues } from '@/api/league';
import { LeagueType } from '@/types/league';

type SidebarProps = {
  isSidebarOpen: boolean;
  onClickSidebar: () => void;
};
export default function Sidebar({
  isSidebarOpen,
  onClickSidebar,
}: SidebarProps) {
  const [menuContent, setMenuContent] = useState<LeagueType[]>([
    { name: '전체', leagueId: 0 },
  ]);

  useEffect(() => {
    const getLeagueData = async () => {
      const res = await getAllLeagues();

      setMenuContent(prev => [...prev, ...res]);
    };

    getLeagueData();
  }, []);

  return (
    isSidebarOpen && (
      <aside>
        <div
          data-state={isSidebarOpen}
          className="absolute inset-0 z-40 h-screen bg-black/50 data-[state=false]:animate-[dialog-overlay-hide_100ms] data-[state=true]:animate-[dialog-overlay-show_100ms]"
          onClick={onClickSidebar}
          aria-hidden="true"
        />
        <div
          data-state={isSidebarOpen}
          className="absolute right-0 top-0 z-40 h-screen w-64 bg-gray-1 p-5 py-8 text-gray-5 data-[state=false]:animate-[menu-content-hide_100ms] data-[state=true]:animate-[menu-content-show_100ms]"
        >
          <div className="my-2 text-xl font-semibold">대회 목록</div>
          <ul className="overflow-y-auto ">
            {menuContent.map(content => (
              <li
                key={content.leagueId}
                onClick={onClickSidebar}
                aria-hidden="true"
              >
                <Link
                  href={{
                    pathname: '/',
                    query: { leagueId: content.leagueId },
                  }}
                  className="flex items-center rounded-lg p-2 hover:bg-gray-2 dark:text-white dark:hover:bg-gray-5"
                >
                  {content.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    )
  );
}
