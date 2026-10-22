export type ProjectCategory = 
  | 'All'
  | 'Generative AI'
  | 'Computer Vision'
  | 'Applied ML'
  | 'Cloud & DevOps';

export interface StatChip {
  label: string;
  metric: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Generative AI' | 'Computer Vision' | 'Applied ML' | 'Cloud & DevOps';
  outcome: string;
  metricBadge?: string;
  details: string[];
  tech: string[];
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
  details?: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
}

export interface RecognitionItem {
  title: string;
  detail: string;
  highlight?: string;
}

export interface SocialLinks {
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  leetcode: string;
}

export interface PortfolioData {
  meta: {
    name: string;
    monogram: string;
    role: string;
    headline: string;
    heroStatement: string;
    statusBadges?: string[];
    profilePhoto: {
      enabled: boolean;
      src: string;
      alt: string;
    };
    resume: {
      enabled: boolean;
      url: string;
    };
  };
  social: SocialLinks;
  stats: StatChip[];
  about: {
    narrative: string;
    focusAreas: {
      title: string;
      description: string;
    }[];
  };
  projects: ProjectItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  certifications?: CertificationItem[];
  recognition: RecognitionItem[];
  contact: {
    heading: string;
    invitation: string;
    responseTimeNote: string;
  };
}

