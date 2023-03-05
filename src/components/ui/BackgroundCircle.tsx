import React, { FC } from 'react';
import { motion } from 'framer-motion';

const BackgroundCircle: FC = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="absolute -mt-64 flex justify-center items-center">
      <div className="absolute border border-[#333333] rounded-full h-[150px] w-[150px] md:h-[200px] md:w-[200px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#333333] h-[250px] w-[250px] md:h-[450px] md:w-[450px] mt-52 absolute" />
      <div className="border rounded-full border-[#F7AB0A] opacity-20 h-[300px] w-[300px] md:h-[500px] md:w-[500px] mt-52 animate-pulse absolute" />
      <div className="absolute border border-[#333333] rounded-full h-[350px] w-[350px] md:h-[550px] md:w-[550px] mt-52" />
    </motion.div>
  );
};

export default BackgroundCircle;
