import React from "react";
import styled from "styled-components";

const CertificationsContainer = styled.section`
  padding: 60px 20px;
  background: #000;
  color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
`;

const Item = styled.li`
  padding: 15px;
  border-bottom: 1px solid #333;
`;

function Certifications() {
  return (
    <CertificationsContainer>
      <SectionTitle>Certifications</SectionTitle>
      <List>
        <Item>AWS Certified Developer – Associate</Item>
        <Item>Google Cloud Fundamentals</Item>
        <Item>React Frontend Certification – Meta</Item>
        <Item>Full Stack Development – Coursera</Item>
      </List>
    </CertificationsContainer>
  );
}

export default Certifications;
