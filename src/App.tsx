import { useState, useEffect } from "react";
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style.css";

import Navbar from "./components/Navbar/Navbar";
import Pre from "./components/Pre/Pre";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./components/Home/Home";
import Home2 from "./components/Home/Home2";
import AboutPage from "./components/About/AboutPage";
import ProjectsPage from "./components/Projects/ProjectsPage";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import ResumeNew from "./components/Resume/ResumeNew";
import { useResetScrollOnMount } from "./hooks/useResetScrollOnMount";

const initParticles = async (engine: Engine) => {
  await loadSlim(engine);
};

function App() {
  const [load, setLoad] = useState(true);

  useResetScrollOnMount();

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 1200);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ParticlesProvider init={initParticles}>
      <Pre load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Home />
        <AboutPage />
        <Home2 />
        <ProjectsPage />
        <ResumeNew />
        <TicTacToe />
        <Footer />
      </div>
    </ParticlesProvider>
  );
}

export default App;
