import { ComponentProps } from 'react';

import { $ } from '@/utils/core';

import { IconName } from './icon.type';
import { iconMap } from './IconMap';

interface IconProps extends ComponentProps<'svg'> {
  iconName: IconName;
}

export const Icon = ({
  iconName,
  width = 24,
  height = 24,
  className,
  ...props
}: IconProps) => {
  const Icon = iconMap[iconName];
  return (
    <Icon width={width} height={height} className={$(className)} {...props} />
  );
};
