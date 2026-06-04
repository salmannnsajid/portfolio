import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import Type from "./Type";
import MatrixRain from "./MatrixRain";
import { about } from "../../portfolio";

const Home: React.FC = () => {
  return (
    <section id="home">
      <Container fluid className="home-section">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M{" "}
                <strong className="main-name"> {about.name}</strong>
              </h1>

              <div style={{ padding: "50px 0", textAlign: "left", paddingLeft: "50px" }}>
                <Type />
              </div>
            </Col>

            <Col
              md={5}
              style={{
                paddingBottom: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MatrixRain />
            </Col>
          </Row>
        </Container>
      </Container>

    </section>
  );
};

export default Home;
