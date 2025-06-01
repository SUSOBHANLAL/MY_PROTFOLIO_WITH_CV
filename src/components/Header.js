// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom"; // Import Link for navigation

// // Import the profile image from assets
// import profileImage from "../assets/profile-removebg-preview.png"; // Replace with your actual image URL
// import backgroundImage from "../assets/profile-removebg-preview.png";

// const HeaderContainer = styled.header`
//   position: relative;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 20px;
//   overflow: hidden;
//   background: linear-gradient(90deg, #8e2de2, #4a00e0, #07f3ff);
// `;

// // Glassmorphic Navbar Wrapper
// const NavbarWrapper = styled.div`
//   width: 70%;
//   max-width: 900px;
//   margin: 0 auto;
//   padding: 10px 20px;
//   background: rgba(255, 255, 255, 0.1); /* Transparent background */
//   border-radius: 30px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
//   backdrop-filter: blur(10px); /* Glassmorphism effect */
//   -webkit-backdrop-filter: blur(10px);
//   transition: all 0.3s ease-in-out;
// `;

// const Navbar = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;

//   .logo {
//     font-size: 1rem;
//     text-transform: uppercase;
//     color: white;
//     background: #00c6ff;
//     padding: 10px 20px;
//     border-radius: 5px;
//     font-weight: bold;
//     letter-spacing: 1px;
//   }

//   ul {
//     list-style: none;
//     display: flex;
//     gap: 20px;
//   }

//   li {
//     font-size: 1rem;
//     text-transform: uppercase;
//     color: white;
//     transition: color 0.3s ease;
//     cursor: pointer;
//   }

//   li:hover {
//     color: #00c6ff;
//   }
// `;

// const ContentWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   max-width: 1200px;
// `;

// const TextContent = styled.div`
//   max-width: 50%;
//   color: white;
// `;

// const Greeting = styled.h3`
//   font-size: 1rem;
//   margin-bottom: 10px;
//   text-transform: uppercase;
//   color: #00c6ff;
// `;

// const Name = styled.h1`
//   font-size: 3rem;
//   margin-bottom: 10px;
//   font-weight: bold;
//   color: white;
// `;

// const Subtitle = styled.p`
//   font-size: 0.8rem;
//   margin-bottom: 20px;
//   text-transform: uppercase;
//   background: #00c6ff;
//   color: white;
//   padding: 5px 10px;
//   border-radius: 5px;
// `;

// const Description = styled.p`
//   font-size: 1rem;
//   line-height: 1.6;
//   color: #aaa;
// `;

// const ProfileImage = styled.img`
//   width: 300px;
//   height: auto;
//   object-fit: cover;
//   border-radius: 10px;
//   box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
// `;

// const HorizontalLine = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 2px;
//   background: linear-gradient(to right, transparent, #fff, transparent);
// `;

// function Header() {
//   return (
//     <HeaderContainer>
//       {/* Transparent Navbar with Shadow */}

//       <Navbar>
//         <div className="logo">Online Portfolio</div>
//         <ul>
//           <li>
//             <NavbarWrapper>
//               <Link to="/">Home</Link>
//             </NavbarWrapper>
//           </li>
//           <li>
//             <NavbarWrapper>
//               <Link to="/about">About Me</Link>
//             </NavbarWrapper>
//           </li>
//           <li>
//             <NavbarWrapper>
//               <Link to="/education">Education</Link>
//             </NavbarWrapper>
//           </li>
//           <li>
//             <NavbarWrapper>
//               <Link to="/experience">Experience</Link>
//             </NavbarWrapper>
//           </li>
//           <li>
//             <NavbarWrapper>
//               {" "}
//               <Link to="/skills">Skills</Link>
//             </NavbarWrapper>
//           </li>
//           <li>
//             <NavbarWrapper>
//               {" "}
//               <Link to="/projects">Projects</Link>
//             </NavbarWrapper>
//           </li>
//           <li>
//             <NavbarWrapper>
//               {" "}
//               <Link to="/certifications">Certifications</Link>
//             </NavbarWrapper>
//           </li>
//           <li>
//             <NavbarWrapper>
//               <Link to="/contact">Contact</Link>
//             </NavbarWrapper>
//           </li>
//         </ul>
//       </Navbar>

//       {/* Main Content Section */}
//       <ContentWrapper>
//         <TextContent>
//           <Greeting>Hello !!!</Greeting>
//           <Name>I'm Alexander Aronowitz</Name>
//           <Subtitle>Professional Content Creator</Subtitle>

//           <Description>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
//             amet massa sed leo molestie ultrices in non mi. Suspendisse mollis
//             nisl ac aliquet pretium. Suspendisse dignissim, odio non hendrerit
//             suscipit, lorem ipsum tempus tortor, suscipit vestibulum velit quam
//             nec nibh.
//           </Description>
//         </TextContent>

//         {/* Profile Image */}
//         <ProfileImage src={profileImage} alt="Profile" />
//       </ContentWrapper>

//       {/* Horizontal Line */}
//       <HorizontalLine />
//     </HeaderContainer>
//   );
// }

