import React, { FC } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { BackgroundCircle } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { withGuard } from '@/utils';
import { ApiPageInfosInterFace } from '@/interfaces';

const Hero: FC<ApiPageInfosInterFace> = ({ pageinfos }) => {
  const { heroImage, points, role, tittle, resume } = pageinfos[0] ?? {};

  const [text] = useTypewriter({
    words: Object.values(points),
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <div className="relative rounded-full h-32 w-32 mx-auto object-cover">
        <Image
          src={heroImage?.url}
          fill
          sizes="(max-width: 768px) 100vw, 128px"
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          alt={tittle}
          priority
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">{role}</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="mt-10">
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
      <a
        href={resume?.url}
        target="_blank"
        rel="noreferrer"
        className="text-xl font-semibold text-[#F7AB0A]/50 cursor-pointer border border-[#F7AB0A]/50 py-2 px-5 flex justify-center items-center rounded-full hover:bg-[#F7AB0A]/50 hover:text-white transform ease-in-out duration-300">
        Download Resume
      </a>
    </div>
  );
};

export default withGuard(Hero, 'pageinfos');
