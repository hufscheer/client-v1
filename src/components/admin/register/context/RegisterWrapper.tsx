'use client';

import { createContext, ReactNode, useState } from 'react';

import { $ } from '@/utils/core';

import { LeagueIdContextType } from './wrapper.type';

type RegisterProps = {
  children: ReactNode;
  className?: string;
};

export const LeagueIdContext = createContext<LeagueIdContextType<string>>(
  {} as LeagueIdContextType<string>,
);

export default function RegisterWrapper({
  className,
  children,
}: RegisterProps) {
  const [leagueId, setLeagueId] = useState<string>('');

  return (
    <LeagueIdContext.Provider value={{ leagueId, setLeagueId }}>
      <div className={$('relative h-full justify-center', className)}>
        {children}
      </div>
    </LeagueIdContext.Provider>
  );
}
