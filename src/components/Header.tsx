import React, { FC } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { withGuard } from '@/utils';
import { ApiSocialsInterface } from '@/interfaces';

const Header: FC<ApiSocialsInterface> = ({ socials }) => {
  return (
    <header className="sticky top-0 p-5 flex  flex-col md:flex-row  items-center justify-between max-w-7xl mx-auto z-20 md:items-center">
      <motion.div
        initial={{
          opacity: 0,
          x: -500,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-sm">
        {socials?.map(({ url, id }: any) => (
          <SocialIcon
            key={id}
            url={url}
            fgColor="gray"
            bgColor="transparent"
            className="cursor-pointer"
            style={{ height: 35, width: 35 }}
          />
        ))}
      </motion.div>
      <Link rel="nofollow" aria-label='link contact me' title='link contact me' href="#contact-me">
        <motion.div
          initial={{
            opacity: 0,
            x: 500,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
        </motion.div>
      </Link>
    </header>
  );
};

export default withGuard(Header, 'socials');
