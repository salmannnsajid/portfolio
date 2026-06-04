import { Container, Row, Col } from "react-bootstrap";
import { experience } from "../../portfolio";

const Home2: React.FC = () => {
  return (
    <Container fluid className="home-about-section" id="experience">
      <Container>
        {/* Experience timeline */}
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={12}>
            <h1 className="project-heading">
              Professional <strong className="purple">Experience</strong>
            </h1>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center" }}>
          <Col md={10}>
            <div className="experience-timeline">
              {experience.map((item, i) => (
                <div key={i} className="exp-item">
                  <div className="exp-marker" />
                  <div className="exp-content">
                    <h4 className="exp-company" style={{ color: "#c770f0" }}>
                      {item.company}
                    </h4>
                    <p className="exp-role" style={{ color: "whitesmoke", fontWeight: 500 }}>
                      {item.role}
                    </p>
                    <p
                      className="exp-period"
                      style={{ color: "#a588c0", fontSize: "0.9em" }}
                    >
                      {item.period} · {item.location}
                    </p>
                    <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                      {item.highlights.map((h, j) => (
                        <li
                          key={j}
                          style={{
                            color: "#b0b0c8",
                            fontSize: "0.95em",
                            marginBottom: "4px",
                            listStyleType: "disc",
                          }}
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home2;
