import React from "react";
import styled from "styled-components";

const EducationContainer = styled.div`
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
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #aaa;
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

  .details {
    max-width: 60%;
  }
`;

const Institution = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const Degree = styled.p`
  font-size: 1rem;
  margin-bottom: 5px;
`;

function Education() {
  return (
    <EducationContainer>
      {/* Title and Description */}
      <div>
        <SectionTitle>Education</SectionTitle>
        <Underline />
        <Description>
          A passionate <strong>Full Stack Engineer</strong> with hands-on
          experience in building{" "}
          <span className="highlight">scalable web & mobile applications</span>.
          I specialize in{" "}
          <span className="highlight">Java, JavaScript, Node.js, Python,</span>{" "}
          and cloud platforms like <span className="highlight">AWS</span>. My
          expertise lies in developing{" "}
          <span className="highlight">real-time systems</span>, implementing{" "}
          <span className="highlight">geospatial algorithms</span>, and crafting{" "}
          <span className="highlight">user-centric solutions</span>. I thrive on
          solving complex problems, collaborating with teams, and delivering
          high-performance, impactful software products.
        </Description>
      </div>

      {/* Timeline */}
      <Timeline>
        <div className="years">2019 - 2023</div>
        <div className="details">
          <Institution>Chaipat High School</Institution>
          <Degree>Science | 2019</Degree>
          <br />
          <Institution>Bachelor of Engineering</Institution>
          <Degree>Visvesvaraya Technological University | BE |2019-2023</Degree>
          <br />
          {/* <Institution>Master Degree</Institution>
          <Degree>
            Borcelle Art University | Master of Communication | 2019
          </Degree> */}
        </div>
      </Timeline>

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
    </EducationContainer>
  );
}

export default Education;
