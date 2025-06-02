import React from "react";
import styled from "styled-components";

// Import project images from assets
import project1 from "../assets/project1.png"; // Replace with your actual image path
import project2 from "../assets/project2.png"; // Replace with your actual image path
import project3 from "../assets/project3.png"; // Replace with your actual image path

const ProjectsContainer = styled.div`
  padding: 50px 20px;
  background: linear-gradient(90deg, #000, #000, #00c6ff);
  color: white;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Underline = styled.div`
  width: 100px;
  height: 4px;
  background: #00c6ff;
  margin-bottom: 30px;
`;

const Timeline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  .years {
    font-size: 3rem;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background: #111;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ProjectDetails = styled.div`
  padding: 20px;
`;

const ProjectName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #aaa;
`;

function Projects() {
  return (
    <ProjectsContainer>
      {/* Title */}
      <div>
        <SectionTitle>PROJECT EXPERIENCE</SectionTitle>
        <Underline />
      </div>

      {/* Timeline */}
      <Timeline>
        <div className="years">2022 - 2023</div>
      </Timeline>

      {/* Project Grid */}
      <ProjectGrid>
        {/* Project 1 */}
        <ProjectCard>
          <ProjectImage src={project1} alt="Project 1" />
          <ProjectDetails>
            <ProjectName>
              Login and Registration System | Oct 2024 – Nov 2024
            </ProjectName>
            <ProjectDescription>
              Developed a user authentication system using Node.js, Express, and
              MongoDB with secure login and registration. Implemented email
              verification by sending an authentication token to Gmail and
              hashed passwords using bcrypt. Integrated JWT for session
              management and designed RESTful APIs to ensure secure
              authentication.
            </ProjectDescription>
          </ProjectDetails>
        </ProjectCard>

        {/* Project 2 */}
        <ProjectCard>
          <ProjectImage src={project2} alt="Project 2" />
          <ProjectDetails>
            <ProjectName>
              Pooling Workforce Tracker | Nov 2024 – Dec 2024
            </ProjectName>
            <ProjectDescription>
              Developed a full-stack web application to manage and visualize
              voting results using Node.js, MongoDB, and React.js. Designed a
              professional, responsive UI with integrated Chart.js for dynamic
              bar and pie charts. Implemented REST APIs to handle vote
              submissions, prevent duplicate votes, and calculate election
              statistics.
            </ProjectDescription>
          </ProjectDetails>
        </ProjectCard>

        {/* Project 3 */}
        <ProjectCard>
          <ProjectImage src={project3} alt="Project 3" />
          <ProjectDetails>
            <ProjectName>
              Food Delivery Application | Jan 2024 – Feb 2024
            </ProjectName>
            <ProjectDescription>
              Designed and developed a responsive React.js frontend and
              Node.js/Express backend. Implemented key features such as food
              browsing, cart management, order placement, and user reviews.
              Integrated RESTful APIs for seamless client-server communication.
            </ProjectDescription>
          </ProjectDetails>
        </ProjectCard>
      </ProjectGrid>

      {/* Horizontal Line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 2,
          background:
            "linear-gradient(to right, transparent, #fff, transparent)",
        }}
      />
    </ProjectsContainer>
  );
}

export default Projects;
