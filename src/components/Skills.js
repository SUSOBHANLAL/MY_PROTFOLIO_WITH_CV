import React from "react";
import styled from "styled-components";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "GraphQL",
];

const SkillsContainer = styled.section`
  padding: 50px 20px;
  background: #000;
  overflow: hidden;
`;

const SkillList = styled.div`
  display: flex;
  gap: 30px;
  font-size: 2rem;
  font-weight: bold;
  animation: scrollSkills 10s linear infinite;
`;

const SkillItem = styled.span`
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
`;

const SkillsWrapper = styled.div`
  white-space: nowrap;
  display: inline-block;
`;

const animation = `
@keyframes scrollSkills {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

const GlobalStyle = styled.div`
  ${animation}
`;

function Skills() {
  const doubleSkills = [...skills, ...skills];

  return (
    <SkillsContainer>
      <GlobalStyle />
      <SkillList>
        <SkillsWrapper>
          {doubleSkills.map((skill, idx) => (
            <SkillItem key={idx}>{skill}</SkillItem>
          ))}
        </SkillsWrapper>
      </SkillList>
    </SkillsContainer>
  );
}

export default Skills;
