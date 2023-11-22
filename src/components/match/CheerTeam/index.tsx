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
        'flex h-14 w-full items-center justify-evenly rounded-xl',
        className,
      )}
      {...props}
    >
      <span className="text-white">{children}</span>
    </div>
  );
}
