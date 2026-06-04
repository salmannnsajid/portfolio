import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiVite,
  SiJest,
  SiSupabase,
  SiHtml5,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";

const techIcons = [
  { icon: <SiReact />,      label: "React.js",    color: "#61DAFB" },
  { icon: <SiNextdotjs />,  label: "Next.js",     color: "#ffffff" },
  { icon: <SiTypescript />, label: "TypeScript",  color: "#3178C6" },
  { icon: <SiJavascript />, label: "JavaScript",  color: "#F7DF1E" },
  { icon: <SiRedux />,      label: "Redux",       color: "#764ABC" },
  { icon: <SiTailwindcss />,label: "Tailwind",    color: "#06B6D4" },
  { icon: <SiHtml5 />,      label: "HTML5",       color: "#E34F26" },
  { icon: <DiCss3 />,       label: "CSS3",        color: "#1572B6" },
  { icon: <SiNodedotjs />,  label: "Node.js",     color: "#68A063" },
  { icon: <SiNestjs />,     label: "NestJS",      color: "#E0234E" },
  { icon: <SiExpress />,    label: "Express.js",  color: "#cccccc" },
  { icon: <SiPostgresql />, label: "PostgreSQL",  color: "#4169E1" },
  { icon: <SiMongodb />,    label: "MongoDB",     color: "#47A248" },
  { icon: <SiSupabase />,   label: "Supabase",    color: "#3ECF8E" },
  { icon: <SiGit />,        label: "Git",         color: "#F05032" },
  { icon: <SiVite />,       label: "Vite",        color: "#646CFF" },
  { icon: <SiJest />,       label: "Jest",        color: "#C21325" },
];

const Techstack: React.FC = () => {
  return (
    <div className="tech-pill-container">
      {techIcons.map(({ icon, label, color }, i) => (
        <div key={i} className="tech-pill">
          <span style={{ color, display: "flex", fontSize: "1.3em" }}>{icon}</span>
          <span className="tech-pill-label">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Techstack;
