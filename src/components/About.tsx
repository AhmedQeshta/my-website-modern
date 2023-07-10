import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { withGuard, TitleHeader, SvgAnimated } from '@/utils';
import { ApiPageInfosInterFace } from '@/interfaces';

const About: FC<ApiPageInfosInterFace> = ({ pageinfos }) => {
  const { backgroundInfo, description, resume, tittle } = pageinfos[0] ?? {};

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <TitleHeader title="About" />
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.1,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="flex-shrink-0 rounded-full object-cover md:rounded-lg w-32 h-32 md:w-80 md:h-80 xl:w-[400px] xl:h-[500px]">
        <div className="relative w-full h-full mt-16 md:mt-0">
          <Image
            src={backgroundInfo?.url}
            fill
            sizes="(max-width: 640px) 100vw, 640px"
            className="aboutImage"
            alt={tittle}
            loading="lazy"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1.1,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a <span className="underline decoration-[#F7AB0A]/40">little</span> background
        </h4>
        <div
          className="text-lg md:text-xl text-justify text-gray-200"
          dangerouslySetInnerHTML={{
            __html: description?.html,
          }}
        />
        <div className="p-0 flex justify-center">
          <SvgAnimated />
        </div>
        <a
          href={resume?.url}
          target="_blank"
          rel="noreferrer"
          className="text-lg md:text-2xl font-semibold text-[#F7AB0A] cursor-pointer mt-5 border border-[#F7AB0A]/50 p-3 flex justify-center items-center rounded-full hover:bg-[#F7AB0A]/50 hover:text-white transform ease-in-out duration-300">
          Download Resume
        </a>
      </motion.div>
    </motion.div>
  );
};

export default withGuard(About, 'pageinfos');
