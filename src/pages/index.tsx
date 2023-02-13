import Head from 'next/head';
import Link from 'next/link';
import { ArrowSmallUpIcon } from '@heroicons/react/24/solid';
import { GetStaticProps } from 'next';
import { fetchData } from '@/utils';
import { HomePropsInterface } from '@/interfaces';
import dynamic from 'next/dynamic';
// import { useCallback, useEffect, useRef } from 'react';

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
  // const ref: any = useRef(null);

  // const animateSvgOnScroll = (value: any) => {
  //   console.log('value', value);
  //   const totalLength = ref.current.getTotalLength(); // Getting the total length of the SVG path.
  //   ref.current.style.strokeDasharray = totalLength; // Get the starting position of the draw.
  //   ref.current.style.strokeDashoffset = totalLength;
  //   const draw = totalLength * value;
  //   ref.current.style.strokeDashoffset = totalLength - draw;
  // };

  // useEffect(() => {
  //   const handleScroll = (event: any) => {
  //     console.log('====================================');
  //     console.log('window.scrollY', window.scrollY);
  //     console.log('====================================');
  //     const value = window.scrollY / 1069;
  //     animateSvgOnScroll(value);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

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

      {/* <div>
        <svg
          width="192"
          height="2202"
          viewBox="0 0 192 2202"
          fill="none"
          className="absolute bottom-0 -left-[0] w-[100px] h-screen"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M49 1C-61.9454 460.953 86.8099 106.731 86.8099 563.131C78.8335 568.193 64.2297 598.568 46.2422 598.568C19.4122 601.46 15.7866 602.907 15.7866 602.907C15.7866 602.907 2.73416 604.353 9.26036 632.558C14.4813 655.121 84.4325 696.44 118.756 714.279C126.249 717.895 146.455 725.995 161.538 723.68C180.392 720.788 184.018 720.788 187.643 715.725C191.269 710.663 189.819 706.324 189.094 698.369C188.368 690.413 176.041 674.503 168.065 667.271C160.088 660.039 75.2475 584.827 65.8208 592.059C56.394 599.291 56.4482 661.486 58.5694 670.887C60.6906 680.289 66.5459 733.082 73.7972 742.483C81.0485 751.885 89.025 757.671 94.826 758.394C100.627 759.117 115.13 757.671 118.756 751.885C122.381 746.099 139.059 691.86 137.609 686.797C136.159 681.735 157.294 663.516 160.055 660.762C161.505 659.316 181.117 641.236 186.193 625.326C187.512 621.191 184.018 605.799 184.018 605.799C184.018 605.799 181.117 598.568 168.065 598.568C155.012 598.568 115.13 614.478 111.504 616.647C108.156 618.651 44.0668 641.959 34.6401 656.423C25.2134 670.887 6.35989 686.074 6.35989 698.369C6.35989 708.204 10.2272 713.073 12.1609 714.279C15.3032 716.931 22.8929 722.234 28.1139 722.234C34.6401 722.234 62.1951 718.618 73.7972 714.279C85.3993 709.94 121.656 690.413 129.632 686.797C137.609 683.181 137.609 675.226 137.609 667.271C137.609 659.316 136.159 600.014 126.007 586.996C115.855 573.979 104.253 561.684 93.3757 561.684C83.949 561.684 99.1768 561.684 91.2004 561.684C80.1317 561.684 65.8208 593.16 65.8208 602.907C65.8208 612.653 57.8624 610.139 61.47 660.762C65.0775 711.386 70.1716 726.573 70.1716 742.483C70.1716 755.212 70.1716 818.66 70.1716 848.793V973.183V1005C73.3138 1009.34 77.7129 1020.48 70.1716 1030.32C60.7448 1042.61 47.6924 1036.82 46.2422 1027.42C44.7919 1018.02 30.2893 1003.56 41.8914 998.495C53.4935 993.432 62.1951 990.54 58.5694 1002.11C54.9437 1013.68 67.271 1012.96 58.5694 1020.19C49.8678 1027.42 23.7631 1036.1 20.8625 1023.08C17.962 1010.07 7.81014 1015.85 20.8625 998.495C33.9149 981.138 47.6924 953.657 49.8678 969.567C52.0432 985.477 60.0197 979.692 46.2422 985.477C32.4646 991.263 32.4647 973.906 32.4647 995.602C41.8914 1045.5 23.038 1031.04 32.4647 1044.78C41.8914 1058.52 26.6635 1047.67 58.5694 1057.07C90.4753 1066.48 110.779 1017.3 90.4753 1044.78C70.1715 1072.26 86.1245 1052.01 70.1716 1048.4C54.2186 1044.78 48.4175 1015.13 53.4935 1048.4C58.5694 1081.66 44.7919 1088.17 73.7972 1078.05C62.1951 1100.47 -3.06693 1125.05 11.4358 1092.51C25.9385 1059.97 75.2475 1091.79 58.5694 1106.97C67.271 1136.63 102.802 1118.55 78.148 1131.56C53.4935 1144.58 67.271 1142.41 49.8678 1140.96C32.4646 1139.52 20.8625 1098.3 25.2133 1125.05C29.5641 1151.81 25.9384 1145.3 49.8678 1154.71C73.7972 1164.11 122.381 1143.13 90.4753 1164.11C58.5694 1185.08 33.9149 1169.17 41.8914 1185.8C49.8679 1202.44 41.8914 1173.51 53.4935 1200.99C107.878 1317.42 126.008 1493.88 68.7221 1613.21C-22.1913 1768.65 -12.4935 1457 57.8444 1573.44C128.182 1689.87 70.8976 1803.41 28.1148 1842.46C28.1148 1919.85 54.9447 1860.54 68.7222 1932.86C82.4998 2005.18 80.0144 1936.48 65.5118 2031.94C53.9096 2108.31 51.4925 2119.69 51.7342 2115.83M51.7342 2115.83C48.592 2115.59 45.0829 2116.27 43.3426 2123.79V2178.03H22.3137C22.5555 2173.21 20.8635 2163.71 12.1619 2164.29C1.28487 2165.01 2.01004 2174.41 2.01004 2175.13C2.01004 2175.86 2.01004 2180.92 2.73517 2183.81C3.4603 2186.71 8.5362 2193.94 10.7116 2195.38C12.887 2196.83 19.4132 2199 20.8635 2199C22.3138 2199 46.2431 2199 47.6934 2199C49.1436 2199 57.8453 2194.66 60.0207 2190.32C62.1961 2185.98 62.1962 2183.81 63.6463 2179.47C65.0965 2175.13 100.026 2127.73 65.0965 2119.45M51.7342 2115.83C50.574 2117.57 62.1959 2118.73 65.0965 2119.45M65.0965 2119.45C79.5992 2123.79 85.4003 2124.51 85.4003 2124.51M94.8271 2115.83V2116.56M94.8271 2116.56H144.136C146.795 2116.07 152.548 2116.84 154.288 2123.79V2135.36C154.046 2137.77 152.113 2142.59 146.312 2142.59C140.51 2142.59 138.093 2142.59 137.61 2142.59C136.16 2141.63 133.549 2139.12 134.709 2136.81H107.154V2149.82H144.136C147.52 2151.51 154.433 2156.33 155.013 2162.12C155.738 2169.35 155.738 2191.77 155.013 2191.77C154.288 2191.77 151.387 2199 145.586 2198.28L97.7276 2199C94.5854 2198.52 88.0108 2196.4 86.8506 2191.77C85.4003 2185.98 85.4003 2182.37 85.4003 2179.47C85.4003 2176.58 90.4763 2171.52 91.9265 2171.52C93.3768 2171.52 96.2774 2170.07 99.1779 2171.52C102.078 2172.96 104.979 2176.58 104.979 2178.03C104.979 2179.18 124.799 2178.51 134.709 2178.03C134.951 2173.69 135.29 2164.87 134.709 2164.29C133.984 2163.56 98.4527 2164.29 97.0025 2163.56C95.5522 2162.84 86.1255 2163.56 85.4003 2152.72C84.6752 2141.87 85.4003 2125.23 85.4003 2124.51M94.8271 2116.56C92.6517 2115.11 85.4003 2123.79 85.4003 2124.51"
            stroke="#F7AB0A"
            strokeWidth="4"
            ref={ref}
          />
        </svg>
      </div> */}
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
