'use client';

import { useSelectedLayoutSegments } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Icon } from '@/components/common/Icon';
import Sidebar from '@/components/common/Sidebar';
import { $ } from '@/utils/core';

export default function Header() {
  const segments = useSelectedLayoutSegments();
  const titleContent = segments.includes('match') ? 'Match' : '훕치치';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  useEffect(() => {
    setIsAuthenticated(typeof localStorage.getItem('token') === 'string');
  }, []);

  return (
    <header
      className={$(
        'flex items-center justify-between p-4',
        isAuthenticated && 'bg-primary text-white',
      )}
    >
      <div className="flex items-baseline gap-1 text-center">
        <span className="text-3xl font-bold">{titleContent}</span>
        {isAuthenticated && <span className="">관리자</span>}
      </div>
      <section>
        <button onClick={toggleSidebar}>
          <Icon
            iconName="hamburgerMenu"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            className={isAuthenticated ? 'fill-white' : 'fill-primary'}
          />
        </button>
        {isSidebarOpen && <Sidebar onClickSidebar={toggleSidebar} />}
      </section>
    </header>
  );
}
