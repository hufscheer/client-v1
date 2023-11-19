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
  const path = iconMap[iconName];
  return (
    <svg
      width={width}
      height={height}
      fillRule="evenodd"
      clipRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
      className={$(className)}
      {...props}
    >
      <path d={path} />
    </svg>
  );
};
