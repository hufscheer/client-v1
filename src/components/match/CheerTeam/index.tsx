import { ComponentProps } from 'react';

import { $ } from '@/utils/core';

export default function CheerTeam({
  children,
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={$(
        'flex h-14 w-full cursor-pointer items-center justify-evenly rounded-xl shadow-lg',
        className,
      )}
      {...props}
    >
      <div className="flex w-full items-center justify-center text-white">
        {children}
      </div>
    </div>
  );
}
