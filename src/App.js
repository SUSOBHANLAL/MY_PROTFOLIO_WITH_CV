// import React from "react";
// import styled from "styled-components";
// //
// import Header from "./components/Header";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Certifications from "./components/Certifications";

// function App() {
//   return (
//     <AppContainer>
//       <Header />
//       <Skills />
//       <Experience />
//       <Certifications />
//     </AppContainer>
//   );
// }

// export default App;

// // Styled Components
// const AppContainer = styled.div`
//   font-family: "Segoe UI", sans-serif;
//   color: white;
//   overflow-x: hidden;
// `;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import AboutMe from "./components/AboutMe"; // Import the AboutMe component
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Certifications from "./components/Certifications";
// import Education from "./components/Education";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         {/* Home Page */}
//         <Route path="/" element={<div>Home Page</div>} />

//         {/* About Me Page */}
//         <Route path="/about" element={<AboutMe />} />
//         <Route path="/Education" element={<Education />} />

//         {/* Other Pages */}
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/projects" element={<Projects />} />

//         <Route path="/certifications" element={<Certifications />} />
//         <Route path="/Contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import ScrollToHashElement from "./components/ScrollToHashElement"; // 👈 Import here

// Pages
import HomePage from "./pages/HomePage";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      {/* 🔁 Add ScrollToHashElement right after <Router> starts */}
      <ScrollToHashElement />

      {/* Your header */}
      <Header />

      {/* Define all routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
