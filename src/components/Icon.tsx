import { RbkColor, useTheme } from '@react-bulk/core';

export type IconProps = {
  icon: any;
  color?: RbkColor;
  size?: number | string;
};

export default function Icon({ icon: PhIcon, color, size }: IconProps) {
  const theme = useTheme();
  return <PhIcon color={theme.color(color ?? 'primary')} size={size ?? theme.rem()} />;
}
