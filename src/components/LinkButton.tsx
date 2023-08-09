import { ButtonProps } from '@react-bulk/core';
import { Button } from '@react-bulk/web';
import Link from 'next/link';

export type LinkButtonProps = {
  href: string;
} & ButtonProps;

export default function LinkButton({ href, ...rest }: LinkButtonProps) {
  return <Button component={Link} {...rest} />;
}
