import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
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

const ProjectContainer: React.FC<ProjectContainerProps> = ({ project }) => (
  <div className="project">
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

    <div className="project__links">
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label="source code"
          className="link link--icon"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      )}
      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label="live preview"
          className="link link--icon"
          target="_blank"
          rel="noreferrer"
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  </div>
);

export default ProjectContainer;
