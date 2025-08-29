const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "",
  title: "JS.",
};

const about = {
  name: "Salman Sajid",
  role: "Front End Engineer",
  description:
    "Frontend Developer with over 5 years of experience specializing in React.js and Next.js. Proven track record of developing intuitive and user-friendly interfaces, optimizing performance, and delivering high-quality web applications. Skilled in integrating advanced features and collaborating with cross-functional teams to enhance user engagement and streamline business processes.",
  resume:
    "https://github.com/salmannnsajid/portfolio/blob/master/public/resume.pdf",
  social: {
    linkedin: "https://linkedin.com/in/salman-sajid-77297b1ba/",
    github: "https://github.com/salmannnsajid",
  },
};

const projects = [
  {
    name: "Galileo Protocol",
    description:
      "Contributed to the development of the Galileo Protocol, a cutting-edge tokenization platform aimed at transforming the ownership and authentication of luxury goods and real-world assets. The protocol is built to support EVM-compatible blockchains and utilizes advanced AI and machine learning algorithms.",
    stack: ["React", "Redux", "Material UI"],
  },
  {
    name: "E-Commerce Store",
    description:
      "A full-featured e-commerce platform where users can browse products, add items to cart, manage orders, and securely checkout. Built with a Next.js frontend and a NestJS backend. The backend provides a RESTful API for authentication, product management, and order handling, all powered by PostgreSQL with TypeORM. Includes role-based access for customers and admins, product filtering, and responsive design.",
    stack: [
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Stripe API",
    ],
  },
  {
    name: "Expense Tracker",
    description:
      "This expense tracker React app helps users track income and expenses, set budgets, and view financial summaries.",
    stack: ["React", "Material UI"],
    livePreview: "https://salmannnsajid.github.io/expense-tracker/",
  },
  {
    name: "Inventory Management System",
    description:
      "A backend-driven application to manage inventory, track stock levels, record purchases/sales, and generate reports for businesses.",
    stack: ["NestJS", "PostgreSQL", "TypeORM", "Swagger"],
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Zustand",
  "React Hook Form",
  "Zod",
  "TanStack Query",
  "Material UI",
  "Tailwind CSS",
  "Chakra UI",
  "Bootstrap",
  "SASS",
  "Styled Components",
  "Git",
  "REST API",
  "Node.js",
  "NestJS",
  "Express.js",
  "PostgreSQL",
  "TypeORM",
  "Web3 Integration",
  "Socket.io",
];

const contact = {
  email: "salmansajid141@gmail.com",
};

export { header, about, projects, skills, contact };
