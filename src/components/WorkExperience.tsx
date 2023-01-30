import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { ExperienceCard, TitleHeader } from '@/components';
import { withGuard } from '@/utils';
import { ApiExperiencesInterface } from '@/interfaces';

const WorkExperience: FC<ApiExperiencesInterface> = ({ experiences }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.1,
      }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <TitleHeader
        title="Work Experience"
        classes=""
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-md md:text-2xl items-center text-center"
      />

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences
          ?.sort((a, b) => b.order - a.order)
          ?.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
      </div>
    </motion.div>
  );
};

export default withGuard(WorkExperience, 'experiences');
