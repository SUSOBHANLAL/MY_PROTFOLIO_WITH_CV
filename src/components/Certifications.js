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
        <Item> Data Structures & Algorithms (DSA) – Coding Ninjas</Item>
        <Item>Java Programming - Coding Ninjas</Item>
        <Item>Node.js – Coding Ninjas</Item>
        <Item> React.js – Coding Ninjas</Item>
      </List>
    </CertificationsContainer>
  );
}

export default Certifications;
