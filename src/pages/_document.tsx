import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import * as gtag from '@/lib/gtag';

function Document() {
  return (
    <Html lang="en">
      <Head>
        <script defer src={gtag.GOOGLE_ADD_LINK} crossOrigin="anonymous"></script>
        <script
          defer
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4380405094521784"
          crossOrigin="anonymous"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
