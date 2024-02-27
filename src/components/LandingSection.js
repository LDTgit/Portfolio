import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import lauraImage from "../images/Laura3.jpg";

const greeting = "Hello, I am Laura!";
const bio1 = "A frontend developer.";
const bio2 = "Explore the journey of becoming a web developer through this dynamic portfolio showcasing a diverse range of projects. Using HTML, CSS, JavaScript, React, and Python, I've crafted web applications that demonstrate my commitment to creating engaging and functional digital experiences.";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size="2xl" name="Laura" src={lauraImage}></Avatar>
      <Heading as='h5' size='sm'>{greeting}</Heading>
      <br/>
      <Heading>{bio1}</Heading>
      <Heading as='h4' size='md'>{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
