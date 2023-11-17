import { IconColor, IconName } from '@/types/icon';
import { IconMap } from './IconMap';

type IconProps = {
  icon: IconName;
  color: IconColor;
  className?: string;
};

export const Icon = ({ icon, color, className }: IconProps) => {
  const { width, height, path } = IconMap[icon];
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d={path} />
    </svg>
  );
};
