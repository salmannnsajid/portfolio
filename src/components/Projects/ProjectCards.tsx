import { useRef, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const IFRAME_W = 1280;
const IFRAME_H = 800;

interface ProjectCardProps {
  isBlog: boolean;
  title: string;
  description: string;
  ghLink?: string;
  demoLink?: string;
}

const ProjectCards: React.FC<ProjectCardProps> = ({
  isBlog,
  title,
  description,
  ghLink,
  demoLink,
}) => {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.26);

  useEffect(() => {
    const measure = () => {
      if (wrapRef.current) {
        setScale(wrapRef.current.offsetWidth / IFRAME_W);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const FIXED_PREVIEW_H = 200; // px — same for every card

  return (
    <Card className="project-card-view">

      {/* ── live iframe preview ── */}
      {demoLink && (
        <div
          ref={wrapRef}
          onClick={() => window.open(demoLink, "_blank", "noopener,noreferrer")}
          style={{
            width: "100%",
            height: FIXED_PREVIEW_H,
            overflow: "hidden",
            position: "relative",
            background: "#0c0513",
            cursor: "pointer",
            borderRadius: "4px 4px 0 0",
          }}
          title="Click to open live site"
        >
          <iframe
            src={demoLink}
            title={title}
            width={IFRAME_W}
            height={IFRAME_H}
            style={{
              border: "none",
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              pointerEvents: "none",
              display: "block",
            }}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />

          {/* bottom fade + hover hint */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 55%, rgba(12,5,19,0.75) 100%)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: "8px 10px",
          }}>
            <span style={{
              background: "rgba(199,112,240,0.18)",
              border: "1px solid rgba(199,112,240,0.4)",
              borderRadius: 6,
              padding: "3px 9px",
              fontSize: "0.68rem",
              color: "#e0aaff",
              fontFamily: "monospace",
            }}>
              ↗ live
            </span>
          </div>
        </div>
      )}

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        {ghLink && (
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub /> &nbsp;{isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: ghLink ? "10px" : 0 }}
          >
            <CgWebsite /> &nbsp;Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
