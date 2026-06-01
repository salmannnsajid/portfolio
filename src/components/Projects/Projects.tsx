import { projects } from "../../portfolio";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Projects.css";

interface Project {
  name: string;
  description: string;
  stack?: string[];
  sourceCode?: string;
  livePreview?: string;
}

const Projects: React.FC = () => {
  const ref = useScrollReveal();
  if (!projects.length) return null;

  return (
    <section ref={ref} id="projects" className="section projects reveal">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        {projects.map((project: Project, i) => (
          <ProjectContainer key={i} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
