import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import ProjectCards from "./ProjectCards";
import { projects } from "../../portfolio";

const ProjectsPage: React.FC = () => {
  return (
    <Container fluid className="project-section" id="project">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, i) => (
            <Col md={4} className="project-card" key={i}>
              <ProjectCards
                isBlog={false}
                title={project.name}
                description={project.description}
                demoLink={project.livePreview}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default ProjectsPage;
