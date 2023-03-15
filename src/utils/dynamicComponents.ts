import dynamic from 'next/dynamic';

export const Header = dynamic(() => import('@/components/Header'));
export const Hero = dynamic(() => import('@/components/Hero'));
export const About = dynamic(() => import('@/components/About'));
export const WorkExperience = dynamic(() => import('@/components/WorkExperience'));
export const Skills = dynamic(() => import('@/components/Skills'));
export const Projects = dynamic(() => import('@/components/Projects'));
export const ContactMe = dynamic(() => import('@/components/ContactMe'));
export const Skill = dynamic(() => import('@/components/Skill'));
export const ExperienceCard = dynamic(() => import('@/components/ExperienceCard'));

// ui components
export const TitleHeader = dynamic(() => import('@/components/ui/TitleHeader'));
export const SvgAnimated = dynamic(() => import('@/components/ui/SvgAnimated'));
export const BackgroundCircle = dynamic(() => import('@/components/ui/BackgroundCircle'));
