import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { useGTag } from '@/hooks';
import { PwaUpdater } from '@/utils';

export default function App({ Component, pageProps }: AppProps) {
  useGTag();
  return (
    <>
      {/* <PwaUpdater /> */}
      <Component {...pageProps} />;
    </>
  );
}
