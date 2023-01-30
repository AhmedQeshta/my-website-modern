import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExperiencesInterfaceProps } from '@/interfaces';

const ExperienceCard: FC<ExperiencesInterfaceProps> = ({ experience }) => {
  const { company, companyImage, dateEnded, dateStarted, jobTitle, technologies, summaryPoints } =
    experience;

  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-full h-32 w-32 object-cover object-center">
        <Image
          src={companyImage?.url}
          width={150}
          height={150}
          className="rounded-full h-32 w-32 object-cover object-center"
          alt={company}
          priority
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{company}</p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex space-x-2 my-2">
          {technologies?.map(({ image, title }: any) => (
            <Image
              key={title}
              className="rounded-full h-10 w-10 object-cover object-center"
              src={image?.url}
              width={100}
              height={100}
              alt={title}
            />
          ))}
        </motion.div>
        <p className="uppercase py-5 text-gray-300">
          {dateStarted} - {dateEnded ?? 'present'}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {summaryPoints?.map((point: any) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
