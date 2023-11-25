import { createContext, ReactNode } from 'react';

import { Icon } from '@/components/common/Icon';
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
      <div
        className={$(
          'relative h-full min-h-[200px] justify-center rounded-xl bg-gray-1  shadow-lg',
          className,
        )}
      >
        <Icon
          viewBox="-3 120 100 50"
          width={150}
          height={200}
          iconName="logo"
          className="absolute left-1/2 h-full -translate-x-1/2 fill-primary"
        />
        {children}
      </div>
    </MatchContext.Provider>
  );
}
