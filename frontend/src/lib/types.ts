export interface Project {
  id: string;
  slug: string;
  title: string;
  status: string;
  timeline: string;
  tagline: string;
  overview: string[];
  inspiration: string;
  runCommands: {
    comment: string;
    cmd: string;
  }[];
  resourceLinks: {
    label: string;
    url: string;
    type?: 'repo' | 'demo' | 'doc';
    note?: string;
  }[];
  techStack: {
    name: string;
    role: string;
  }[];
  tags: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
}

export interface TechSkillGroup {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface OfflineInterest {
  title: string;
  description: string;
  iconName: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  handle: string;
  role: string;
  location: string;
  statusBadge: string;
  shortBio: string;
  bioParagraphs: string[];
  mantra: {
    quote: string;
    author: string;
  };
  email: string;
  phone: string;
  githubUrl: string;
  socials: SocialLink[];
  offlineInterests: OfflineInterest[];
  education: EducationItem[];
  certifications: string[];
  languagesSpoken: string[];
}
