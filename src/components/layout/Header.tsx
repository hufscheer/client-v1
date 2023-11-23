'use client';

import Link from 'next/link';
import { notFound, useSelectedLayoutSegments } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getAllLeagues, LeagueType } from '@/api/league';
import { Icon } from '@/components/common/Icon';
import Modal from '@/components/common/Modal';
import { $ } from '@/utils/core';

export default function Header() {
  const [menuContent, setMenuContent] = useState<LeagueType[]>([
    { name: '전체' },
  ]);
  const [open, setOpen] = useState(false);
  const isAuthenticated = typeof localStorage.getItem('token') === 'string';

  const handleClickLink = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getLeagueData = async () => {
      const res = await getAllLeagues();

      if (typeof res === 'number') return notFound();

      setMenuContent(prev => [...prev, ...res]);
    };

    getLeagueData();
  }, []);

  return (
    <div
      className={$(
        'flex items-center justify-between p-4',
        isAuthenticated && 'bg-primary text-white',
      )}
    >
      <HeaderTitle isAuthenticated={isAuthenticated} />

      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Trigger>
          <Icon
            iconName="hamburgerMenu"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            className={isAuthenticated ? 'fill-white' : 'fill-primary'}
          />
        </Modal.Trigger>

        <Modal.Content
          title="대회 목록"
          className="right-0 top-0 h-screen w-52 space-y-4 bg-white p-5 py-8 data-[state=closed]:animate-[menu-content-hide_200ms] data-[state=open]:animate-[menu-content-show_200ms]"
        >
          <div className="flex flex-col gap-2">
            {menuContent.map(content => (
              <Link
                href={{ pathname: '/', query: { leagueId: content.leagueId } }}
                onClick={handleClickLink}
                key={content.name}
              >
                {content.name}
              </Link>
            ))}
          </div>
        </Modal.Content>
      </Modal>
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
