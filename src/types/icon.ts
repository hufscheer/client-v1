import { ICON_COLOR, ICON_NAME } from '@/components/common/Icon/IconMap';

export type IconName = (typeof ICON_NAME)[keyof typeof ICON_NAME];
export type IconColor = (typeof ICON_COLOR)[keyof typeof ICON_COLOR];
