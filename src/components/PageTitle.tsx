import { SquaresFour } from '@phosphor-icons/react';

import Head from 'next/head';

import { BoxProps } from '@react-bulk/core';
import { Box, Text } from '@react-bulk/web';

import Icon from './Icon';

export type PageTitleProps = {
  title: string;
  icon?: any;
} & BoxProps;

export default function PageTitle({ title, icon, ...rest }: PageTitleProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Box row noWrap center mb={6} {...rest}>
        {Boolean(icon) && (
          <Box mr={3}>
            <Icon icon={SquaresFour} color="white" size="2rem" />
          </Box>
        )}
        <Text variant="subtitle" flex>
          {title}
        </Text>
      </Box>
    </>
  );
}
