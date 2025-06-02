import React from "react";
import styled from "styled-components";

const ExperienceContainer = styled.div`
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

const JobList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const JobItem = styled.li`
  margin-bottom: 20px;
  position: relative;

  &:before {
    content: ">>";
    position: absolute;
    left: -20px; /* Increase spacing by moving the arrow further left */
    font-size: 1.5rem;
    color: #00c6ff;
  }

  .company {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
    padding-left: 30px; /* Add padding to create space between arrow and company name */
  }

  .position {
    font-size: 1rem;
    margin-bottom: 10px;
    padding-left: 30px;
  }

  .description {
    font-size: 1rem;
    line-height: 1.6;
    color: #aaa;
    padding-left: 30px;
  }
`;

function Experience() {
  return (
    <ExperienceContainer>
      {/* Title */}
      <div>
        <SectionTitle>Experience</SectionTitle>
        <Underline />
      </div>

      {/* Timeline */}
      <Timeline>
        <div className="years">2023 - 2025</div>
      </Timeline>

      {/* Job Listings */}
      <JobList>
        {/* Job 1 */}
        <JobItem>
          <div className="company">
            Indian Institute of Technology Bombay, Mumbai, IN
          </div>
          <div className="position">
            Sr. Project Technical Assistant | 2023 - 2023
          </div>
          <div className="description">
            Spearheaded full-stack development of Tutem User and Tutem Driver
            apps deployed on Google Play Store. Built a web-based survey app
            using HTML/CSS/JavaScript with offline support and conditional
            questions. Engineered Safe Path Recommendation System using Python
            Flask and k-shortest path algorithm. Developed real-time
            ride-sharing backend using Node.js + Express with JWT authentication
            and WebSocket tracking. Implemented carpooling feature using OSM
            path optimization to minimize detours. Enabled dynamic configuration
            management via backend. Hosted full application on AWS (EC2, RDS,
            S3, ELB) with Auto Scaling. Ensured system security through HTTPS
            and low-latency API design.
          </div>
        </JobItem>

        {/* Job 2 */}
        <JobItem>
          <div className="company">
            Buoyantworx Solutions Private Limited, Bangalore, IN
          </div>
          <div className="position">Software Engineer | 2023 - present</div>
          <div className="description">
            Developed Electrical Management System (EMS) using Jmix, Java, and
            Spring Boot. Designed backend architecture using MS SQL Server to
            manage complex data. Engineered bulk Excel import using VBA
            scripting. Built report generation modules reducing manual effort by
            ~60%. Led Aadhaar-PAN linking system using OCR (Tesseract). Designed
            validation logic including checksums and regex checks. Delivered
            user-friendly interface for non-technical users.
          </div>
        </JobItem>

        {/* Job 3 */}
        {/* <JobItem>
          <div className="company">Borcelle</div>
          <div className="position">Junior Content Creator | 2020 - 2021</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet massa sed leo molestie ultrices in non mi. Suspendisse mollis
            nisl ac aliquet pretium.
          </div>
        </JobItem> */}
      </JobList>

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
    </ExperienceContainer>
  );
}

export default Experience;
