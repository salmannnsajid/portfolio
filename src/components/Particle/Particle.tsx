import { useId } from "react";
import { Particles, useParticlesProvider } from "@tsparticles/react";

const particleOptions = {
  particles: {
    number: { value: 160, density: { enable: true, area: 1500 } },
    opacity: {
      value: { min: 0.05, max: 0.5 },
      animation: { enable: true, speed: 1, sync: false },
    },
    size: { value: 1 },
    move: {
      enable: true,
      direction: "right" as const,
      speed: 0.05,
      outModes: { default: "out" as const },
    },
    links: { enable: false },
  },
  interactivity: {
    events: { onClick: { enable: true, mode: "push" as const } },
    modes: { push: { quantity: 1 } },
  },
  detectRetina: true,
};

const Particle: React.FC = () => {
  const { loaded } = useParticlesProvider();
  const uid = useId().replace(/:/g, "");
  if (!loaded) return null;
  return <Particles id={`particles-${uid}`} options={particleOptions} />;
};

export default Particle;
