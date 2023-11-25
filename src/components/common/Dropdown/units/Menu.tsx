import { ComponentProps } from 'react';

import { $ } from '@/utils/core';

export default function Menu({
  className,
  children,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div className={$('flex items-center', className)} {...props}>
      {children}
    </div>
  );
}
