import { RbkColor, useTheme } from '@react-bulk/core';

export type IconProps = {
  color?: RbkColor;
  icon: any;
  size?: number | string;
};

export default function Icon({ color, icon: PhIcon, size }: IconProps) {
  const theme = useTheme();
  return <PhIcon color={theme.color(color ?? 'primary')} size={size ?? theme.rem()} />;
}
