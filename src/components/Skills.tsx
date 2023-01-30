import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Skill, TitleHeader } from '@/components';
import { withGuard } from '@/utils';
import { ApiSkillsInterFace } from '@/interfaces';

const Skills: FC<ApiSkillsInterFace> = ({ skills }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.1,
      }}
      whileInView={{ opacity: 1 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row  max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <TitleHeader title="Skills" />

      <TitleHeader
        title="Hover over a skill for currency proficiency"
        className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm"
      />

      <div className="grid grid-cols-4 md:grid-cols-6 gap-5 px-10 md:px-0 ">
        {skills?.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default withGuard(Skills, 'skills');
