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
