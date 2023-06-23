import type { AppProps } from 'next/app';

import ReactBulk, { Box, Scrollable } from '@react-bulk/web';

import '../../styles/globals.css';

import Sidebar from '../components/Sidebar';
import dark from '../themes/dark';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ReactBulk theme={dark}>
      <Box row noWrap h="100%" w="100%">
        <Box h="100%" w={280}>
          <Scrollable bg="background.primary" contentInset={6}>
            <Sidebar />
          </Scrollable>
        </Box>
        <Box flex h="100%">
          <Scrollable bg="background.secondary" contentInset={6}>
            <Component {...pageProps} />
          </Scrollable>
        </Box>
      </Box>
    </ReactBulk>
  );
}
