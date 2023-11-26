'use client';

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Icon } from '@/components/common/Icon';
import Sidebar from '@/components/common/Sidebar';
import { $ } from '@/utils/core';

export default function Header() {
  const segments = useSelectedLayoutSegments();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const titleContent = segments.includes('match') ? (
    'Match'
  ) : (
    <Icon
      iconName="hufcheercheer"
      width={75}
      height="100%"
      className={isAuthenticated ? 'fill-white' : 'fill-primary'}
    />
  );

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  useEffect(() => {
    setIsAuthenticated(typeof localStorage.getItem('token') === 'string');
  }, []);

  return (
    <header
      className={$(
        'relative flex items-center justify-between p-4',
        isAuthenticated && 'bg-primary text-white',
      )}
    >
      <div>
        <Link href="/" className="flex items-baseline gap-1 text-center">
          <span className="text-3xl font-bold">{titleContent}</span>
          {isAuthenticated && <span>관리자</span>}
        </Link>
      </div>
      <div>
        <button onClick={toggleSidebar}>
          <Icon
            iconName="hamburgerMenu"
            width={30}
            height="100%"
            className={isAuthenticated ? 'fill-white' : 'fill-primary'}
          />
        </button>

        <Sidebar isSidebarOpen={isSidebarOpen} onClickSidebar={toggleSidebar} />
      </div>
    </header>
  );
}
