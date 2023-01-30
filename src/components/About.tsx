import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { TitleHeader } from '@/components';
import { withGuard } from '@/utils';
import { ApiPageInfosInterFace } from '@/interfaces';
import Image from 'next/image';

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
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]">
        <div className="relative w-full h-full">
          <Image
            src={backgroundInfo?.url}
            fill
            sizes="(max-width: 640px) 100vw, 640px"
            className="relative  w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            alt={tittle}
            priority
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
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#F7AB0A]/40">little</span> background
        </h4>
        <div
          className="text-xl text-justify text-gray-200"
          dangerouslySetInnerHTML={{
            __html: description?.html,
          }}
        />
        <a
          href={resume?.url}
          target="_blank"
          rel="noreferrer"
          className="text-2xl font-semibold text-[#F7AB0A] cursor-pointer mt-5 border border-[#F7AB0A]/50 p-3 flex justify-center items-center rounded-full hover:bg-[#F7AB0A]/50 hover:text-white transform ease-in-out duration-300">
          Download Resume
        </a>
      </motion.div>
    </motion.div>
  );
};

export default withGuard(About, 'pageinfos');
