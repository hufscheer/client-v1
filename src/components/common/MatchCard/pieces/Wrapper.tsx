import { createContext, ReactNode } from 'react';

import { MatchType } from '@/types/match';
import { $ } from '@/utils/core';

type MatchProps = MatchType & {
  children: ReactNode;
  className?: string;
};

export const MatchContext = createContext<MatchType>({} as MatchType);

export default function MatchWrapper({
  className,
  children,
  ...props
}: MatchProps) {
  return (
    <MatchContext.Provider value={props}>
      <div className={$('relative h-full justify-center', className)}>
        {children}
      </div>
    </MatchContext.Provider>
  );
}
