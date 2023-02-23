import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import Link from 'next/link';
import { withGuard } from '@/utils';
import { ApiPageInfosInterFace } from '@/interfaces';

const BackgroundCircle = dynamic(() => import('@/components/BackgroundCircle'));

const Hero: FC<ApiPageInfosInterFace> = ({ pageinfos }) => {
  const { heroImage, points, role, tittle, resume } = pageinfos[0] ?? {};

  const [text] = useTypewriter({
    words: Object.values(points),
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-5 md:space-y-8 items-center justify-center text-center overflow-hidden relative">
      <BackgroundCircle />
      <div className="relative rounded-full h-32 w-32 mx-auto object-cover">
        <Image
          src={heroImage?.url}
          width={128}
          height={128}
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          alt={tittle}
          placeholder="blur"
          blurDataURL={heroImage?.url}
          loading="lazy"
        />
      </div>
      <div className="z-20">
        <h2 className="text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[5px] md:tracking-[15px]">
          {role}
        </h2>
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="mt-10 mb-40 md:mb-0 md:mt-10">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>

      <Link
        href={resume?.url}
        target="_blank"
        rel="noreferrer"
        className="z-20 text-sm md:text-xl font-semibold text-[#F7AB0A]/50 cursor-pointer border border-[#F7AB0A]/50 py-2 px-5 flex justify-center items-center rounded-full hover:bg-[#F7AB0A]/50 hover:text-white transform ease-in-out duration-300">
        Download Resume
      </Link>
    </div>
  );
};

export default withGuard(Hero, 'pageinfos');
