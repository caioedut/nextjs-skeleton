import { SquaresFour } from '@phosphor-icons/react';
import { BoxProps } from '@react-bulk/core';
import { Box, Text } from '@react-bulk/web';
import Head from 'next/head';

import Icon from './Icon';

export type PageTitleProps = {
  icon?: any;
  title: string;
} & BoxProps;

export default function PageTitle({ title, icon, ...rest }: PageTitleProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Box center noWrap row mb={6} {...rest}>
        {Boolean(icon) && (
          <Box mr={3}>
            <Icon color="white" icon={SquaresFour} size="2rem" />
          </Box>
        )}
        <Text flex variant="subtitle">
          {title}
        </Text>
      </Box>
    </>
  );
}
