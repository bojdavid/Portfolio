import type { Profile } from '$lib/types';

export const profileData: Profile = {
  name: 'Olajide Bello',
  handle: 'boj.dev',
  role: 'Fullstack Developer',
  location: 'Lagos, Nigeria',
  statusBadge: 'FULLSTACK_ENGINEER_V1',
  shortBio:
    'Fullstack Developer skilled in building pixel-perfect, responsive web applications and scalable backend systems using Svelte, React, Tailwind CSS, TypeScript, Python (FastAPI), NestJS, and modern cloud platforms.',
  bioParagraphs: [
    'I am a Fullstack Developer with a B.Sc. in Computer Science from the University of Ibadan. I specialize in translating complex Figma designs into pixel-perfect, responsive interfaces, alongside architecting clean, reliable backend services with Python (FastAPI), NestJS, PostgreSQL, and MongoDB.',
    'Outside of programming, I am a competitive Judo athlete and Team Captain at the University of Ibadan (3x NUGA Medalist). The mental discipline, resilience, and tactical focus required in martial arts directly drive my approach to software engineering, team collaboration, and problem-solving.'
  ],
  mantra: {
    quote:
      'Simplicity is the soul of efficiency. The best error message is the one that never has to show up because the system works flawlessly.',
    author: 'Continuous Integration Mantra'
  },
  email: 'jide.bello15@gmail.com',
  phone: '0817967163',
  githubUrl: 'http://github.com/bojdavid',
  socials: [
    { platform: 'github', label: 'github', url: 'http://github.com/bojdavid', icon: 'Github' },
    { platform: 'linkedin', label: 'linkedin', url: 'http://linkedin.com/in/olajide-bello-a183621bb', icon: 'Linkedin' },
    { platform: 'email', label: 'email', url: 'mailto:jide.bello15@gmail.com', icon: 'Mail' }
  ],
  offlineInterests: [
    {
      title: 'Judo & Athletics',
      description:
        'Competitive athlete & Team Captain (UI); 3x NUGA Medalist (2025) and winner of the 2024 University Championship and Inter-Faculty Open Weight titles, with second place in the -81kg division. Instills discipline, leadership, and resilience.',
      iconName: 'Trophy'
    },
    {
      title: 'Personal Interests',
      description:
        'Guitar performance, thriller cinema/literature, and fine art appreciation.',
      iconName: 'Music'
    },
    {
      title: 'Exploration',
      description:
        'Passionate about traveling and exploring new environments to broaden perspectives.',
      iconName: 'Compass'
    }
  ],
  education: [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'University Of Ibadan',
      period: 'Graduate'
    }
  ],
  certifications: [
    'Competitive Athlete & Team Captain (University of Ibadan Judo)',
    '3x NUGA Medalist (2025) & University Open Weight Champion (2024)'
  ],
  languagesSpoken: [
    'English (Fluent)',
    'Yoruba'
  ]
};
