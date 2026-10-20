const header = {
  homepage: "",
  title: "JS.",
};

const about = {
  name: "Salman Sajid",
  role: "Senior Frontend Engineer • AI Agents & Automation",
  description:
    "Frontend engineer with 5+ years shipping production React and Next.js products, now building custom AI agents with Mastra and automating business workflows with n8n. Comfortable across the stack with Node.js, NestJS, PostgreSQL, and Supabase. Known for turning loose requirements into polished, high-performance interfaces that real users depend on.",
  resume:
    "https://github.com/salmannnsajid/portfolio/blob/master/public/resume.pdf",
  social: {
    linkedin: "https://linkedin.com/in/salman-sajid-77297b1ba/",
    github: "https://github.com/salmannnsajid",
  },
};

const experience = [
  {
    company: "DigitalTribe",
    role: "Senior Frontend Developer",
    period: "Sep 2026 – Present",
    location: "Lahore, Pakistan",
    highlights: [
      "Leading development of scalable, high-performance web applications with React.js, Next.js, and TypeScript",
      "Architecting reusable component systems and guiding frontend best practices across the team",
      "Collaborating with design and backend teams to deliver polished user experiences",
    ],
  },
  {
    company: "Xeven Solutions",
    role: "Frontend / Full Stack Developer — MERN + Next.js & NestJS",
    period: "Jul 2025 – Jul 2026",
    location: "Lahore, Pakistan",
    highlights: [
      "Built web applications with Next.js, NestJS, and PostgreSQL across frontend and backend",
      "Developed scalable backend APIs and integrated them with frontend interfaces",
      "Shipped The Business Hub Pakistan (6,000+ active users) and frontend modules for Covis — see Projects",
      "Delivered efficient, maintainable solutions with modern web technologies",
    ],
  },
  {
    company: "Argon Tech Inc.",
    role: "React / Next.js Developer",
    period: "Nov 2022 – Jul 2025",
    location: "Lahore, Pakistan",
    highlights: [
      "Built and maintained responsive, modular interfaces using Next.js, React.js, and TypeScript",
      "Designed custom components and UI/UX with Tailwind CSS and Material UI, ensuring pixel-perfect, mobile-responsive layouts",
      "Managed global and local state with Redux and Zustand, simplifying app architecture and improving performance",
      "Integrated RESTful APIs and collaborated with backend teams on blockchain network integrations",
      "Maintained high code quality through code reviews, reusable component libraries, and consistent refactoring",
    ],
  },
  {
    company: "XISLABS",
    role: "React JS Developer / Front End Developer",
    period: "Jun 2021 – Nov 2022",
    location: "Lahore, Pakistan",
    highlights: [
      "Built dynamic web pages using HTML5, CSS3, and TypeScript",
      "Improved application performance by implementing Redux for state management",
      "Integrated RESTful APIs and enhanced frontend functionalities using React.js",
    ],
  },
  {
    company: "Workwox",
    role: "React JS Intern",
    period: "Feb 2021 – May 2021",
    location: "Sahiwal, Pakistan",
    highlights: [
      "Assisted in developing frontend components and gained practical experience with React.js",
    ],
  },
];

