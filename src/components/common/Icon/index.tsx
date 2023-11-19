import { ComponentProps } from 'react';

import { IconName } from './icon.type';
import { iconMap } from './IconMap';

interface IconProps extends ComponentProps<'svg'> {
  iconName: IconName;
}

export const Icon = ({ iconName, ...props }: IconProps) => {
  const path = iconMap[iconName];
  return (
    <svg
      fillRule="evenodd"
      clipRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d={path} />
    </svg>
  );
};
