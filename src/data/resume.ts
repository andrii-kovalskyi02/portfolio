export const personalInfo = {
  name: 'Andrii Kovalskyi',
  firstName: 'Andrii',
  lastName: 'Kovalskyi',
  title: 'Software Engineer',
  email: import.meta.env.VITE_EMAIL as string,
  phone: import.meta.env.VITE_PHONE as string,
  location: 'The Hague, Netherlands',
  linkedin: 'https://www.linkedin.com/in/andrii-kovalskyi-639b3b297/',
  github: 'https://github.com/andrii-kovalskyi02',
  whatsapp: import.meta.env.VITE_WHATSAPP as string,
}

export const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '5+', label: 'Certifications' },
  { value: '5', label: 'Languages Spoken' },
]

export const skillGroups = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vue', 'Nuxt', 'Vite', 'Redux', 'Tailwind CSS', 'Material UI', 'Framer Motion', 'SCSS', 'HTML5', 'Figma'],
  },
  {
    category: 'Backend',
    items: ['PHP', 'Node.js', 'NestJS', 'Python', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Infrastructure',
    items: ['AWS', 'Cloudflare', 'Vercel', 'Docker', 'CI/CD', 'Linux', 'Git / GitHub'],
  },
  {
    category: 'AI',
    items: ['OpenAI', 'Claude', 'OpenRouter'],
  },
]

export const experience = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Touch Tree Technology',
    type: 'Full-time',
    period: 'Jun 2024 — Present',
    location: 'The Hague, NL · Hybrid',
    tech: ['React', 'TypeScript', 'PHP', 'AWS', 'Docker', 'CI/CD'],
    bullets: [
      'Leading frontend development for a web-based CRM platform tailored for publishers',
      'Ensuring performance, responsiveness, and visual consistency across white-label deployments',
      'Managing CI/CD pipelines and AWS infrastructure (ECS, EC2, S3)',
      'Holding architectural and technical mentorship responsibilities and maintaining engineering best practices',
      'Leveraging AI tools (Claude, ChatGPT, DeepSeek) to accelerate code generation and debugging',
    ],
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Freelance',
    type: 'Full-time',
    period: 'Oct 2022 — Oct 2023',
    location: 'Remote',
    tech: ['React', 'TypeScript', 'Redux', 'SCSS', 'HTML', 'CSS'],
    bullets: [
      'Built scalable web applications using React, Redux, and TypeScript',
      'Implemented responsive design principles ensuring quality across all devices',
      'Optimized web applications for speed and performance',
      'Created reusable CSS architecture using SCSS and BEM methodology',
    ],
  },
  {
    id: 3,
    role: 'IT Specialist',
    company: 'Institute for Training, Employability & Learning Mobility',
    type: 'Erasmus+ Internship',
    period: 'May 2021',
    location: 'Bologna, Italy · On-site',
    tech: ['WordPress', 'HTML', 'CSS', 'PHP'],
    bullets: [
      'Developed website structure and theme for the Europe for VET+ 2 project',
      'Implemented Polish translation module and SSL security',
      'Liaised with English-speaking technical teams for plugin compatibility',
    ],
  },
]

