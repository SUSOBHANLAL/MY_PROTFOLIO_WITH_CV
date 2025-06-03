import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link for navigation
// Import the profile image from assets
import profileImage from "../assets/profile-removebg-preview.png"; // Replace with your actual image URL
import backgroundImage from "../assets/backgroundImage.png"; // Replace with your actual background image URL

// Styled Components
// const HeaderContainer = styled.header`
//   position: relative;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 20px;
//   overflow: hidden;
//   background-image: backgroundImage;

// `;

const HeaderContainer = styled.header`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  overflow: hidden;

  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

// Additional Components for Creative Design
const LogoIcon = styled.span`
  display: inline-block;
  width: 70px;
  height: 70px;
  background: linear-gradient(90deg, #8e2de2, #4a00e0, #07f3ff);

  border-radius: 50%;
  margin-right: 5px;
`;

const SideLogoIcon = styled.div`
  position: fixed; /* or 'absolute' depending on layout */
  top: 17%;
  right: 2%;
  width: 100px;
  height: 100px;
  background: linear-gradient(90deg, #8e2de2, #4a00e0, #07f3ff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 999;

  /* Optional: Add animation or hover effect */
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(15deg);
  }
`;

const GlobalLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  margin-top: 40px;

  position: relative;

  @media (max-width: 768px) {
    position: absolute;
    top: 99%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    // background: rgba(0, 0, 0, 0.7);
    padding: 10px 20px;
    border-radius: 30px;
    // box-shadow: 0 4px 10px rgba(56, 30, 30, 0.3);
    margin-top: 0;
  }
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

  @media (max-width: 768px) {
    top: 150%; /* Move to top on mobile */
    bottom: auto; /* Remove bottom positioning */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%);
  }
`;

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
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      background: rgba(255, 255, 255, 0.1);
      padding: 20px;
      transform: ${(props) =>
        props.isOpen ? "translateY(0)" : "translateY(-100%)"};
      transition: transform 0.3s ease;
      width: 100%;
      z-index: 1000;
    }
  }

  li {
    font-size: 1rem;
    text-transform: uppercase;
    color: white;
    transition: color 0.3s ease;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
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
  top: -5%;
  max-width: 1200px;
  position: relative;

  @media (max-width: 768px) {
    top: -35%;
  }
`;

const TextContent = styled.div`
  max-width: 50%;
  color: white;
  z-index: 1; /* Ensure text is above other elements */
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
  }
`;

const Greeting = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #00c6ff;
`;

const Name = styled.h1`
  font-size: 1.5rem;
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

// const Description = styled.p`
//   font-size: 1rem;
//   line-height: 1.6;
//   color: #aaa;
// `;

// const Description = styled.p`
//   font-size: 1rem;
//   line-height: 1.8;
//   color: #ddd;
//   max-width: 600px;
//   margin-bottom: 25px;

//   strong {
//     color: #ffffff;
//     font-weight: 600;
//   }

//   span.highlight {
//     color: rgb(16, 168, 148);
//     font-weight: bold;
//   }

//   @media (max-width: 768px) {
//     font-size: 0.95rem;
//     line-height: 1.6;
//   }
// `;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #ddd;
  max-width: 600px;
  margin-bottom: 25px;

  .mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline;
    }
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;
const ProfileImage = styled.img`
  width: 300px;
  position: absolute;
  top: -150%;
  right: 4%;
  object-fit: cover;
  border-radius: 1000px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    width: 200px;
    position: absolute;
    top: -45%;
    right: 3%;
    transform: translateY(-50%);
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 150%);
  }
`;

const HorizontalLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, #fff, transparent);
`;

const HamburgerIcon = styled.span`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
    color: white;
  }
`;

// Function Component
function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to track if the menu is open

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest("nav")) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <HeaderContainer>
      {/* Transparent Navbar with Shadow */}
      <Navbar isOpen={isOpen}>
        <div className="logo">Online Portfolio</div>
        <HamburgerIcon onClick={toggleMenu}>&#9776;</HamburgerIcon>
        <ul isOpen={isOpen}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/education" onClick={closeMenu}>
              Education
            </Link>
          </li>
          <li>
            <Link to="/experience" onClick={closeMenu}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/certifications" onClick={closeMenu}>
              Certifications
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </Navbar>

      {/* Main Content Section */}
      <ContentWrapper>
        <TextContent>
          <Greeting>Hello !!!</Greeting>
          <Name>I'm Susobhan Lal</Name>
          <Subtitle>Software Developer</Subtitle>
          <Description>
            <span className="desktop">
              A passionate Full Stack Engineer skilled in Java, JavaScript,
              Node.js, Python, and AWS. Builds scalable web/mobile apps,
              real-time systems, and geospatial solutions. Focused on
              user-centric design, problem-solving, and high-performance
              software delivery.
            </span>
            <span className="mobile">
              I am Susobhan working in Byouantwors as a software engineer
            </span>
          </Description>
        </TextContent>
        {/* Profile Image */}
        <ProfileImage src={profileImage} alt="Profile" />
        {/* <SideLogoIcon /> */}
        {/* Global Link */}
        <GlobalLink href="https://my-cv-pi-black.vercel.app/">
          <LogoIcon />
          Resume
        </GlobalLink>
        {/* Arrow Button */}
        <ArrowButton
          href="https://my-cv-pi-black.vercel.app/"
          // target="_blank"
          // rel="noopener noreferrer"
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
