import React from "react";
import styled from "styled-components";

// Import the profile image from assets
import profileImage from "../assets/profile-removebg-preview.png"; // Replace with your actual image URL

const AboutMeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 20px;
  background: linear-gradient(90deg, #8e2de2, #4a00e0, #07f3ff);
`;

const ProfileWrapper = styled.div`
  width: 30%;
  max-width: 300px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const BiographyWrapper = styled.div`
  width: 60%;
  color: white;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: white;
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

const SkillInterestSection = styled.div`
  margin-top: 20px;
`;

const SkillButton = styled.button`
  font-size: 0.9rem;
  text-transform: uppercase;
  background: transparent;
  border: 2px solid #fff;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #fff;
    color: #000;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

function AboutMe() {
  return (
    <AboutMeContainer>
      {/* Profile Image */}
      <ProfileWrapper>
        <ProfileImage src={profileImage} alt="Profile" />
      </ProfileWrapper>

      {/* Biography Content */}
      <BiographyWrapper>
        <Title>My Biography</Title>
        <Underline />

        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
          amet massa sed leo molestie ultrices in non mi. Suspendisse mollis
          nisl ac aliquet pretium. Suspendisse dignissim, odio non hendrerit
          suscipit, lorem ipsum tempus tortor, suscipit vestibulum velit quam
          nec nibh.
        </Description>

        <Description>
          Aliquam luctus faucibus augue, in porttitor eros imperdiet sit amet.
          Vivamus vel tortor at risus vestibulum elementum accumsan id ante.
        </Description>

        {/* Skill & Interest Section */}
        <SkillInterestSection>
          <h3>Skill & Interest</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <SkillButton>Social Media</SkillButton>
            <SkillButton>Design</SkillButton>
            <SkillButton>Reading</SkillButton>
            <SkillButton>Data Analyst</SkillButton>
            <SkillButton>Photography</SkillButton>
          </div>
        </SkillInterestSection>
      </BiographyWrapper>
    </AboutMeContainer>
  );
}

export default AboutMe;
