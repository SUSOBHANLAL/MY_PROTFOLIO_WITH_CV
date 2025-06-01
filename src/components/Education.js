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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
          amet massa sed leo molestie ultrices in non mi. Suspendisse mollis
          nisl ac aliquet pretium. Suspendisse dignissim, odio non hendrerit
          suscipit, lorem ipsum tempus tortor, suscipit vestibulum velit quam
          nec nibh.
        </Description>
      </div>

      {/* Timeline */}
      <Timeline>
        <div className="years">2012 - 2019</div>
        <div className="details">
          <Institution>Senior Vocational High School</Institution>
          <Degree>School Of Art | 2012</Degree>
          <br />
          <Institution>Bachelor Degree</Institution>
          <Degree>
            Borcelle Art University | Graphic Design Bachelor | 2017
          </Degree>
          <br />
          <Institution>Master Degree</Institution>
          <Degree>
            Borcelle Art University | Master of Communication | 2019
          </Degree>
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
