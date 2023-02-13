import Head from 'next/head';
import Link from 'next/link';
import { ArrowSmallUpIcon } from '@heroicons/react/24/solid';
import { GetStaticProps } from 'next';
import { fetchData } from '@/utils';
import { HomePropsInterface } from '@/interfaces';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/Header'));
const Hero = dynamic(() => import('@/components/Hero'));
const About = dynamic(() => import('@/components/About'));
const WorkExperience = dynamic(() => import('@/components/WorkExperience'));
const Skills = dynamic(() => import('@/components/Skills'));
const Projects = dynamic(() => import('@/components/Projects'));
const ContactMe = dynamic(() => import('@/components/ContactMe'));

export default function Home({
  pageinfos,
  skills,
  socials,
  experiences,
  projects,
}: HomePropsInterface) {
  return (
    <div className="bg-[#242424] text-white h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Ahmed Qeshta</title>
        <meta name="description" content="Ahmed Qeshta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
}

export const getStaticProps: GetStaticProps = async () => {
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
