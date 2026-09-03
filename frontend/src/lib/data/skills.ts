import type { TechSkillGroup } from '$lib/types';

export const expertiseAreas = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description:
      'Crafting pixel-perfect, responsive web interfaces using Svelte, React, Tailwind CSS, and TypeScript directly from detailed Figma designs.',
    iconName: 'Layout'
  },
  {
    id: 'backend',
    title: 'Backend Systems',
    description:
      'Designing and developing high-performance REST APIs and services with Python (FastAPI), NestJs, PostgreSQL, SQL, and MongoDB.',
    iconName: 'Server'
  },
  {
    id: 'devops',
    title: 'DevOps & Tooling',
    description:
      'Containerizing environments with Docker and Docker Compose, reverse proxying with Nginx, and deploying to Vercel and Render.',
    iconName: 'Cloud'
  },
  {
    id: 'ai-workflow',
    title: 'AI-Assisted Workflow',
    description:
      'Accelerating development velocity and rigorous testing with cutting-edge tools including Cursor, Claude Code, Antigravity, and ChatGPT.',
    iconName: 'Smartphone'
  }
];

export const techStackBadges = [
  { name: 'Svelte', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'TypeScript', category: 'language' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'NestJs', category: 'backend' },
  { name: 'Python', category: 'language' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'Docker', category: 'tools' },
  { name: 'Nginx', category: 'devops' },
  { name: 'Vercel', category: 'cloud' }
];

export const cvCompetencies: TechSkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['Svelte', 'React', 'Tailwind CSS', 'TypeScript']
  },
  {
    category: 'Backend',
    skills: ['Python (FastAPI)', 'MongoDB', 'SQL', 'NestJs']
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Nginx', 'PostgreSQL', 'Render', 'Vercel', 'Postman', 'REST APIs']
  },
  {
    category: 'AI & Developer Tooling',
    skills: ['Cursor', 'Claude Code', 'Antigravity', 'ChatGPT']
  }
];

export const terminalDefaultOutputs: Record<string, string> = {
  'curl -s https://api.bojdavid.dev/skills/highlights': JSON.stringify(
    {
      name: 'Olajide Bello (BOJ)',
      role: 'Fullstack Developer',
      location: 'Lagos, Nigeria',
      frontend: ['Svelte', 'React', 'Tailwind CSS', 'TypeScript'],
      backend: ['Python (FastAPI)', 'MongoDB', 'SQL', 'NestJs'],
      tools: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Nginx', 'PostgreSQL', 'Render', 'Vercel', 'Postman'],
      athletics: 'UI Judo Team Captain & 3x NUGA Medalist'
    },
    null,
    2
  ),
  'node --version': 'v22.14.0',
  'whoami': 'boj (Olajide Bello - Fullstack Developer @ Lagos, Nigeria)',
  'help': 'Available commands: highlights, node --version, whoami, projects, clear, help',
  'projects': 'AetherDb Engine, SpectraFlow, CargoSync API, NetGage CLI, Helix Auth, Pillar UI Kit'
};
