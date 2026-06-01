import { contact } from "../../portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Contact.css";

const Contact: React.FC = () => {
  const ref = useScrollReveal();
  if (!contact.email) return null;

  return (
    <section ref={ref} className="section contact center reveal" id="contact">
      <h2 className="section__title">Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span className="btn btn--outline">Email me</span>
      </a>
    </section>
  );
};

export default Contact;
