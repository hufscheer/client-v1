import { ICON_NAME } from '@/components/common/Icon/IconMap';

export type IconName = (typeof ICON_NAME)[keyof typeof ICON_NAME];
