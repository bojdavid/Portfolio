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
  cvUrl: '/OlajideBello.pdf',
  cvFileName: 'OlajideBello_CV.pdf',
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
  ],
  pages: {
    home: {
      title: 'Olajide Bello | Fullstack Developer',
      description: 'Fullstack Developer skilled in building pixel-perfect, responsive web applications and scalable backend systems using Svelte, React, Tailwind CSS, TypeScript, Python (FastAPI), NestJS, and modern cloud platforms.'
    },
    about: {
      title: 'About | Olajide Bello',
      description: 'Background, career timeline, and offline interests of Olajide Bello, Fullstack Developer.'
    },
    projects: {
      title: 'Projects | Olajide Bello',
      description: 'A curated list of applications, distributed platforms, and developer tooling engineered by Olajide Bello.',
      badge: '// THE REPOSITORY',
      heading: 'Selected Work',
      subheading: 'A curated list of applications, distributed platforms, and developer tooling I have engineered, tested, and shipped. Click into detail views to inspect the architectures.'
    },
    cv: {
      title: 'Curriculum Vitae | Olajide Bello',
      description: 'Official Curriculum Vitae of Olajide Bello, Fullstack Developer.'
    },
    contact: {
      title: 'Contact | Olajide Bello',
      description: 'Direct contact channels, messaging, and professional networks for Olajide Bello.',
      badge: '// DIRECT CHANNELS',
      heading: 'Get in Touch',
      subheading: 'Whether you want to build a high-performance web application, discuss database pipelines, or explore collaboration opportunities, reach out through your preferred channel.'
    }
  },
  contacts: [
    {
      id: 'email',
      name: 'Email',
      handle: 'jide.bello15@gmail.com',
      copyValue: 'jide.bello15@gmail.com',
      actionUrl: 'mailto:jide.bello15@gmail.com',
      actionLabel: 'Send Email',
      icon: 'mail',
      badge: 'PRIMARY',
      description: 'Direct inbox for job opportunities, contracts, and software architecture discussions.'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      handle: '+234 817 967 163',
      copyValue: '+234817967163',
      actionUrl: 'https://wa.me/234817967163',
      actionLabel: 'Chat on WhatsApp',
      icon: 'whatsapp',
      badge: 'FAST RESPONSE',
      description: 'Instant direct messaging for quick consultations, questions, and project check-ins.'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'olajide-bello-a183621bb',
      copyValue: 'https://linkedin.com/in/olajide-bello-a183621bb',
      actionUrl: 'https://linkedin.com/in/olajide-bello-a183621bb',
      actionLabel: 'View Profile',
      icon: 'linkedin',
      badge: 'NETWORK',
      description: 'Professional experience, career history, recommendations, and connection requests.'
    },
    {
      id: 'github',
      name: 'GitHub',
      handle: 'bojdavid',
      copyValue: 'https://github.com/bojdavid',
      actionUrl: 'https://github.com/bojdavid',
      actionLabel: 'Browse Repos',
      icon: 'github',
      badge: 'CODEBASE',
      description: 'Open-source software projects, code architecture, and continuous development history.'
    },
    {
      id: 'phone',
      name: 'Phone Call',
      handle: '+234 817 967 163',
      copyValue: '+234817967163',
      actionUrl: 'tel:+234817967163',
      actionLabel: 'Call Directly',
      icon: 'phone',
      badge: 'VOICE',
      description: 'Direct cellular voice line during business hours (West Africa Time / UTC+1).'
    }
  ]
};


