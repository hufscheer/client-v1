import { ComponentProps } from 'react';

import { $ } from '@/utils/core';

import { IconName } from './icon.type';
import { iconMap } from './IconMap';

interface IconProps extends ComponentProps<'svg'> {
  iconName: IconName;
  width?: number;
  height?: number;
  className?: string;
}

export const Icon = ({
  iconName,
  width = 24,
  height = 24,
  className,
  ...props
}: IconProps) => {
  const path = iconMap[iconName];
  return (
    <svg width={width} height={height} className={$(className)} {...props}>
      <path d={path} />
    </svg>
  );
};