// export default Header;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link for navigation

// Import the profile image from assets
import profileImage from "../assets/profile-removebg-preview.png"; // Replace with your actual image URL
import backgroundImage from "../assets/15d46587-875f-4c81-85d9-80cfab1e5576.png"; // Replace with your actual background image URL

const HeaderContainer = styled.header`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  overflow: hidden;

  /* Background Image */
  background: linear-gradient(90deg, #8e2de2, #4a00e0, #07f3ff);
  //   background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  background-position: center;
`;

// Glassmorphic Navbar Wrapper
// const NavbarWrapper = styled.div`
//   width: 70%;
//   max-width: 900px;
//   margin: 0 auto;
//   padding: 10px 20px;
//   background: rgba(255, 255, 255, 0.1); /* Transparent background */
//   border-radius: 30px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
//   backdrop-filter: blur(10px); /* Glassmorphism effect */
//   -webkit-backdrop-filter: blur(10px);
//   transition: all 0.3s ease-in-out;
// `;
const NavbarWrapper = styled.div`
  width: 70%;
  max-width: 900px;
  margin: 0 auto;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1); /* Transparent background */
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px); /* Glassmorphism effect */
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .logo {
    font-size: 1rem;
    text-transform: uppercase;
    color: white;
    background: #00c6ff;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  li {
    font-size: 1rem;
    text-transform: uppercase;
    color: white;
    transition: color 0.3s ease;
    cursor: pointer;
  }

  li:hover {
    color: #00c6ff;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  position: relative;
`;

const TextContent = styled.div`
  max-width: 50%;
  color: white;
  z-index: 1; /* Ensure text is above other elements */
`;

const Greeting = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #00c6ff;
`;

const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: bold;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 0.8rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  background: #00c6ff;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #aaa;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  clip-path: polygon(0 0, 100% 0%, 100% 80%, 0% 100%); /* Asymmetrical shape */
`;

const HorizontalLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, #fff, transparent);
`;

// Additional Components for Creative Design
const LogoIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #00c6ff;
  border-radius: 50%;
  margin-right: 5px;
`;

const GlobalLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  margin-top: 20px;
`;

const ArrowButton = styled.button`
  position: absolute;
  bottom: 10%;
  left: 60%;
  transform: translateX(-50%);
  background: #ffcc00;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

// Asymmetrical Shapes
const Shape1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle at 50% 50%, #000000, transparent 60%);
  border-radius: 50%;
  opacity: 0.8;
  z-index: 1;
`;

const Shape2 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle at 50% 50%, #000000, transparent 60%);
  border-radius: 50%;
  opacity: 0.8;
  z-index: 1;
`;

const YearText = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  z-index: 2;
`;

function Header() {
  return (
    <HeaderContainer>
      {/* Asymmetrical Shapes */}
      <Shape1 />
      <Shape2 />

      {/* Year Text */}
      <YearText>2025</YearText>

      {/* Transparent Navbar with Shadow */}

      <Navbar>
        <div className="logo">Online Portfolio</div>
        <ul>
          <NavbarWrapper>
            <li>
              <Link to="/">Home</Link>
            </li>
          </NavbarWrapper>

          <NavbarWrapper>
            <li>
              <Link to="/about">About</Link>
            </li>
          </NavbarWrapper>

          <NavbarWrapper>
            {" "}
            <li>
              <Link to="/education">Education</Link>
            </li>
          </NavbarWrapper>

          <NavbarWrapper>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
          </NavbarWrapper>

          <NavbarWrapper>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
          </NavbarWrapper>

          <NavbarWrapper>
            {" "}
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </NavbarWrapper>

          <NavbarWrapper>
            {" "}
            <li>
              <Link to="/certifications">Certifications</Link>
            </li>
          </NavbarWrapper>

          <NavbarWrapper>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </NavbarWrapper>
        </ul>
      </Navbar>

      {/* Main Content Section */}
      <ContentWrapper>
        <TextContent>
          <Greeting>Hello !!!</Greeting>
          <Name>I'm Susobhan Lal</Name>
          <Subtitle>Software Developer</Subtitle>

          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet massa sed leo molestie ultrices in non mi. Suspendisse mollis
            nisl ac aliquet pretium. Suspendisse dignissim, odio non hendrerit
            suscipit, lorem ipsum tempus tortor, suscipit vestibulum velit quam
            nec nibh.
          </Description>
        </TextContent>

        {/* Profile Image */}
        <ProfileImage src={profileImage} alt="Profile" />

        {/* Global Link */}
        <GlobalLink href="https://www.example.com">
          <LogoIcon />
          Daniel Gallego
        </GlobalLink>

        {/* Arrow Button */}
        {/* <ArrowButton>Explore →</ArrowButton> */}
        <ArrowButton
          href="https://my-cv-pi-black.vercel.app/"
          target="https://my-cv-pi-black.vercel.app/"
          rel="noopener noreferrer"
        >
          Explore →
        </ArrowButton>
      </ContentWrapper>

      {/* Horizontal Line */}
      <HorizontalLine />
    </HeaderContainer>
  );
}

export default Header;
