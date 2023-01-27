import React, { FC } from 'react';
import { motion } from 'framer-motion';

const Skill: FC<any> = ({ skill, directionLeft }) => {
  const { image, progress } = skill ?? {};

  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        src={image?.url}
        className="rounded-full border border-gray-500 w-24 h-24 object-cover xl:w-32 xl:h-32 filter group-hover:grayscale transition  duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