const projects = [
  {
    name: "The Business Hub Pakistan",
    description:
      "Live role-based SaaS portal (admin, investor, founder) serving 6,000+ active users. Features Supabase auth, real-time database with row-level security, proposal workflows, verification, support tickets, bulk notifications via n8n, and ApexCharts analytics dashboards — reducing manual reporting effort by ~60% for Meer Group.",
    stack: ["React.js", "Vite", "Supabase", "Tailwind CSS", "shadcn/ui", "ApexCharts", "n8n"],
    livePreview: "https://thebusinesshub.pk",
  },
  {
    name: "Covis — AI-Driven Enterprise SaaS",
    description:
      "Frontend modules for an AI-powered multi-tenant enterprise platform with AI agent dashboards, automated proposal generation, client management portals, and a full Jira-style project management module with Kanban drag-and-drop, sprint planning and backlog. GitHub Actions CI/CD deploys on every merge.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS", "shadcn/ui", "GitHub Actions"],
    livePreview: "https://covis.ai",
  },
  {
    name: "TAQWI — AI Recruitment Platform",
    description:
      "AI-based HR and recruitment platform combining multi-stage chat assessment powered by LLM integration with face-to-face AI avatar video evaluation. Built end-to-end from CEO requirements.",
    stack: ["React.js", "Node.js", "AI/LLM Integration", "Video APIs", "Tailwind CSS"],
    livePreview: "https://taqwi.ai",
  },
  {
    name: "MyShahada",
    description:
      "The first online Shahada platform — an Islamic education and certification portal connecting new Muslims with live scholars for verified revert certificates. Features Quran study, Hadith exploration, prayer times, mosque locator, halal food finder, and structured courses on Islamic fundamentals managed in Contentful CMS.",
    stack: ["Next.js", "Tailwind CSS", "Contentful CMS", "Node.js"],
    livePreview: "https://myshahada.net/home",
  },
  {
    name: "Company Assistant Agent — Mastra",
    description:
      "Custom AI agent built with Mastra that turns plain-English questions like “Which projects are at risk?” or “Is anyone overloaded?” into live answers from the company database. Purpose-built tools for project health, overdue work and team workload, a guarded text-to-SQL fallback, conversation memory, and a Next.js chat UI with streaming replies and voice mode. Every tool call is traced in Mastra Studio.",
    stack: ["Mastra", "Next.js", "TypeScript", "Vercel AI SDK", "SQLite", "Groq (LLM + Whisper)", "Docker"],
    github: "https://github.com/salmannnsajid/ai-company-assistant",
    livePreview: "https://ai-company-assistant-g64k.onrender.com/",
  },
  {
    name: "Workflow Automations — n8n",
    description:
      "Business workflow automations built with n8n: a lead capture flow that detects new leads, appends them to a Google Sheet and handles email notifications and follow-ups, plus an AI support auto-responder that matches incoming tickets against a database of prebuilt answers and replies automatically, falling back to a generic response when no match is found.",
    stack: ["n8n", "Google Sheets", "Gmail/SMTP", "LLM Integration", "Database"],
  },
];

const capabilities = [
  {
    title: "Product Strategy",
    description: "Turning fuzzy ideas and business goals into a clear, prioritized roadmap the team can actually build against.",
  },
  {
    title: "Requirements & UX",
    description: "Specs, wireframes and high-fidelity flows that remove ambiguity before a single line is written.",
  },
  {
    title: "Full-stack Build",
    description: "Hands-on delivery in React, Supabase & n8n. Shipping the thing — not just the plan for it.",
  },
  {
    title: "AI Integration",
    description: "Wiring AI into real products: chat assessment, voice-to-voice, segmentation and automation.",
  },
];

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux", "Zustand", "Tailwind CSS", "Material UI", "shadcn/ui", "HTML5", "CSS3"],
  },
  {
    category: "Backend & Data",
    skills: ["Node.js", "NestJS", "Express.js", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    category: "AI & Tools",
    skills: ["Mastra", "n8n", "Git", "GitHub Actions CI/CD", "Docker", "Vite"],
  },
];

const skills = [
  "React.js", "Next.js", "TypeScript", "JavaScript", "Redux", "Zustand",
  "Tailwind CSS", "Material UI", "shadcn/ui", "HTML5", "CSS3",
  "Node.js", "NestJS", "Express.js", "PostgreSQL", "MongoDB", "Supabase",
  "Mastra", "n8n", "Git", "GitHub Actions CI/CD", "Vite",
];

const contact = {
  email: "salmansajid141@gmail.com",
  linkedin: "https://linkedin.com/in/salman-sajid-77297b1ba/",
  github: "https://github.com/salmannnsajid",
};

export { header, about, experience, projects, capabilities, skillGroups, skills, contact };
