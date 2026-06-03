import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { contact } from "../../portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Contact.css";

const Contact: React.FC = () => {
  const ref = useScrollReveal();
  if (!contact.email && !contact.linkedin && !contact.github) return null;

  return (
    <section ref={ref} className="section contact center reveal" id="contact">
      <h2 className="section__title">Contact</h2>
      <p className="contact__tagline">Let's build something great together.</p>

      <div className="contact__links">
        {contact.linkedin && (
          <a
            href={contact.linkedin}
            aria-label="LinkedIn"
            className="contact__link"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="contact__icon" />
            <span>LinkedIn</span>
          </a>
        )}

        {contact.github && (
          <a
            href={contact.github}
            aria-label="GitHub"
            className="contact__link"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="contact__icon" />
            <span>GitHub</span>
          </a>
        )}

        {contact.email && (
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="contact__link"
          >
            <EmailIcon className="contact__icon" />
            <span>Email</span>
          </a>
        )}
      </div>
    </section>
  );
};

export default Contact;
