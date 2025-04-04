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

  const downloadFile = async () => {
    const url =
      "https://raw.githubusercontent.com/salmannnsajid/portfolio/master/public/resume.pdf"; // Raw file URL
    const response = await fetch(url);
    const blob = await response.blob();

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.pdf"; // File name for the download
    link.click();
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
