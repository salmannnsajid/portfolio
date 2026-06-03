import "./ProjectContainer.css";

interface Project {
  name: string;
  description: string;
  stack?: string[];
  sourceCode?: string;
  livePreview?: string;
}

interface ProjectContainerProps {
  project: Project;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({ project }) => {
  const href = project.livePreview || project.sourceCode;

  return (
    <a
      className="project"
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ cursor: href ? "pointer" : "default", textDecoration: "none" }}
    >
      <div className="project__top">
        <h3 className="project__name">{project.name}</h3>
        {project.livePreview && (
          <span className="project__live-badge">Live</span>
        )}
      </div>

      <p className="project__description">{project.description}</p>

      {project.stack && (
        <ul className="project__stack">
          {project.stack.map((item, i) => (
            <li key={i} className="project__stack-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </a>
  );
};

export default ProjectContainer;
