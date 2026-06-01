import { experience } from "../../portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Experience.css";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

const Experience: React.FC = () => {
  const ref = useScrollReveal();
  if (!experience || !experience.length) return null;

  return (
    <section ref={ref} id="experience" className="section experience reveal">
      <h2 className="section__title">Experience</h2>

      <div className="experience__list">
        {experience.map((item: ExperienceItem, i: number) => (
          <div key={i} className="experience__item">
            <div className="experience__header">
              <div className="experience__left">
                <h3 className="experience__company">{item.company}</h3>
                <p className="experience__role">{item.role}</p>
              </div>
              <div className="experience__right">
                <span className="experience__period">{item.period}</span>
                <span className="experience__location">{item.location}</span>
              </div>
            </div>
            <ul className="experience__highlights">
              {item.highlights.map((point: string, j: number) => (
                <li key={j} className="experience__highlight-item">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
