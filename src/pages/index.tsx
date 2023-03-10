import Head from 'next/head';
import Link from 'next/link';
import { ArrowSmallUpIcon } from '@heroicons/react/24/solid';
import { GetServerSideProps } from 'next';
import {
  fetchData,
  Header,
  Hero,
  About,
  WorkExperience,
  Skills,
  Projects,
  ContactMe,
} from '@/utils';
import { HomePropsInterface } from '@/interfaces';

const Home = ({ pageinfos, skills, socials, experiences, projects }: HomePropsInterface) => {
  return (
    <div className="bg-[#242424] text-white h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
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
          content="#developer Computer Engineer  ???? Web Developer ???? Full-stack developer???? Back-end ???? ResctJs ????PHP - Laravel???? Front-end ???? API | #API #web #laravel #website"
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

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageinfos={pageinfos} />
      </section>

      <section id="about" className="snap-center">
        <About pageinfos={pageinfos} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact-me" className="snap-start">
        <ContactMe pageinfos={pageinfos} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-6 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowSmallUpIcon className="h-10 w-10 border rounded-full text-gray-200 hover:text-gray-400 hover:border-gray-400 cursor-pointer p-1 transition-all ease-in-out duration-100" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps = async () => {
//   const { pageinfos } = await fetchData('getPageinfo').catch((err) => {
//     return {
//       pageinfos: [],
//     };
//   });
//   const { skills } = await fetchData('getSkills').catch((err) => {
//     return {
//       skills: [],
//     };
//   });
//   const { socials } = await fetchData('getSocials').catch((err) => {
//     return {
//       socials: [],
//     };
//   });
//   const { experiences } = await fetchData('getExperiences').catch((err) => {
//     return {
//       experiences: [],
//     };
//   });
//   const { projects } = await fetchData('getProjects').catch((err) => {
//     return {
//       projects: [],
//     };
//   });
//   return {
//     props: {
//       pageinfos,
//       skills,
//       socials,
//       experiences,
//       projects,
//     },
//   };
// };

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

  const { pageinfos } = await fetchData('getPageinfo').catch((err) => {
    return {
      pageinfos: [],
    };
  });
  const { skills } = await fetchData('getSkills').catch((err) => {
    return {
      skills: [],
    };
  });
  const { socials } = await fetchData('getSocials').catch((err) => {
    return {
      socials: [],
    };
  });
  const { experiences } = await fetchData('getExperiences').catch((err) => {
    return {
      experiences: [],
    };
  });
  const { projects } = await fetchData('getProjects').catch((err) => {
    return {
      projects: [],
    };
  });
  return {
    props: {
      pageinfos,
      skills,
      socials,
      experiences,
      projects,
    },
  };
};
