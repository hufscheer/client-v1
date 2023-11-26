import { ComponentProps } from 'react';

import { Icon } from '@/components/common/Icon';
import { $ } from '@/utils/core';

interface LabelProps extends ComponentProps<'svg'> {
  className?: string;
}

export default function Label({ className, ...props }: LabelProps) {
  return (
    <Icon
      iconName="logo"
      className={$(
        'absolute left-1/2 h-[200px] -translate-x-1/2 fill-primary',
        className,
      )}
      {...props}
    />
  );
}
