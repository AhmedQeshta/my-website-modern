import { ExperiencesInterface, SkillsInterface } from './api';
export interface TitleHeaderProps {
  title: string;
  classes?: string;
  className?: string;
}

export interface SkillProps {
  skill: SkillsInterface;
}
export interface ExperiencesInterfaceProps {
  experience: ExperiencesInterface;
}

export interface ContactInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface svgMotionProps {
  animate: { pathLength: number };
  transition: { duration: number };
}
