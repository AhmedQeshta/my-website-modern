import type { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'Ahmed Qeshta',
  defaultTitle: 'Ahmed Qeshta',
  description:
    'I am Ahmed Qeshta, a graduate of Computer Engineering from the Islamic University of Gaza with a BA and also graduated from the Career Acceleration Program at Code Academy. I worked as a freelance FrontEnd developer creating user friendly web pages and using front end frameworks with code best practices and clean code. I worked as a ReactJs developer at Google for startups. And I built e-commerce sites, these sites helped me acquire new skills, face new problems and solve them, and in my free time I do some problems and solve them to increase my skills.',
  canonical: 'https://ahmedqeshta.vercel.app/',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: 'https://ahmedqeshta.vercel.app/favicon.ico',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ahmedqeshta.vercel.app/',
    title: 'Ahmed Qeshta',
    siteName: 'Ahmed Qeshta Portfolio',
    description:
      'I am Ahmed Qeshta, a graduate of Computer Engineering from the Islamic University of Gaza with a BA and also graduated from the Career Acceleration Program at Code Academy. I worked as a freelance FrontEnd developer creating user friendly web pages and using front end frameworks with code best practices and clean code. I worked as a ReactJs developer at Google for startups. And I built e-commerce sites, these sites helped me acquire new skills, face new problems and solve them, and in my free time I do some problems and solve them to increase my skills.',
    images: [
      {
        url: 'https://ahmedqeshta.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FlLoNQytIQfa4uCKVhFrb&w=640&q=75',
        width: 640,
        height: 951,
        alt: 'Ahmed Qeshta',
        secureUrl:
          'https://ahmedqeshta.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FlLoNQytIQfa4uCKVhFrb&w=640&q=75',
      },
    ],
  },
  twitter: {
    handle: '@ahmedqeshta0',
    site: '@ahmedqeshta0',
    cardType: 'summary_large_image',
  },
};

export default config;