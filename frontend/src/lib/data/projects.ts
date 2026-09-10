import type { Project } from '$lib/types';

export const projectsData: Project[] = [
  {
    id: 'spotify-analytics',
    slug: 'spotify-analytics',
    title: 'Spotify Analytics',
    status: 'Completed',
    timeline: 'Sep 2025 - Nov 2025',
    tagline: 'A premium web app that connects to your Spotify account to surface deep, visual insights into your listening habits.',
    tags: ['SvelteKit', 'Tailwind CSS', 'Skeleton UI', 'Spotify API'],
    featured: false,
    overview: [
      'Spotify Analytics is a SvelteKit application that authenticates with a user\'s Spotify account via the PKCE flow and transforms raw listening data into an in-depth, visually rich analytics dashboard.',
      'The interface is built on Tailwind CSS and Skeleton UI to deliver a polished, premium feel, while the app handles secure token exchange and API communication entirely client-side without exposing sensitive credentials.'
    ],
    inspiration:
      'I wanted a way to actually see my listening habits beyond Spotify\'s yearly Wrapped snapshot, something available year-round and dug deeper into the data. That curiosity turned into a project to build a proper analytics layer on top of the Spotify API myself.',
    runCommands: [
      { comment: '# Clone repository and install dependencies', cmd: 'git clone https://github.com/bojdavid/SpotifyAnalytics.git && cd SpotifyAnalytics && npm install' },
      { comment: '# Configure environment variables in .env', cmd: 'PUBLIC_CLIENT_ID="your_spotify_client_id_here"\nPUBLIC_REDIRECT_URI="http://127.0.0.1:3000/callback"' },
      { comment: '# Start the development server', cmd: 'npm run dev' }
    ],
    resourceLinks: [
      { label: 'Open Repository', url: 'https://github.com/bojdavid/SpotifyAnalytics', type: 'repo' },
      { label: 'Live Demo', url: 'https://bojdavid.xyz', type: 'demo' }
    ],
    techStack: [
      { name: 'SvelteKit', role: 'Core application framework' },
      { name: 'Tailwind CSS', role: 'Utility-first styling' },
      { name: 'Skeleton UI', role: 'Component library' },
      { name: 'Spotify API (PKCE)', role: 'Authentication & data source' }
    ]
  },
  {
    id: 'url-shortener',
    slug: 'url-shortener',
    title: 'URL Shortener',
    status: 'Completed',
    timeline: 'Jun 2026 - Jul 2026',
    tagline: 'A production-ready, full-stack URL shortener with click analytics, built on a containerized React, NestJS, and PostgreSQL architecture behind Nginx.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'Docker', 'Nginx'],
    featured: false,
    overview: [
      'URL Shortener is a full-stack application that goes beyond basic link shortening, offering user authentication, click analytics and visit tracking, with team collaboration features planned for a future release.',
      'The system follows a reverse proxy architecture where Nginx acts as the single public entry point, routing traffic to a React (Vite) frontend and a NestJS API while keeping the backend and PostgreSQL database isolated inside Docker\'s internal network. This design eliminates CORS issues, minimizes the public attack surface, and keeps each service cleanly separated by responsibility.'
    ],
    inspiration:
      'I wanted to move past toy CRUD projects and build something with a real production topology, proper service isolation, a reverse proxy, an internal-only database, and containerized deployment, rather than just an app that happens to work locally.',
    runCommands: [
      { comment: '# Clone repository', cmd: 'git clone https://github.com/bojdavid/url-shortner.git && cd url-shortner' },
      { comment: '# Configure root, backend, and frontend .env files (see README)', cmd: 'cp .env.example .env' },
      { comment: '# Build and start all services with Docker Compose', cmd: 'docker compose up --build' }
    ],
    resourceLinks: [
      { label: 'Open Repository', url: 'https://github.com/bojdavid/url-shortner', type: 'repo' }
    ],
    techStack: [
      { name: 'React (Vite)', role: 'Frontend UI, served as static files' },
      { name: 'NestJS', role: 'REST API & business logic' },
      { name: 'PostgreSQL', role: 'Persistent data storage' },
      { name: 'Nginx', role: 'Reverse proxy & single public entry point' },
      { name: 'Docker / Docker Compose', role: 'Containerized deployment' }
    ]
  },
  {
    id: 'image-gallery',
    slug: 'image-gallery',
    title: 'Image Gallery',
    status: 'Completed',
    timeline: 'Feb 19 2025 - Feb 28 2025',
    tagline: 'A fast, infinitely scrolling image gallery built with SvelteKit that streams high-quality photos from the Pexels API.',
    tags: ['SvelteKit', 'Tailwind CSS', 'Skeleton UI', 'Pexels API', 'Vercel'],
    featured: false,
    overview: [
      'Image Gallery is a SvelteKit application that fetches and displays high-quality photos through the Pexels API, presenting them in a clean, responsive grid styled with Tailwind CSS and Skeleton UI.',
      'The gallery implements infinite scroll using the Intersection Observer API, automatically loading additional images as the user approaches the end of the page for a seamless, uninterrupted browsing experience. The app is deployed on Vercel using SvelteKit\'s Vercel adapter.'
    ],
    inspiration:
      'I originally planned to use JSON Placeholder\'s photos endpoint for a quick gallery build, but the images simply weren\'t rendering reliably. Rather than settle for a broken demo, I swapped in the Pexels API and used the detour as a chance to implement proper infinite scrolling with the Intersection Observer instead of basic pagination.',
    runCommands: [
      { comment: '# Clone repository', cmd: 'git clone https://github.com/bojdavid/GalleryApp.git && cd GalleryApp' },
      { comment: '# Install dependencies', cmd: 'npm install' },
      { comment: '# Start the development server', cmd: 'npm run dev' }
    ],
    resourceLinks: [
      { label: 'Open Repository', url: 'https://github.com/bojdavid/GalleryApp', type: 'repo' },
      { label: 'Live Demo', url: 'https://gallery-app-chi.vercel.app/', type: 'demo' }
    ],
    techStack: [
      { name: 'SvelteKit', role: 'Core application framework' },
      { name: 'Tailwind CSS', role: 'Utility-first styling' },
      { name: 'Skeleton UI', role: 'Component library' },
      { name: 'Pexels API', role: 'Image data source' },
      { name: 'Vercel', role: 'Deployment & hosting' }
    ]
  },
  {
    id: 'crossfit-figma-implementation',
    slug: 'crossfit-figma-implementation',
    title: 'Crossfit Figma Implementation',
    status: 'Completed',
    timeline: 'Aug 20 2026 - Aug 23 2026',
    tagline: 'A pixel-perfect React build of a CrossFit-themed Figma design, translating static mockups into a fully responsive, interactive interface.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Keen Slider'],
    featured: false,
    overview: [
      'This project is a pixel-perfect implementation of a CrossFit-themed Figma design, rebuilt from scratch in React with Tailwind CSS to match the source mockup as closely as possible across spacing, typography, and layout.',
      'Interactive elements such as image carousels are powered by Keen Slider, bringing the static design to life while preserving the fidelity of the original file. The project was built and deployed with Vite for a fast development workflow.'
    ],
    inspiration:
      'I wanted to sharpen my eye for translating design files into real, functioning code, matching spacing, type scale, and layout details exactly rather than approximating them. A CrossFit landing page design gave me a compact, focused brief to test how close I could get to pixel-perfect.',
    runCommands: [
      { comment: '# Clone repository', cmd: 'git clone https://github.com/bojdavid/crossFit.git && cd crossFit' },
      { comment: '# Install dependencies', cmd: 'npm install' },
      { comment: '# Start the development server', cmd: 'npm run dev' }
    ],
    resourceLinks: [
      { label: 'Open Repository', url: 'https://github.com/bojdavid/crossFit', type: 'repo' },
      { label: 'Live Demo', url: 'https://cross-fit-86a7.vercel.app/', type: 'demo' }
    ],
    techStack: [
      { name: 'React', role: 'Core UI framework' },
      { name: 'Tailwind CSS', role: 'Utility-first styling' },
      { name: 'Keen Slider', role: 'Carousel / slider interactions' },
      { name: 'Vite', role: 'Build tooling & dev server' }
    ]
  },
  {
    id: 'expense-tracker',
    slug: 'expense-tracker',
    title: 'Expense Tracker',
    status: 'Completed',
    timeline: 'Jan 2026 - Aug 2026',
    tagline: 'A full-featured personal finance app for tracking accounts, categories, transactions, and shared group expenses, built with React and Supabase.',
    tags: ['React', 'TypeScript', 'Supabase', 'Zustand', 'Tailwind CSS'],
    featured: false,
    overview: [
      'Expense Tracker is a React and TypeScript application for managing personal finances, supporting multiple accounts, custom categories, individual transactions, and shared group expenses in a single unified interface.',
      'Supabase handles authentication and backend data persistence, while Zustand manages client-side application state and React Router drives navigation across the app\'s views. The UI is styled with Tailwind CSS and uses Lucide icons throughout.'
    ],
    inspiration:
      'This project was largely "vibe coded", built in fast, iterative sessions leaning heavily on AI-assisted development to move quickly from idea to working features. I wanted to see how far that workflow could go on a real, multi-feature app rather than a small toy project, covering accounts, categories, transactions, and group expense splitting.',
    runCommands: [
      { comment: '# Clone repository', cmd: 'git clone https://github.com/bojdavid/expense-tracker.git && cd expense-tracker' },
      { comment: '# Install dependencies', cmd: 'npm install' },
      { comment: '# Start the development server', cmd: 'npm run dev' }
    ],
    resourceLinks: [
      { label: 'Open Repository', url: 'https://github.com/bojdavid/expense-tracker/tree/main', type: 'repo' },
      { label: 'Live Demo', url: 'https://expense-tracker-eta-eosin.vercel.app/', type: 'demo' }
    ],
    techStack: [
      { name: 'React', role: 'Core UI framework' },
      { name: 'TypeScript', role: 'Type safety & tooling' },
      { name: 'Supabase', role: 'Authentication & backend data' },
      { name: 'Zustand', role: 'Client-side state management' },
      { name: 'React Router', role: 'Client-side routing' },
      { name: 'Tailwind CSS', role: 'Utility-first styling' }
    ]
  },
  {
    id: 'university-athlete-repository',
    slug: 'university-athlete-repository',
    title: 'University Athlete Repository',
    status: 'Active / Ongoing',
    timeline: 'Aug 2026 - Present',
    tagline: 'A centralized athletics management ecosystem for the University of Ibadan, connecting the Directorate of Sports, coaches, captains, student-athletes, and public talent scouts.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'TypeORM', 'TypeScript'],
    featured: false,
    overview: [
      'University Athlete Repository digitizes collegiate athletics operations for the University of Ibadan, replacing paper-based clearance workflows with verifiable athlete dossiers, streamlined roster approvals, and tournament performance tracking across competitions like NUGA, FISU, and WAUG.',
      'The platform spans five core domains: public talent discovery, a student-athlete suite for profiles and clearances, a competition and achievement engine with verification queues, a coach and captain suite for roster and form management, and full sports directorate administration with audit logging and role-based access control.',
      'The backend is a modular NestJS API using TypeORM over PostgreSQL, with Cloudinary for media storage and Resend for transactional email. The frontend is a React 19 and TypeScript application with Zustand for state, React Hook Form and Zod for validated forms, and a custom Bento-grid design system built on Tailwind CSS.'
    ],
    inspiration:
      'As the captain of UI Judo, I noticed there was no centralized repository for athletes, coaches were tracking rosters and clearances manually, tournament results lived in scattered spreadsheets, and student-athletes had no verifiable, presentable record of their achievements. I built this as my final year BSc Computer Science project to solve that problem properly: a single institutional system covering eligibility, competition tracking, medal verification, and public talent discovery for the entire university.',
    runCommands: [
      { comment: '# Clone repository', cmd: 'git clone https://github.com/bojdavid/UniversityAthleteRepository.git && cd UniversityAthleteRepository' },
      { comment: '# Install backend dependencies and configure .env', cmd: 'cd backend && npm install' },
      { comment: '# Run migrations and seed the database', cmd: 'npm run migration:run && npm run seed' },
      { comment: '# Start the backend in dev mode', cmd: 'npm run start:dev' },
      { comment: '# In a new terminal, install and start the frontend', cmd: 'cd ../frontend && npm install && npm run dev' }
    ],
    resourceLinks: [
      { label: 'Open Repository', url: 'https://github.com/bojdavid/UniversityAthleteRepository', type: 'repo' },
      { label: 'Live Web Application', url: 'https://university-athlete-repository.vercel.app', type: 'demo' },
      { label: 'Interactive API Docs (Swagger)', url: 'https://university-athlete-repository.onrender.com/api/docs', type: 'doc' }
    ],
    techStack: [
      { name: 'React 19', role: 'Frontend UI framework' },
      { name: 'TypeScript', role: 'Type safety across the stack' },
      { name: 'NestJS 11', role: 'Modular backend API framework' },
      { name: 'PostgreSQL / TypeORM', role: 'Relational data & ORM' },
      { name: 'Zustand', role: 'Persistent auth & client state' },
      { name: 'React Hook Form + Zod', role: 'Form handling & validation' },
      { name: 'Cloudinary', role: 'Media storage for dossiers & uploads' },
      { name: 'Tailwind CSS', role: 'Design system & styling' }
    ]
  },
  /*
  {
    id: 'aetherdb',
    slug: 'aetherdb',
    title: 'AetherDb Engine',
    status: 'Active / Production',
    timeline: 'Jan 2024 - Present (Continuous deployments)',
    tagline: 'A distributed, lock-free key-value database engine compiled in Go for highly critical network loads.',
    tags: ['Go', 'gRPC', 'Raft', 'Docker'],
    featured: true,
    overview: [
      'AetherDb is built from scratch in Go to tackle highly irregular networking spikes inside federated server grids. Standard relational database configurations incurred unacceptable locking overhead; AetherDb bypasses this by utilizing a specialized lock-free architecture alongside memory-mapped ledger files.',
      'By leveraging a highly optimized implementation of the Raft consensus algorithm, we ensure strong consistency while maintaining transaction isolation across distributed environments.'
    ],
    inspiration:
      'This project originated from a chronic frustration with transaction overhead during live websocket telemetry bursts. I wanted to build a database engine that treated RAM as a first-class file canvas rather than relying heavily on disk-bound serialization.',
    runCommands: [
      { comment: '# Clone repository and compile binary', cmd: 'git clone https://github.com/alexrivers/aetherdb.git' },
      { comment: '# Move to root directory & compile', cmd: 'cd aetherdb && make compile' },
      { comment: '# Start local 3-node cluster', cmd: './bin/aether-cluster --nodes=3 --port=9090' }
    ],
    resourceLinks: [
      { label: 'Open Repository', url: 'https://github.com/alexrivers/aetherdb', type: 'repo' },
      { label: 'Live Sandbox Demo', url: 'https://demo.aetherdb.dev', type: 'demo', note: '* Sandbox is hosted on AWS edge nodes' }
    ],
    techStack: [
      { name: 'Go / Golang', role: 'Core runtime engine' },
      { name: 'gRPC & Protobuf', role: 'Node communications' },
      { name: 'Raft Consensus', role: 'Distributed state mechanics' },
      { name: 'Docker / K8s', role: 'Container architecture tests' }
    ]
  },
  {
    id: 'spectraflow',
    slug: 'spectraflow',
    title: 'SpectraFlow',
    status: 'Completed',
    timeline: 'Oct 2023 - Dec 2023',
    tagline: 'A real-time telemetry processing dashboard rendering 100k events/sec with zero browser lag.',
    tags: ['React', 'TypeScript', 'WebSockets', 'Rust'],
    featured: true,
    overview: [
      'SpectraFlow translates enormous streams of time-series server events into reactive canvas visualizations with zero frame drops.',
      'Utilizing WebAssembly compile targets for data parsing on worker threads and WebSockets for real-time binary synchronization.'
    ],
    inspiration:
      'Engineered to solve visual bottlenecks in observability tools when monitoring enterprise microservice clusters during simulated load tests.',
    runCommands: [
      { comment: '# Clone repository', cmd: 'git clone https://github.com/alexrivers/spectraflow.git' },
      { comment: '# Install dependencies & build WASM engine', cmd: 'cd spectraflow && npm install && npm run build:wasm' },
      { comment: '# Launch local dev interface', cmd: 'npm run dev' }
    ],
    resourceLinks: [
      { label: 'Open Repository', url: 'https://github.com/alexrivers/spectraflow', type: 'repo' },
      { label: 'Live Sandbox Demo', url: 'https://spectraflow.dev', type: 'demo' }
    ],
    techStack: [
      { name: 'React & Vite', role: 'Frontend interface layer' },
      { name: 'Rust (WASM)', role: 'High-throughput stream processing' },
      { name: 'WebSockets', role: 'Binary telemetry protocol' },
      { name: 'Tailwind CSS', role: 'Design token composition' }
    ]
  },
  {
    id: 'cargosync-api',
    slug: 'cargosync-api',
    title: 'CargoSync API',
    status: 'Completed',
    timeline: 'Jun 2023 - Aug 2023',
    tagline: 'Automated logistics tracking integrations built as secure, high-throughput microservices.',
    tags: ['Node.js', 'GraphQL', 'Redis', 'AWS'],
    featured: true,
    overview: [
      'A resilient logistics synchronization gateway coordinating supply chain freight data across 12 distinct carrier APIs.',
      'Features intelligent caching with Redis, declarative schema stitching with GraphQL, and automated retry mechanisms.'
    ],
    inspiration:
      'Designed to replace fractured webhook architectures with a unified, high-reliability event router.',
    runCommands: [
      { comment: '# Clone repository', cmd: 'git clone https://github.com/alexrivers/cargosync-api.git' },
      { comment: '# Setup environment & run containers', cmd: 'cd cargosync-api && docker compose up -d' }
    ],
    resourceLinks: [
      { label: 'Open Repository', url: 'https://github.com/alexrivers/cargosync-api', type: 'repo' }
    ],
    techStack: [
      { name: 'Node.js & TypeScript', role: 'Service backbone' },
      { name: 'GraphQL', role: 'Federated schema queries' },
      { name: 'Redis', role: 'Distributed caching & lockouts' },
      { name: 'AWS ECS', role: 'Elastic orchestration' }
    ]
  },
  {
    id: 'netgage-cli',
    slug: 'netgage-cli',
    title: 'NetGage CLI',
    status: 'Maintained',
    timeline: 'Feb 2023 - May 2023',
    tagline: 'Command line framework to test and profile local latency thresholds inside automated CI/CD runs.',
    tags: ['Python', 'Click', 'Docker', 'Git'],
    featured: false,
    overview: [
      'NetGage is a developer-first command-line utility for benchmarking packet roundtrips, DNS lookup latency, and SSL handshake overheads in CI environments.',
      'Generates formatted terminal outputs and JSON artifacts for continuous monitoring pipelines.'
    ],
    inspiration:
      'Built to automate performance regress testing before merging production pull requests.',
    runCommands: [
      { comment: '# Install via pipx or brew', cmd: 'pipx install netgage-cli' },
      { comment: '# Run benchmark against staging endpoints', cmd: 'netgage bench --targets=staging.rivers.dev --concurrency=20' }
    ],
    resourceLinks: [
      { label: 'Open Repository', url: 'https://github.com/alexrivers/netgage-cli', type: 'repo' }
    ],
    techStack: [
      { name: 'Python 3.11', role: 'Core runtime' },
      { name: 'Click & Rich', role: 'Terminal interactive UI' },
      { name: 'Docker', role: 'Containerized CI actions' }
    ]
  },
  {
    id: 'helix-auth',
    slug: 'helix-auth',
    title: 'Helix Auth',
    status: 'Completed',
    timeline: 'Nov 2022 - Jan 2023',
    tagline: 'A headless, secure authentication broker designed specifically for complex banking application suites.',
    tags: ['TypeScript', 'OAuth2', 'Redis', 'Figma'],
    featured: false,
    overview: [
      'Helix Auth is an OAuth 2.1 and OpenID Connect identity provider built with strict cryptographic guarantees and multi-factor session handshakes.',
      'Supports granular role-based access control (RBAC), token revocation lists, and audit event logs.'
    ],
    inspiration:
      'Designed to provide a self-hostable identity solution without enterprise licensing vendor lock-in.',
    runCommands: [
      { comment: '# Clone repository', cmd: 'git clone https://github.com/alexrivers/helix-auth.git' },
      { comment: '# Boot local identity server', cmd: 'npm install && npm run start:server' }
    ],
    resourceLinks: [
      { label: 'Open Repository', url: 'https://github.com/alexrivers/helix-auth', type: 'repo' }
    ],
    techStack: [
      { name: 'TypeScript', role: 'Core engine' },
      { name: 'OAuth2 / OIDC', role: 'Protocol compliance' },
      { name: 'Redis', role: 'Session store & rate limiter' }
    ]
  },
  {
    id: 'pillar-ui-kit',
    slug: 'pillar-ui-kit',
    title: 'Pillar UI Kit',
    status: 'Completed',
    timeline: 'Aug 2022 - Oct 2022',
    tagline: 'An architectural UI toolkit designed with Figma constraint properties and translated into clean React modules.',
    tags: ['React', 'CSS Modules', 'Storybook', 'Figma'],
    featured: false,
    overview: [
      'An accessible, dark-first design system crafted in Figma and exported into a zero-dependency component library.',
      'Includes 40+ accessible primitives with full keyboard navigation and high-contrast color tokens.'
    ],
    inspiration:
      'Created to bridge the design-to-code gap for distributed engineering teams needing strict consistency.',
    runCommands: [
      { comment: '# Clone & run storybook', cmd: 'git clone https://github.com/alexrivers/pillar-ui.git' },
      { comment: '# Start Storybook documentation', cmd: 'cd pillar-ui && npm run storybook' }
    ],
    resourceLinks: [
      { label: 'Open Repository', url: 'https://github.com/alexrivers/pillar-ui', type: 'repo' }
    ],
    techStack: [
      { name: 'React', role: 'Component primitives' },
      { name: 'Figma Tokens', role: 'Design source of truth' },
      { name: 'Storybook', role: 'Interactive component catalog' }
    ]
  }
  */
];
