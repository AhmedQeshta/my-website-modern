import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { useGTag } from '@/hooks';

export default function App({ Component, pageProps }: AppProps) {
  useGTag();
  return <Component {...pageProps} />;
}
