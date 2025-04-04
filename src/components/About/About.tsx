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
  role?: string;
  description?: string;
  resume?: string;
  social?: SocialLinks;
}

const About: React.FC = () => {
  const { name, role, description, resume, social } = about as AboutProps;

  const downloadPDF = (): void => {
    const pdfPath = `${window.location.origin}/resume.pdf`; // Full URL
    console.log("Downloading:", pdfPath);

    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <button
            onClick={downloadPDF}
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
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
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
