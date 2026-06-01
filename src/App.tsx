import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import TicTacToe from "./components/TicTacToe/TicTacToe";

function App() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error(
      "ThemeContext is undefined. Ensure the provider is set up correctly."
    );
  }

  const { themeName } = themeContext;

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <TicTacToe />
        <Contact />
      </main>

      <ScrollToTop />
    </div>
  );
}

export default App;