export const projects = [
  {
    id: 1,
    name: 'Gadget Galaxy',
    emoji: '📱',
    description:
      'A functional e-commerce platform for exploring phones and tablets with Redux-powered cart, REST API integration, and full product filtering.',
    tech: ['React', 'TypeScript', 'Redux', 'REST API', 'SCSS'],
    demo: 'https://andrii-kovalskyi02.github.io/react-gadget-store/',
    code: 'https://github.com/andrii-kovalskyi02/react-gadget-store',
    featured: true,
  },
  {
    id: 2,
    name: 'WeatherWhisper',
    emoji: '☁️',
    description:
      'A weather forecast application built on Next.js delivering accurate location-based predictions with an intuitive, responsive interface.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    demo: 'https://next-weather-forecast.vercel.app',
    code: 'https://github.com/andrii-kovalskyi02/next-weather-forecast',
    featured: true,
  },
  {
    id: 3,
    name: 'Estate Hub',
    emoji: '🏡',
    description:
      'A full-featured real estate listing platform built with Vue 3 and Pinia, enabling users to browse, create, edit, and favorite property listings with advanced search and sorting.',
    tech: ['Vue 3', 'TypeScript', 'Pinia', 'Vue Router', 'SCSS', 'Vite'],
    demo: 'https://estate-hub.vercel.app',
    code: 'https://github.com/andrii-kovalskyi02/estate-hub',
    featured: true,
  },
  {
    id: 4,
    name: 'Holld Yachts',
    emoji: '⛵',
    description:
      'A luxury yacht manufacturer website showcasing carbon-built catamarans crafted with Dutch superyacht precision and high-performance engineering.',
    tech: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'UI/UX'],
    demo: 'https://www.holld.com/',
    code: '',
    featured: false,
  },
  {
    id: 5,
    name: '2048 Puzzle',
    emoji: '🎮',
    description:
      'Classic 2048 puzzle game implemented in vanilla JavaScript with smooth tile animations and keyboard/touch controls.',
    tech: ['HTML', 'CSS/SCSS', 'JavaScript', 'BEM'],
    demo: 'https://andrii-kovalskyi02.github.io/2048_game/',
    code: 'https://github.com/andrii-kovalskyi02/2048_game',
    featured: false,
  },
  {
    id: 6,
    name: 'Task Master',
    emoji: '📋',
    description:
      'A powerful task management application with full CRUD operations, React state management, and seamless REST API integration.',
    tech: ['React', 'TypeScript', 'REST API', 'HTML'],
    demo: 'https://andrii-kovalskyi02.github.io/todo_app/',
    code: 'https://github.com/andrii-kovalskyi02/todo_app',
    featured: false,
  },
  {
    id: 7,
    name: 'Luna Sonic',
    emoji: '🔊',
    description:
      'Landing page for CrazyBaby Luna — a futuristic Kickstarter wireless speaker — with focus on animation and visual storytelling.',
    tech: ['HTML', 'CSS/SCSS', 'JavaScript', 'BEM'],
    demo: 'https://andrii-kovalskyi02.github.io/crazybaby-landing/',
    code: 'https://github.com/andrii-kovalskyi02/crazybaby-landing',
    featured: false,
  },
]

export const education = {
  degree: 'IT Technician • Vocational School',
  school: 'Kazimierz Gzowski Complex of Technical & General Education Schools',
  location: 'Opole, Poland',
  period: '2018 — 2022',
  highlights: ['Extended Program in Mathematics and Physics', 'EE.08 Certification', 'EE.09 Certification'],
}

export const certifications = [
  { title: 'Cloud Computing on AWS', issuer: 'Amazon Web Services', url: 'https://www.udemy.com/certificate/UC-e70b25b9-c14c-4fa1-b913-7285a6d7c937/' },
  { title: 'Frontend Development', issuer: 'Mate Academy — React, Redux, TypeScript', url: 'https://drive.google.com/file/d/1NGvbDtx4NXRU0wU8m1O5d8T697aBd1dR/view' },
  { title: 'CS50 Introduction to Computer Science', issuer: 'Harvard / Prometheus', url: 'https://drive.google.com/file/d/10bYo_jqRxqj88EKz8lcrJygesWV1jfO1/view' },
  { title: 'EE.08 — Computer Systems Assembly & Networks', issuer: 'Polish Examination Board (OKE)', url: 'https://drive.google.com/file/d/1_bMnTkRoYwcqc9fS5dsRR3fGSrfnGQDb/view' },
  { title: 'EE.09 — Website & Database Programming', issuer: 'Polish Examination Board (OKE)', url: 'https://drive.google.com/file/d/1_bMnTkRoYwcqc9fS5dsRR3fGSrfnGQDb/view' },
  { title: 'CodeWars', issuer: '100+ Kata Completed', url: '' },
]

export const achievements = [
  'Architected and provisioned AWS infrastructure from scratch for a production CRM platform',
  'Mentored a junior intern to a confident junior developer through regular code reviews and pair programming',
  'Passed Polish state-level professional IT certification exams (EE.08 & EE.09)',
  'Selected for an internship in Italy under the Erasmus+ program',
  'Led a virtual IT equipment sales company during COVID-19, achieving 1st place in a business competition',
  'Type at 60+ words per minute',
]
