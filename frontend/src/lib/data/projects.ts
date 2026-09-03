import type { Project } from '$lib/types';

export const projectsData: Project[] = [
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
];
