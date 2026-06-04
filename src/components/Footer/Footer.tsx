import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { contact } from "../../portfolio";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-copywright">
          <Col md={4}>
            <h3>Designed and Developed by Salman Sajid</h3>
          </Col>
          <Col md={4}>
            <h3>Copyright © {year} SS</h3>
          </Col>
          <Col md={4} className="footer-body">
            <ul className="footer-icons">
              {contact.github && (
                <li className="social-icons">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                    aria-label="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                </li>
              )}
              {contact.linkedin && (
                <li className="social-icons">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              )}
              {contact.email && (
                <li className="social-icons">
                  <a
                    href={`mailto:${contact.email}`}
                    style={{ color: "white" }}
                    aria-label="Email"
                  >
                    <AiOutlineMail />
                  </a>
                </li>
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
