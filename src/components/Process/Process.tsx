import { processSteps } from "../../portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Process.css";

interface ProcessStep {
  phase: string;
  title: string;
  description: string;
}

const Process: React.FC = () => {
  const ref = useScrollReveal();
  if (!processSteps || !processSteps.length) return null;

  return (
    <section ref={ref} id="process" className="section process reveal">
      <h2 className="section__title">How I Work</h2>

      <div className="process__steps">
        {processSteps.map((step: ProcessStep, i: number) => (
          <div key={i} className="process__step">
            <span className="process__phase">{step.phase}</span>
            <h3 className="process__title">{step.title}</h3>
            <p className="process__description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
