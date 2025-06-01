import React from "react";
import styled from "styled-components";

// Import icons from assets/icons
import PhoneIcon from "../assets/icons/phone-unlock_17471928.png"; // Replace with your actual icon path
import EmailIcon from "../assets/icons/email_3694362.png"; // Replace with your actual icon path
import LocationIcon from "../assets/icons/home-address_12536145.png"; // Replace with your actual icon path
import SocialMediaIcon from "../assets/icons/linkedin_3536505.png"; // Replace with your actual icon path

const ContactContainer = styled.div`
  padding: 50px 20px;
  background: linear-gradient(90deg, #000, #000, #00c6ff);
  color: white;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const ContactItem = styled.div`
  text-align: center;
`;

const ContactIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
`;

const ContactLabel = styled.h3`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const ContactDetails = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  color: #aaa;
`;

const FooterSection = styled.div`
  margin-top: 50px;
  text-align: center;

  .name {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .year {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
  }
`;

function Contact() {
  return (
    <ContactContainer>
      {/* Title */}
      <div>
        <SectionTitle>Get In Touch</SectionTitle>
        <Subtitle>Let's Work Together</Subtitle>
      </div>

      {/* Contact Grid */}
      <ContactGrid>
        {/* Phone & Mobile */}
        <ContactItem>
          <ContactIcon src={PhoneIcon} alt="Phone" />
          <ContactLabel>Phone & Mobile</ContactLabel>
          <ContactDetails>
            123-456-7890
            <br />
            +123-456-7890
          </ContactDetails>
        </ContactItem>

        {/* Email & Website */}
        <ContactItem>
          <ContactIcon src={EmailIcon} alt="Email" />
          <ContactLabel>Email & Website</ContactLabel>
          <ContactDetails>
            hello@reallygreatsite.com
            <br />
            reallygreatsite.com
          </ContactDetails>
        </ContactItem>

        {/* Address */}
        <ContactItem>
          <ContactIcon src={LocationIcon} alt="Address" />
          <ContactLabel>Address</ContactLabel>
          <ContactDetails>
            123 Anywhere St., Any City, ST
            <br />
            12345
          </ContactDetails>
        </ContactItem>

        {/* Social Media */}
        <ContactItem>
          <ContactIcon src={SocialMediaIcon} alt="Social Media" />
          <ContactLabel>Social Media</ContactLabel>
          <ContactDetails>@reallygreatsite</ContactDetails>
        </ContactItem>
      </ContactGrid>

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

      {/* Footer */}
      <FooterSection>
        <div className="name">Alexander Aronowitz</div>
        <div className="year">Portfolio 2023</div>
      </FooterSection>
    </ContactContainer>
  );
}

export default Contact;
