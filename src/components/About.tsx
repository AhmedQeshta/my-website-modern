import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { TitleHeader } from '@/components';
import { withGuard } from '@/utils';
import { ApiPageInfosInterFace } from '@/interfaces';

const About: FC<ApiPageInfosInterFace> = ({ pageinfos }) => {
  const { backgroundInfo, description } = pageinfos[0] ?? {};

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
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.1,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={backgroundInfo?.url}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#F7AB0A]/40">little</span> background
        </h4>
        <div
          className="text-xl text-justify text-gray-200"
          dangerouslySetInnerHTML={{
            __html: description?.html,
          }}
        />
      </div>
    </motion.div>
  );
};

export default withGuard(About, 'pageinfos');