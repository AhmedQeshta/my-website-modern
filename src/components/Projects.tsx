import React, { FC } from 'react';
import { TitleHeader } from '@/components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { withGuard } from '@/utils';
import { ApiProjectsInterface } from '@/interfaces';

const Projects: FC<ApiProjectsInterface> = ({ projects }) => {
  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row  max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center z-0">
      <TitleHeader title="Projects" />

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden  z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 snap-x  snap-mandatory">
        {projects
          ?.sort((a, b) => a.order - b.order)
          ?.map(({ id, title, image, summary, technologies, linkToBuild }, index: number) => (
            <motion.div
              initial={{
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ opacity: 1 }}
              key={id}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 h-screen">
              <Image
                src={image?.url}
                width={250}
                height={250}
                alt="user"
                priority
                className="w-64 h-64 mt-10"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-xl md:text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50 px-2">
                    Case Study {index + 1} of {projects?.length}:
                  </span>
                  {title}
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start space-x-5">
                  {technologies?.map(({ id, image }) => (
                    <div
                      key={id}
                      className="flex flex-col items-center space-y-2 bg-[#999999]/50 p-3 rounded-full w-[30px] h-[30px] md:w-[50px] md:h-[50px]">
                      <Image src={image?.url} width={35} height={35} alt="user" priority={false} />
                    </div>
                  ))}
                </div>
                <div
                  className="text-lg md:text-xl text-justify text-gray-200"
                  dangerouslySetInnerHTML={{
                    __html: summary?.html.slice(0, 500),
                  }}
                />
                <div className="flex justify-center md:justify-start space-x-5">
                  <a
                    href={linkToBuild}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-xl font-semibold text-[#F7AB0A]/100 hover:text-[#F7AB0A]/100">
                    <span>View Project</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default withGuard(Projects, 'projects');
