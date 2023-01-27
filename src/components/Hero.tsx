import React, { FC } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { BackgroundCircle } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { withGuard } from '@/utils';
import { ApiPageInfosInterFace } from '@/interfaces';

const Hero: FC<ApiPageInfosInterFace> = ({ pageinfos }) => {
  const { heroImage, points, role, tittle } = pageinfos[0] ?? {};

  const [text] = useTypewriter({
    words: Object.values(points),
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        src={heroImage?.url}
        width={200}
        height={200}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        alt={tittle}
        priority
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">{role}</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="mt-5">
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
    </div>
  );
};

export default withGuard(Hero, 'pageinfos');
