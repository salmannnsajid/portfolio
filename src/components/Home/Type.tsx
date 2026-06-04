import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "React & Next.js Engineer",
  "SaaS Platform Architect",
  "Node.js API Developer",
  "Web Performance Strategist",
];

const Type: React.FC = () => {
  const [text, setText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let tid: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          tid = setTimeout(tick, 1800);
          return;
        }
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          tid = setTimeout(tick, 500);
          return;
        }
      }
      tid = setTimeout(tick, deleting ? 45 : 85);
    };

    const cursorInterval = setInterval(() => setCursorVisible((v) => !v), 530);
    tid = setTimeout(tick, 800);

    return () => {
      clearTimeout(tid);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <span>
      <span className="Typewriter__wrapper">{text}</span>
      <span
        className="Typewriter__cursor"
        style={{ opacity: cursorVisible ? 1 : 0 }}
      >
        |
      </span>
    </span>
  );
};

export default Type;
