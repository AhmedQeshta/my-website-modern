type AssetType = {
  url: string;
};

type DescriptionType = {
  html: string;
};

type TechnologiesType = {
  id: string;
  image: AssetType;
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
  heroImage: AssetType;
  backgroundInfo: AssetType;
  description: DescriptionType;
  resume: AssetType;
}

export interface ApiPageInfosInterFace {
  pageinfos: PageinfosInterface[];
}

export interface SkillsInterface {
  id: string;
  title: string;
  progress: number;
  image: AssetType;
  directionLeft: boolean;
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
  companyImage: AssetType;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  technologies: TechnologiesType[];
  dateEnded: string; // Date
  dateStarted: string; // Date
  summaryPoints: string[];
  order: number;
}

export interface ApiExperiencesInterface {
  experiences: ExperiencesInterface[];
}

export interface ProjectsInterface {
  id: string;
  title: string;
  image: AssetType;
  summary: DescriptionType;
  technologies: TechnologiesType[];
  linkToBuild: string;
  order: number;
}

export interface ApiProjectsInterface {
  projects: ProjectsInterface[];
}
