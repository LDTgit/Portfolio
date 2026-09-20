import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import "../styles/ProjectsSection.css";

const projects = [
  {
    title: "Clinical Decision Support System (CDSS) for Hematology | Bachelor’s Thesis 2026 (Decision Trees used in medicine for establishing a diagnosis)",
    techStack: ["Python", "Scikit-learn", "Machine Learning", "Decision Trees", "Random Forests", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    description:
      "A Python-based ML system to diagnose 15 hematological conditions from more than 7000 patient records, using Decision Trees and Random Forests models, achieving 95.7% overall accuracy and 100% Recall on critical oncological classes for the Decision Tree model and 97.8% overall accuracy with 95% Recall on critical oncological classes for the Random Forest model.",
    getImageSrc: () => require("../images/Hema.png"),
    url: "https://github.com/LDTgit/CDSS_Hematology",
  },
  {
    title: "Fraud Detection ML Model",
    techStack: ["Python", "Scikit-learn", "Machine Learning", "Classification"],
    description:
      "Implemented a machine learning classification workflow in Python to detect anomalies and fraudulent behavior within highly imbalanced financial datasets. Handled data preprocessing, metric selection (Precision-Recall AUC) and structured feature selection.",
    getImageSrc: () => require("../images/Fraud.jpg"),
    url: "https://github.com/LDTgit/Fraud_Detection",
  },
  {
    title: "Law Firm Website",
    techStack: ["React", "Chakra UI", "JavaScript"],
    description:
      "A modern landing page for a legal services brand, built to present a law firm’s expertise, professional team, legal services, and contact information, built with React and Chakra UI. The website features a clean and modern design, providing an engaging user experience.",
    getImageSrc: () => require("../images/LawFirm.jpeg"),
    url: "https://github.com/LDTgit/just-web",
  },
  {
    title: "Educational Desktop Application",
    techStack: ["Java", "JavaFX", "Maven", "API Integration"],
    description:
      "A desktop application designed for educational purposes, built with Java and JavaFX. The application provides an interactive learning environment for students to engage with educational content.",
    getImageSrc: () => require("../images/Edu.jpg"),
    url: "https://github.com/LDTgit/EduTrackFX",
  },
  {
    title: "Recipe Finder",
    techStack: ["Java", "Android Studio", "API Integration"],
    description:
      "An Android application with asyncronous API fetching (TheMealDB), client-side pagination and image caching, that allows users to search for recipes based on ingredients they have on hand. Developed using Java and Android Studio, this app provides a user-friendly interface for discovering new recipes and meal ideas.",
    getImageSrc: () => require("../images/RecipeFinder.jpg"),
    url: "https://github.com/LDTgit/RecipeFinder",
  },
  {
    title: "Online Scheduling Tool",
    techStack: ["JavaScript", "Django"],
    description:
      "Handy scheduling tool designed specifically for veterinary practices, powered by React.js! This project is a scheduling application tailored for the internal use of veterinary clinics. Developed with JavaScript and Django, this app streamlines appointment management within the clinic. Employees can efficiently schedule and organize appointments, optimizing the workflow for enhanced veterinary care.",
    getImageSrc: () => require("../images/photo1.jpg"),
    url: "https://github.com/LDTgit/CS50_paw",
  },
  {
    title: "Commerce",
    techStack: ["JavaScript", "React"],
    description:
      "An online commerce platform, resembling eBay, that allows users to connect and trade. This project, developed using React, presents an intuitive interface for users to buy and sell products securely. The incorporation of HTML, CSS, and JavaScript ensures a seamless and visually appealing e-commerce experience.",
    getImageSrc: () => require("../images/commerce.jpg"),
    url: "https://github.com/LDTgit/CS50_commerce",
  },
  {
    title: "Network",
    techStack: ["Python", "Django"],
    description:
      "A social network developed with Django. Explore a networking platform reminiscent of X (former Twitter), where users can connect, share thoughts, and engage in conversations. This responsive application, built with HTML, CSS, and JavaScript, showcases my skills in creating interactive and visually appealing social platforms.",
    getImageSrc: () => require("../images/network.jpg"),
    url: "https://github.com/LDTgit/CS50_network",
  },
  {
    title: "Restaurant website",
    techStack: ["HTML", "CSS", "JavaScript"],
    description:
      "A website for a small restaurant, developed using HTML, CSS, and JavaScript. This user-friendly website not only provides essential information about the restaurant but also offers an immersive visual experience.",
    getImageSrc: () => require("../images/restaurant.jpg"),
    url: "https://github.com/LDTgit/Little-Lemon",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      className="projects-section"
      isDarkBackground
      p={8}
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
          techStack={project.techStack}
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
