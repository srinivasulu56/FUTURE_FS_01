import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Spotlight from "./components/Spotlight"; // 👈 Spotlight import

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="flex text-textLight bg-bgDark font-sans min-h-screen">
      {/* Magic Bento Cursor Effect */}
      <Spotlight />

      {/* Sidebar takes 40% */}
      <div className="hidden md:flex w-[40%] sticky top-0 h-screen">
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      {/* Main Content takes 60% */}
      <main className="w-full md:w-[60%] bg-bgDark scroll-smooth">
        <section
          id="about"
          className="flex items-center min-h-screen px-4 sm:px-12"
          data-aos="fade-in"
        >
          <About />
        </section>
        <section
          id="skills"
          className="flex items-center min-h-screen px-4 sm:px-12"
          data-aos="fade-in"
        >
          <Skills />
        </section>
        <section
          id="projects"
          className="flex items-center min-h-screen px-4 sm:px-12"
          data-aos="fade-in"
        >
          <Projects />
        </section>
        <section
          id="education"
          className="flex items-center min-h-screen px-4 sm:px-12"
          data-aos="fade-in"
        >
          <Education />
        </section>
        <section
          id="contact"
          className="flex items-center min-h-screen px-4 sm:px-12"
          data-aos="fade-in"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
