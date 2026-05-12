import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}

export default App;
