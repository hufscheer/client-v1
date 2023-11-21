'use client';

import { useSelectedLayoutSegments } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Icon } from '../common/Icon';

export default function Header() {
  const segments = useSelectedLayoutSegments();
  const [titleContent, setTitleContent] = useState<JSX.Element | string>(
    <Icon iconName="hamburgerMenu" />,
  );

  useEffect(() => {
    if (segments.includes('admin')) {
      setTitleContent('관리자');
    }
    if (segments.includes('detail')) {
      setTitleContent('Match');
    }
  }, []);

  return (
    <div className="flex items-center justify-between">
      <div className="text-3xl font-bold">{titleContent}</div>

      <Icon
        iconName="hamburgerMenu"
        width={32}
        height={32}
        viewBox="0 0 24 24"
        className="fill-primary"
      />
    </div>
  );
}
