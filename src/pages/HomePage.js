import React from "react";
import styled from "styled-components";

// Import all section components
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

// Styled wrapper for full-page layout
const HomePageContainer = styled.div`
  background-color: #000;
  color: white;
  min-height: 100vh;
  width: 100%;
`;

function HomePage() {
  return (
    <HomePageContainer>
      {/* Section: About Me */}
      <section id="about">
        <AboutMe />
      </section>

      {/* Section: Education */}
      <section id="education">
        <Education />
      </section>

      {/* Section: Experience */}
      <section id="experience">
        <Experience />
      </section>

      {/* Section: Skills */}
      <section id="skills">
        <Skills />
      </section>

      {/* Section: Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Section: Certifications */}
      <section id="certifications">
        <Certifications />
      </section>

      {/* Section: Contact */}
      <section id="contact">
        <Contact />
      </section>
    </HomePageContainer>
  );
}

export default HomePage;
