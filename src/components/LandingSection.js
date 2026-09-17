import React from "react";
import { Avatar, Image, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import lauraImage from "../images/Laura3.jpg";
import "../styles/LandingSection.css";

const devName = "Laura Dumitrescu-Tudor";
const devTitle = "Junior Software Developer & Machine Learning Enthusiast";
const bio1 = "2026 Computer Science B.Sc. & Former Legal Counselor | Passionate about AI, ML, and Web Development | Dedicated to Continuous Learning and Growth";

const LandingSection = () => (
  <FullScreenSection
    isDarkBackground
    className="landing-section"
  >
    <VStack>
      <Image size="2xl" name="Laura" src={lauraImage} className="landing-avatar"></Image>
      <Heading as='h5' size='sm'>{devName}</Heading>
      <br/>
      <Heading className="bio1">{devTitle}</Heading>
      <Heading as='h4' size='md' fontWeight={400} padding={20}>{bio1}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
