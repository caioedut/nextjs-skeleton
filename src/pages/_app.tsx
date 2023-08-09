import type { AppProps } from 'next/app';

import React from 'react';

import ReactBulk from '@react-bulk/web';

import Layout from '@/components/Layout';
import dark from '@/themes/dark';

import '../../styles/globals.css';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ReactBulk theme={dark}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReactBulk>
  );
}
