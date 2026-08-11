import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Certificates from "../components/Certificates/Certificates";
import GithubStats from "../components/GithubStats/GithubStats";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import TerminalModal from "../components/Terminal/TerminalModal";
import TerminalButton from "../components/Terminal/TerminalButton";
import ResumeModal from "../components/ResumeModal/ResumeModal";

const Home = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="bg-[#0B1120] text-white overflow-x-hidden relative min-h-screen">
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main>
        <section id="home">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certificates">
          <Certificates />
        </section>

        <section id="github">
          <GithubStats />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Floating CLI Button & Modal */}
      <TerminalButton onClick={() => setIsTerminalOpen(true)} />
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => {
          setIsTerminalOpen(false);
          setIsResumeOpen(true);
        }}
      />

      {/* In-Browser PDF Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl="/resume.pdf"
      />
    </div>
  );
};

export default Home;