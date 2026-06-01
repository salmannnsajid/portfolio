const header = {
  homepage: "",
  title: "JS.",
};

const about = {
  name: "Salman Sajid",
  role: "Full Stack Developer",
  description:
    "Full Stack Developer with 5+ years of experience building production-grade React/Next.js applications across SaaS, blockchain, and enterprise platforms. Currently shipping The Business Hub Pakistan — a live multi-portal SaaS product with 6,000+ active users. Fluent across the full stack — React and Next.js on the frontend, Node.js and NestJS on the backend, PostgreSQL and Supabase for data, and N8N for workflow automation.",
  resume:
    "https://github.com/salmannnsajid/portfolio/blob/master/public/resume.pdf",
  social: {
    linkedin: "https://linkedin.com/in/salman-sajid-77297b1ba/",
    github: "https://github.com/salmannnsajid",
  },
};

const experience = [
  {
    company: "Xeven Solutions",
    role: "Full Stack Developer — MERN + Next.js & NestJS",
    period: "Jul 2025 – Present",
    location: "Lahore, Pakistan",
    highlights: [
      "Delivered The Business Hub Pakistan — multi-portal SaaS (admin, investor, founder) serving 6,000+ active users",
      "Reduced average API response time from ~200ms to ~140ms via optimized PostgreSQL queries and NestJS services",
      "Cut admin reporting time by ~60% with ApexCharts analytics dashboards for Meer Group",
      "Enabled zero-downtime deployments via GitHub Actions CI/CD pipelines on every pull request merge",
    ],
  },
  {
    company: "Argon Tech Inc.",
    role: "React / Next.js Developer",
    period: "Nov 2022 – Jul 2025",
    location: "Lahore, Pakistan",
    highlights: [
      "Owned frontend of Galileo Protocol — blockchain-integrated platform — across 50+ components over 2.5 years",
      "Achieved 35% reduction in UI load time through memoization and component-level code splitting",
      "Cut state-related bugs by ~40% by refactoring global state to a structured Redux architecture with typed slices",
      "Shipped community Voting Platform MVP in 6 weeks using React.js and Chakra UI",
    ],
  },
  {
    company: "XISLABS",
    role: "React JS Developer / Front End Developer",
    period: "Jun 2021 – Nov 2022",
    location: "Lahore, Pakistan",
    highlights: [
      "Improved data collection efficiency ~50% for Tammam form platform with RESTful API integration",
      "Reduced invoice errors ~30% for Fatoraty POS via Redux-driven real-time state synchronization",
      "Increased Lighthouse performance scores by 20 points by migrating to functional React with Hooks",
    ],
  },
];

const projects = [
  {
    name: "The Business Hub Pakistan",
    description:
      "Live role-based SaaS portal (admin, investor, founder) serving 6,000+ active users. Features Supabase auth, real-time database with row-level security, proposal workflows, bulk notifications, and analytics dashboards — reducing manual reporting effort by ~60% for Meer Group.",
    stack: ["React.js", "Vite", "Supabase", "Tailwind CSS", "shadcn/ui", "ApexCharts", "N8N"],
    livePreview: "https://thebusinesshub.pk",
  },
  {
    name: "Covis — AI-Driven Enterprise SaaS",
    description:
      "Frontend modules for an AI-powered multi-tenant enterprise platform with AI agent dashboards, automated proposal generation, client management portals, and a full Jira-style project management module with Kanban drag-and-drop and sprint planning.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS", "shadcn/ui", "GitHub Actions"],
    livePreview: "https://pms.covis.ai",
  },
  {
    name: "MyShahada",
    description:
      "World's first online Shahada platform — an Islamic education and certification portal connecting new Muslims with live scholars for verified revert certificates. Features Quran study, Hadith exploration, prayer times, mosque locator, halal food finder, and structured courses on Islamic fundamentals.",
    stack: ["Next.js", "Tailwind CSS", "Contentful CMS", "Node.js"],
    livePreview: "https://myshahada.net/home",
  },
];

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux", "Zustand", "TanStack Query", "Tailwind CSS", "Material UI", "shadcn/ui", "HTML5", "CSS3"],
  },
  {
    category: "Backend & Data",
    skills: ["Node.js", "NestJS", "Express.js", "PostgreSQL", "Supabase", "MongoDB", "RESTful APIs"],
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "GitHub Actions CI/CD", "Vite", "N8N Automation", "WebSockets", "Jest", "Cypress"],
  },
];

const skills = [
  "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux", "Zustand",
  "TanStack Query", "Material UI", "shadcn/ui", "Tailwind CSS", "HTML5", "CSS3",
  "Node.js", "NestJS", "Express.js", "PostgreSQL", "Supabase", "MongoDB", "RESTful APIs",
  "Git", "GitHub Actions CI/CD", "Vite", "N8N Automation", "WebSockets", "Jest", "Cypress",
];

const contact = {
  email: "salmansajid141@gmail.com",
};

export { header, about, experience, projects, skillGroups, skills, contact };
