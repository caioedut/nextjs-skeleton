import { useEffect } from 'react';

import { useTheme } from '@react-bulk/core';
import NextHead from 'next/head';

export type HeaderProps = {
  title?: string;
};

export default function Head({ title }: HeaderProps) {
  const theme = useTheme();

  useEffect(() => {
    theme.setTheme({ head: { title } } as any);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
}
