import { useEffect } from "react";
import "./CursorGlow.css";

const CursorGlow: React.FC = () => {
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--glow-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--glow-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return <div className="cursor-glow" aria-hidden="true" />;
};

export default CursorGlow;
