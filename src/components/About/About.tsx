import { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { about } from "../../portfolio";
import "./About.css";

interface SocialLinks {
  github?: string;
  linkedin?: string;
}

interface AboutProps {
  name?: string;
  description?: string;
  resume?: string;
  social?: SocialLinks;
}

const roles = [
  "Full Stack Engineer",
  "React & Next.js Craftsman",
  "SaaS Platform Architect",
  "Node.js API Architect",
  "Web3 Interface Engineer",
  "Web Performance Strategist",
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "6,000+", label: "Active Users" },
  { value: "3", label: "Companies" },
];

const About: React.FC = () => {
  const { name, description, resume, social } = about as AboutProps;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animClass, setAnimClass] = useState("role-fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimClass("role-fade-out");
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setAnimClass("role-fade-in");
      }, 450);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const downloadFile = async () => {
    const url =
      "https://raw.githubusercontent.com/salmannnsajid/portfolio/master/public/resume.pdf";
    const response = await fetch(url);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <div className="about center">
      <div className="about__blob about__blob--1" aria-hidden="true" />
      <div className="about__blob about__blob--2" aria-hidden="true" />
      <div className="about__blob about__blob--3" aria-hidden="true" />

      {name && (
        <h1 className="about__greeting">
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      <h2 className="about__role">
        A <span className={`about__role-text ${animClass}`}>{roles[currentIndex]}</span>
      </h2>

      <p className="about__desc">{description}</p>

      <div className="about__stats">
        {stats.map((stat, i) => (
          <div key={i} className="about__stat">
            <span className="about__stat-value">{stat.value}</span>
            <span className="about__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="about__contact center">
        {resume && (
          <button
            onClick={downloadFile}
            type="button"
            className="btn btn--outline"
          >
            Resume
          </button>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
