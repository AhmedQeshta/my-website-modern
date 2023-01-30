import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { SkillProps } from '@/interfaces';
import Image from 'next/image';

const Skill: FC<SkillProps> = ({ skill }) => {
  const { image, title, progress, directionLeft } = skill ?? {};

  return (
    <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
      }}
      transition={{
        duration: 1,
      }}
      animate={{
        x: 0,
      }}
      className="group relative flex cursor-pointer rounded-full border  border-gray-500 bg-[#F7AB0A]/10 ">
      <Image
        src={image?.url}
        className=" w-24 h-24 object-cover xl:w-32 xl:h-32 filter group-hover:grayscale transition  duration-300 ease-in-out p-5"
        width={150}
        height={150}
        alt={title}
      />
      <div className="absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{progress}%</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
