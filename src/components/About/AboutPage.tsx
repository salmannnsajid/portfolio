import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";
import Particle from "../Particle/Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import { about, contact } from "../../portfolio";

const AboutPage: React.FC = () => {
  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>

        {/* ── Intro ── */}
        <Row style={{ justifyContent: "center", paddingTop: "60px", paddingBottom: "20px" }}>
          <Col md={10} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
              LET ME <span className="accent"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I am <span className="accent">{about.name}</span> from{" "}
              <span className="accent">Lahore, Pakistan</span>, currently working as a{" "}
              <span className="accent">Senior Frontend Developer</span> at{" "}
              <span className="accent">DigitalTribe</span>.
              <br /><br />
              I have <b className="accent">5+ years</b> of experience building
              production-grade web applications. I'm fluent in{" "}
              <b className="accent">React.js, Next.js, Node.js &amp; NestJS</b> and have
              shipped products across SaaS, blockchain, and enterprise platforms.
              <br /><br />
              My passion lies in building scalable{" "}
              <b className="accent">SaaS products</b> and bringing AI into them —
              from designing <b className="accent">custom AI agents with Mastra</b>{" "}
              that reason, use tools, and handle multi-step tasks, to automating
              workflows end-to-end with <b className="accent">n8n</b>.
            </p>

            <p style={{ color: "white", marginTop: "1.2em", marginBottom: "0.5em" }}>
              Apart from coding, some things I love:
            </p>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {[
                "Building side projects",
                "Tech exploration & open source",
                "Playing Chess ♟️",
                "Gaming 🎮",
                "Travel & exploring new places",
              ].map((item) => (
                <li key={item} className="about-activity">
                  <ImPointRight /> {item}
                </li>
              ))}
            </ul>

            {/* social links */}
            <div className="home-about-social" style={{ paddingTop: "30px" }}>
              <h1>FIND ME ON</h1>
              <p>Feel free to <span className="accent">connect </span>with me</p>
              <ul className="home-about-social-links">
                {contact.github && (
                  <li className="social-icons">
                    <a href={contact.github} target="_blank" rel="noopener noreferrer"
                      className="icon-colour home-social-icons" aria-label="GitHub">
                      <AiFillGithub />
                    </a>
                  </li>
                )}
                {contact.linkedin && (
                  <li className="social-icons">
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
                      className="icon-colour home-social-icons" aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </a>
                  </li>
                )}
                {contact.email && (
                  <li className="social-icons">
                    <a href={`mailto:${contact.email}`}
                      className="icon-colour home-social-icons" aria-label="Email">
                      <AiOutlineMail />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </Col>
        </Row>

        {/* ── Skills & Tools ── */}
        <h1 className="project-heading">
          Professional <strong className="accent">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="accent">Tools</strong> I Use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
};

export default AboutPage;
