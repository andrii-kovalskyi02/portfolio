export const personalInfo = {
  name: 'Andrii Kovalskyi',
  firstName: 'Andrii',
  lastName: 'Kovalskyi',
  title: 'Software Engineer',
  email: 'andrii.kovalskyi02@gmail.com',
  phone: '+31 6 8704 1799',
  location: 'The Hague, Netherlands',
  linkedin: 'https://www.linkedin.com/in/andrii-kovalskyi-639b3b297/',
  github: 'https://github.com/andrii-kovalskyi02',
  whatsapp: 'https://wa.me/31687041799',
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
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vue', 'Nuxt', 'Redux', 'Tailwind CSS', 'Material UI', 'SCSS', 'HTML5'],
  },
  {
    category: 'Backend & APIs',
    items: ['PHP', 'Node.js', 'NestJS', 'Python', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Amazon Web Services', 'Cloudflare', 'Render', 'Vercel', 'Docker', 'CI/CD', 'Linux'],
  },
  {
    category: 'Architecture',
    items: ['SDLC', 'Agile / Scrum', 'Kanban', 'Atomic Design', 'BEM'],
  },
  {
    category: 'Tooling',
    items: ['Git / GitHub', 'Vite', 'Figma', 'VS Code', 'IntelliJ IDEA', 'Photoshop'],
  },
  {
    category: 'AI & Productivity',
    items: ['Claude', 'OpenAI', 'Cursor', 'OpenRouter'],
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
      'Mentoring an intern on frontend best practices and product development',
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
    demo: '#',
    code: '#',
    featured: true,
  },
  {
    id: 2,
    name: 'WeatherWhisper',
    emoji: '☁️',
    description:
      'A weather forecast application built on Next.js delivering accurate location-based predictions with an intuitive, responsive interface.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    demo: '#',
    code: '#',
    featured: true,
  },
  {
    id: 3,
    name: 'Task Master',
    emoji: '📋',
    description:
      'A powerful task management application with full CRUD operations, React state management, and seamless REST API integration.',
    tech: ['React', 'TypeScript', 'REST API', 'HTML'],
    demo: '#',
    code: '#',
    featured: true,
  },
  {
    id: 4,
    name: 'Luna Sonic',
    emoji: '🔊',
    description:
      'Landing page for CrazyBaby Luna — a futuristic Kickstarter wireless speaker — with focus on animation and visual storytelling.',
    tech: ['HTML', 'CSS/SCSS', 'JavaScript', 'BEM'],
    demo: '#',
    code: '#',
    featured: false,
  },
  {
    id: 5,
    name: '2048 Puzzle',
    emoji: '🎮',
    description:
      'Classic 2048 puzzle game implemented in vanilla JavaScript with smooth tile animations and keyboard/touch controls.',
    tech: ['HTML', 'CSS/SCSS', 'JavaScript', 'BEM'],
    demo: '#',
    code: '#',
    featured: false,
  },
]

export const education = {
  degree: 'IT Technician',
  school: 'Kazimierz Gzowski Complex of Technical & General Education Schools',
  location: 'Opole, Poland',
  period: '2018 — 2022',
  highlights: ['Extended Program in Mathematics and Physics', 'EE.08 Certification', 'EE.09 Certification'],
}

export const certifications = [
  { title: 'Cloud Computing on AWS', issuer: 'Amazon Web Services' },
  { title: 'Frontend Development', issuer: 'Mate Academy — React, Redux, TypeScript' },
  { title: 'CS50 Introduction to Computer Science', issuer: 'Harvard / Prometheus' },
  { title: 'EE.08 — Computer Systems Assembly & Networks', issuer: 'Polish Examination Board (OKE)' },
  { title: 'EE.09 — Website & Database Programming', issuer: 'Polish Examination Board (OKE)' },
  { title: 'CodeWars', issuer: '100+ Kata Completed' },
]

export const achievements = [
  'Passed Polish state-level professional IT certification exams (EE.08 & EE.09)',
  'Selected for an internship in Italy under the prestigious Erasmus+ program',
  'Led a virtual IT equipment sales company during COVID-19, achieving 1st place in a business competition',
  'Types at 60+ words per minute',
]
