'use client';

import Link from 'next/link';
import { notFound, useSelectedLayoutSegments } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getAllLeagues, LeagueType } from '@/api/league';

import { Icon } from '../common/Icon';
import Modal from '../common/Modal';

export default function Header() {
  const segments = useSelectedLayoutSegments();
  const [titleContent, setTitleContent] = useState<JSX.Element | string>(
    <Icon iconName="hamburgerMenu" />,
  );
  const [menuContent, setMenuContent] = useState<LeagueType[]>([
    { name: '전체' },
  ]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (segments.includes('admin')) {
      setTitleContent('관리자');
    }
    if (segments.includes('detail')) {
      setTitleContent('Match');
    }

    const getLeagueData = async () => {
      const res = await getAllLeagues();

      if (typeof res === 'number') return notFound();

      setMenuContent(prev => [...prev, ...res]);
    };

    getLeagueData();
  }, []);

  return (
    <div className="flex items-center justify-between">
      <div className="text-3xl font-bold">{titleContent}</div>

      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Trigger>
          <Icon
            iconName="hamburgerMenu"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            className="fill-primary"
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
                onClick={() => setOpen(false)}
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
