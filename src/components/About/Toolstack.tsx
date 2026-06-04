import {
  SiGithubactions,
  SiPostman,
  SiNetlify,
  SiSlack,
  SiClaude,
  SiN8N,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const tools = [
  { icon: <VscVscode />,        label: "VS Code",         color: "#007ACC" },
  { icon: <SiClaude />,         label: "Claude",          color: "#CC785C" },
  { icon: <SiN8N />,            label: "n8n",             color: "#EA4B71" },
  { icon: <SiGithubactions />,  label: "GitHub Actions",  color: "#2088FF" },
  { icon: <SiPostman />,        label: "Postman",         color: "#FF6C37" },
  { icon: <SiNetlify />,        label: "Netlify",         color: "#00C7B7" },
  { icon: <SiSlack />,          label: "Slack",           color: "#E01E5A" },
];

const Toolstack: React.FC = () => {
  return (
    <div className="tech-pill-container" style={{ paddingBottom: "50px" }}>
      {tools.map(({ icon, label, color }, i) => (
        <div key={i} className="tech-pill">
          <span style={{ color, display: "flex", fontSize: "1.3em" }}>{icon}</span>
          <span className="tech-pill-label">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Toolstack;
