import { capabilities } from "../../portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Capabilities.css";

interface Capability {
  title: string;
  description: string;
}

const Capabilities: React.FC = () => {
  const ref = useScrollReveal();
  if (!capabilities || !capabilities.length) return null;

  return (
    <section ref={ref} id="capabilities" className="section capabilities reveal">
      <h2 className="section__title">Capabilities</h2>

      <div className="capabilities__grid">
        {capabilities.map((cap: Capability, i: number) => (
          <div key={i} className="capability">
            <h3 className="capability__title">{cap.title}</h3>
            <p className="capability__description">{cap.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
