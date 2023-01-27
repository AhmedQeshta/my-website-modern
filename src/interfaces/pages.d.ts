import {
  ApiProjectsInterface,
  ExperiencesInterface,
  PageinfosInterface,
  SkillsInterface,
  SocialsInterface,
} from './api';

export interface HomePropsInterface {
  pageinfos: PageinfosInterface;
  skills: SkillsInterface;
  socials: SocialsInterface;
  experiences: ExperiencesInterface;
  projects: ApiProjectsInterface;
}
