'use client';

import { useSelectedLayoutSegments } from 'next/navigation';
import { useState } from 'react';

import { Icon } from '@/components/common/Icon';
import Sidebar from '@/components/common/Sidebar';
import { $ } from '@/utils/core';

export default function Header() {
  const [open, setOpen] = useState(false);
  const isAuthenticated =
    typeof window !== 'undefined' &&
    typeof localStorage.getItem('token') === 'string';

  const handleOpenSidebar = () => setOpen(prev => !prev);

  return (
    <div
      className={$(
        'flex items-center justify-between p-4',
        isAuthenticated && 'bg-primary text-white',
      )}
    >
      <HeaderTitle isAuthenticated={isAuthenticated} />
      <section>
        <button onClick={handleOpenSidebar}>
          <Icon
            iconName="hamburgerMenu"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            className={isAuthenticated ? 'fill-white' : 'fill-primary'}
          />
        </button>
        {open && <Sidebar onClickChange={handleOpenSidebar} />}
      </section>
    </div>
  );
}

type HeaderTitleProps = {
  isAuthenticated: boolean;
};
function HeaderTitle({ isAuthenticated }: HeaderTitleProps) {
  const segments = useSelectedLayoutSegments();
  const titleContent = segments.includes('match') ? 'Match' : '훕치치';
  // <Icon iconName="logo" />

  return (
    <div className="flex items-baseline gap-1 text-center">
      <span className="text-3xl font-bold">{titleContent}</span>
      {isAuthenticated && <span className="">관리자</span>}
    </div>
  );
}
