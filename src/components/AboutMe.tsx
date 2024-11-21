import React from "react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import styled from "styled-components";

const AboutMeContainer = styled.div`
  font-family: Arial, sans-serif;
  margin: 2rem;
  line-height: 1.6;
`;

const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
`;

const AboutMeSection = styled.section`
  margin: 2rem 0;
`;

const SectionTitle = styled.h2`
  color: #2980b9;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 2rem;
`;

const ListItem = styled.li`
  margin: 0.5rem 0;
`;

const SocialLinks = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #34495e;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SocialLinkHover = styled(SocialLink)`
  &:hover {
    color: #2ecc71;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Button = styled.button`
  background-color: #2980b9;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #3498db;
  }
`;

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <Title>About Me</Title>
      <AboutMeSection>
        <p>
          Hello! I'm <strong>Prasad Kulkarni</strong>, a passionate software developer with
          a strong academic and professional background. I'm currently pursuing my
          Master of Science in Computer Science at <strong>Binghamton University, SUNY</strong>,
          maintaining a GPA of <strong>3.9/4.0</strong>.
        </p>
      </AboutMeSection>
      <AboutMeSection>
        <SectionTitle>Technical Skills</SectionTitle>
        <List>
          <ListItem><strong>Languages:</strong> Java, JavaScript, TypeScript, Python, C, C++</ListItem>
          <ListItem>
            <strong>Frameworks/Libraries:</strong> ReactJS, NextJS, AngularJS, Spring Boot,
            Hibernate, TensorFlow, PyTorch
          </ListItem>
          <ListItem>
            <strong>Tools:</strong> Docker, Jenkins, Redis, Git, Postman, VSCode
          </ListItem>
          <ListItem>
            <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB
          </ListItem>
        </List>
      </AboutMeSection>
      <AboutMeSection>
        <SectionTitle>Professional Experience</SectionTitle>
        <h3>Web Programmer Intern & Graduate Assistant</h3>
        <p><strong>Office of Graduate Recruitment and Admissions, Binghamton University</strong></p>
        <List>
          <ListItem>
            Engineered a full-stack web application using Node.js backend and HTML/CSS/JavaScript frontend,
            reducing support inquiries by 70%.
          </ListItem>
          <ListItem>
            Developed data integration solutions between SLATE and Banner systems, optimizing query
            performance and automating workflows.
          </ListItem>
          <ListItem>
            Enhanced system efficiency by saving over 120+ support team hours monthly through optimized API integrations.
          </ListItem>
        </List>
        <h3>Associate Software Engineer</h3>
        <p><strong>Virtusa Consulting Services</strong></p>
        <List>
          <ListItem>
            Developed RESTful APIs and integrated frontends with React and AngularJS, delivering over 10 web applications.
          </ListItem>
          <ListItem>
            Improved CI/CD workflows with Jenkins and Docker, boosting deployment efficiency by 25%.
          </ListItem>
          <ListItem>
            Optimized MySQL database performance, reducing query execution time by 20%.
          </ListItem>
        </List>
      </AboutMeSection>
      <AboutMeSection>
        <SectionTitle>Projects</SectionTitle>
        <List>
          <ListItem>
            <strong>Sensor Data Visualization Platform:</strong> Built an interactive React website to manage MongoDB sensor data.
          </ListItem>
          <ListItem>
            <strong>Car Rental Management Platform:</strong> Designed a system streamlining bookings, boosting revenue by 20%.
          </ListItem>
        </List>
      </AboutMeSection>

      <AboutMeSection>
        <SectionTitle>Publications</SectionTitle>
        <p>
          <strong>Performance Assessment of Hetero-Junction Intrinsic Thin Film HIT Photovoltaic:</strong>
          Published a research paper at the ITM Web of Conferences in 2022.
        </p>
      </AboutMeSection>

      <AboutMeSection>
        <SectionTitle>Links</SectionTitle>
        <SocialLinks>
          <li>
            <SocialLinkHover href="https://www.linkedin.com/in/prasadkulkarni2714" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} /> LinkedIn
            </SocialLinkHover>
          </li>
          <li>
            <SocialLinkHover href="https://github.com/iampk14" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} /> GitHub
            </SocialLinkHover>
          </li>
          <li>
            <SocialLinkHover href="https://leetcode.com/iampk1431/" target="_blank" rel="noopener noreferrer">
              <FaCode size={30} /> LeetCode
            </SocialLinkHover>
          </li>
        </SocialLinks>
      </AboutMeSection>
    </AboutMeContainer>
  );
};

export default AboutMe;
