import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import "./Navbar.css";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const SECTIONS = ["home", "about", "project", "resume", "play"];

const NavBar: React.FC = () => {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setNavColour(window.scrollY >= 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const iconStyle: React.CSSProperties = { verticalAlign: "middle", marginBottom: "3px" };

  const link = (id: string, icon: React.ReactNode, label: string) => (
    <Nav.Item key={id}>
      <Nav.Link
        onClick={() => { scrollTo(id); setExpand(false); }}
        className={active === id ? "active" : ""}
        style={{ cursor: "pointer" }}
      >
        <span style={iconStyle}>{icon}</span> {label}
      </Nav.Link>
    </Nav.Item>
  );

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand
          onClick={() => scrollTo("home")}
          style={{ cursor: "pointer" }}
          className="d-flex"
        >
          <span style={{ color: "#c770f0", fontWeight: 700, fontSize: "1.4em" }}>SS.</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="home">
            {link("home",    <AiOutlineHome />,                     "Home")}
            {link("about",   <AiOutlineUser />,                     "About")}
            {link("project", <AiOutlineFundProjectionScreen />,     "Projects")}
            {link("resume",  <CgFileDocument />,                    "Resume")}

            {link("play", <AiOutlineFundProjectionScreen />, "Play")}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
