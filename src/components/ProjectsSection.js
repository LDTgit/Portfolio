import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Online Scheduling Tool",
    description:
      "Handy scheduling tool designed specifically for veterinary practices, powered by React.js!🔥️ This project is designed for veterinary clinics and it's a comprehensive scheduling application tailored for internal use. Developed with JavaScript and Django, this app streamlines appointment management within the clinic. Employees can efficiently schedule and organize appointments, optimizing the workflow for enhanced veterinary care.",
    getImageSrc: () => require("../images/photo1.jpg"),
    url: "https://github.com/LDTgit/CS50_paw",
  },
  {
    title: "Commerce",
    description:
      "An online commerce platform that allows users to connect and trade. Dive into the world of online commerce with my application resembling eBay. This project, developed using React, presents an intuitive interface for users to buy and sell products securely. The incorporation of HTML, CSS, and JavaScript ensures a seamless and visually appealing e-commerce experience.",
    getImageSrc: () => require("../images/commerce.jpg"),
    url: "https://github.com/LDTgit/CS50_commerce",
  },
  {
    title: "Network",
    description:
      "A social network developed with Django. Explore a networking platform reminiscent of X (former Twitter), where users can connect, share thoughts, and engage in conversations. This responsive application, built with HTML, CSS, and JavaScript, showcases my skills in creating interactive and visually appealing social platforms.",
    getImageSrc: () => require("../images/network.jpg"),
    url: "https://github.com/LDTgit/CS50_network",
  },
  {
    title: "Restaurant website",
    description:
      "A website developed for a small restaurant. Experience my creativity in designing a vibrant website for a restaurant, showcasing the fusion of HTML, CSS, and JavaScript. This user-friendly website not only provides essential information about the restaurant but also offers an immersive visual experience, reflecting my dedication to creating aesthetically pleasing digital content.",
    getImageSrc: () => require("../images/restaurant.jpg"),
    url: "https://github.com/LDTgit/Little-Lemon",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#33734c"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>

      <Box className="project-list" >
      {projects.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          description={project.description}
          imageSrc={project.getImageSrc()}
          url={project.url}
        />
      ))}
    </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
