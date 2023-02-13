import Head from 'next/head';
import { FC } from 'react';

export const withHead = (Component: FC<any>) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Ahmed Qeshta</title>
          <meta
            name="description"
            content="I am Ahmed Qeshta, a graduate of Computer Engineering from the Islamic University of Gaza with a BA and also graduated from the Career Acceleration Program at Code Academy. I worked as a freelance FrontEnd developer creating user friendly web pages and using front end frameworks with code best practices and clean code. I worked as a ReactJs developer at Google for startups. And I built e-commerce sites, these sites helped me acquire new skills, face new problems and solve them, and in my free time I do some problems and solve them to increase my skills."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* meta for social media */}
          <meta property="og:title" content="Ahmed Qeshta" />
          <meta
            property="og:description"
            content="I am Ahmed Qeshta, a graduate of Computer Engineering from the Islamic University of Gaza with a BA and also graduated from the Career Acceleration Program at Code Academy. I worked as a freelance FrontEnd developer creating user friendly web pages and using front end frameworks with code best practices and clean code. I worked as a ReactJs developer at Google for startups. And I built e-commerce sites, these sites helped me acquire new skills, face new problems and solve them, and in my free time I do some problems and solve them to increase my skills."
          />
          <meta property="og:url" content="https://ahmedqeshta.vercel.app" />
          <meta property="og:site_name" content="Ahmed Qeshta Portfolio" />
          <meta property="og:type" content="website" />
          {/* meta for social media */}
          {/* meta for twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@ahmedqeshta0" />
          <meta name="twitter:creator" content="@ahmedqeshta0" />
          <meta name="twitter:title" content="Ahmed Qeshta" />
          <meta
            name="twitter:description"
            content="#developer Computer Engineer  🎓 Web Developer 🚀 Full-stack developer🚀 Back-end 🚀 ResctJs 🚀PHP - Laravel🚀 Front-end 🚀 API | #API #web #laravel #website"
          />
          <meta
            name="twitter:image"
            content="https://pbs.twimg.com/profile_images/1466176596595855364/5gEtrWJy_400x400.jpg"
          />
          <meta
            property="og:image"
            content="https://ahmedqeshta.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FlLoNQytIQfa4uCKVhFrb&w=828&q=75"
          />
        </Head>
        <Component {...props} />;
      </>
    );
  };
};
