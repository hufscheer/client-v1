import { ComponentProps } from 'react';

import { IconName } from './icon.type';
import { IconMap } from './IconMap';

interface IconProps extends ComponentProps<'svg'> {
  icon: IconName;
}

export const Icon = ({ icon, ...props }: IconProps) => {
  const { path } = IconMap[icon];
  return (
    <svg {...props}>
      <path d={path} />
    </svg>
  );
};
