import { ComponentProps } from 'react';

import { $ } from '@/utils/core';

import { IconName } from './icon.type';
import { iconMap } from './IconMap';

interface IconProps extends ComponentProps<'svg'> {
  iconName: IconName;
}

export const Icon = ({ iconName, className, ...props }: IconProps) => {
  const { path, width, height, viewBox } = iconMap[iconName];
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fillRule="evenodd"
      clipRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
      className={$(className)}
      {...props}
    >
      {Array.isArray(path) ? (
        path.map((p, i) => <path d={p} key={i} />)
      ) : (
        <path d={path} />
      )}
    </svg>
  );
};
