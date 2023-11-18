import { $ } from '@/utils/core';
import { IconMap } from './IconMap';
import { IconName } from './icon.type';

type IconProps = {
  icon: IconName;
  className?: string;
};

export const Icon = ({ icon, className }: IconProps) => {
  const { width, height, path } = IconMap[icon];
  return (
    <svg
      width={width}
      height={height}
      fillRule="evenodd"
      clipRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
      className={$(className)}
    >
      <path d={path} />
    </svg>
  );
};
