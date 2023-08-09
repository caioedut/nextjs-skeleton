import React from 'react';

import { ReactElement, useTheme } from '@react-bulk/core';
import { Box, Scrollable, Text } from '@react-bulk/web';

import Sidebar from '@/components/Sidebar';

export default function Layout({ children }: { children: ReactElement }) {
  const theme = useTheme();

  return (
    <Box noWrap row h="100%" w="100%">
      <Box h="100%" w={280}>
        <Scrollable bg="background.primary" contentInset={4}>
          <Sidebar />
        </Scrollable>
      </Box>
      <Box flex h="100%">
        <Box bg="background.disabled" borderBottom="1px solid background.primary" p={4}>
          <Text numberOfLines={1} variant="subtitle">
            {/*@ts-expect-error*/}
            {theme?.head?.title ?? ' '}
          </Text>
        </Box>
        <Scrollable bg="background.secondary" contentInset={4}>
          {children}
        </Scrollable>
      </Box>
    </Box>
  );
}
