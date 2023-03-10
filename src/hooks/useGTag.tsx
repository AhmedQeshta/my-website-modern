import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import * as gtag from '@/lib/gtag';

const useGTag = () => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export default useGTag;
