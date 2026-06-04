import { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle/Particle";
import { HiDownload } from "react-icons/hi";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const resumePath = `${import.meta.env.BASE_URL}resume.pdf`;

const ResumeNew: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(0);

  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  }, []);

  const pageWidth = Math.min(860, window.innerWidth - 40);

  return (
    <Container fluid className="resume-section" id="resume">
      <Particle />

      <Row style={{ justifyContent: "center", position: "relative", zIndex: 2 }}>
        <a
          href={resumePath}
          download="Salman_Sajid_Resume.pdf"
          className="btn btn-primary fork-btn"
          style={{ maxWidth: "250px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
        >
          <HiDownload /> &nbsp;Download CV
        </a>
      </Row>

      <Row className="resume" style={{ justifyContent: "center" }}>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Document
            file={resumePath}
            onLoadSuccess={onLoadSuccess}
            loading={
              <p style={{ color: "#a588c0", padding: "60px", fontFamily: "monospace" }}>
                Loading resume…
              </p>
            }
            error={
              <p style={{ color: "#ff6b6b", padding: "60px", fontFamily: "monospace" }}>
                Could not load resume.pdf
              </p>
            }
          >
            {Array.from({ length: numPages }, (_, i) => (
              <div key={i + 1} style={{ marginBottom: "12px" }}>
                <Page
                  pageNumber={i + 1}
                  width={pageWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </div>
            ))}
          </Document>
        </div>
      </Row>
    </Container>
  );
};

export default ResumeNew;
