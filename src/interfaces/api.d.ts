type ImageType = {
  url: string;
};

type DescriptionType = {
  html: string;
};

type TechnologiesType = {
  id: string;
  image: ImageType;
  title: string;
};

export interface PageinfosInterface {
  id: number | string;
  address: string;
  phoneNumber: string;
  points: {
    [key: string]: string;
  };
  tittle: string;
  role: string;
  email: string;
  heroImage: ImageType;
  backgroundInfo: ImageType;
  description: DescriptionType;
}

export interface ApiPageInfosInterFace {
  pageinfos: PageinfosInterface[];
}

export interface SkillsInterface {
  id: string;
  title: string;
  progress: number;
  image: ImageType;
}

export interface ApiSkillsInterFace {
  skills: SkillsInterface[];
}

export interface SocialsInterface {
  [key: string]: string;
}

export interface ApiSocialsInterface {
  socials: SocialsInterface[];
}

export interface ExperiencesInterface {
  id: string;
  company: string;
  companyImage: ImageType;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  technologies: TechnologiesType[];
  dateEnded: string; // Date
  dateStarted: string; // Date
  summaryPoints: string[];
}

export interface ApiExperiencesInterface {
  experiences: ExperiencesInterface[];
}

export interface ProjectsInterface {
  id: string;
  title: string;
  image: ImageType;
  summary: DescriptionType;
  technologies: TechnologiesType[];
  linkToBuild: string;
}

export interface ApiProjectsInterface {
  projects: ProjectsInterface[];
}
