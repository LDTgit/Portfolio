import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import CertificateCard from "./CertificateCard";
import "../styles/CertificationsSection.css";

const certifications = [
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    dateIssued: "Issued Jun 2026",
    skills: ["AWS Architecture", "AWS Cloud", "AWS Core Services"],
    embededCode: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="21531c4c-af17-4558-aba3-1551e63bc236" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
    url: "https://www.credly.com/badges/21531c4c-af17-4558-aba3-1551e63bc236/public_url",
  },
  {
    title: "AWS Academy Graduate - Cloud Operations",
    dateIssued: "Issued Jun 2026",
    skills: ["AWS Cloud Best Practices", "AWS Cloud Computing", "AWS Cloud Operations"],
    embededCode: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="9bd6e3f5-0365-4c97-aa30-f7aa59f85d24" data-share-badge-host="https://www.credly.com"></div><scrip type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
    url: "https://www.credly.com/badges/9bd6e3f5-0365-4c97-aa30-f7aa59f85d24/public_url",
  },
  {
    title: "AWS Academy Graduate - Machine Learning Foundations",
    dateIssued: "Issued May 2026",
    skills: ["Artificial Intelligence: Machine Learning", "AWS Cloud Computing", "Machine Learning Foundations"],
    embededCode: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="5058ce5c-04ee-4f63-bff5-3e26e144576b" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
    url: "https://www.credly.com/badges/5058ce5c-04ee-4f63-bff5-3e26e144576b/public_url",
  },
  {
    title: "Meta Front-End Developer",
    dateIssued: "Issued Aug 2024",
    skills: ["JavaScript", "React", "HTML", "CSS", "UX/UI Design", "Version Control"],
    embededCode: ``,
    url: "https://coursera.org/share/f8cd009bfd07a8efa9022e2e40d176d1",
  },
  {
    title: "CS50 Web Programming with Python and JavaScript",
    dateIssued: "Issued Jun 2023",
    skills: ["Python", "JavaScript", "Django"],
    embededCode: ``,
    url: "https://cs50.harvard.edu/certificates/37253708-c282-404a-a62b-393d8556eb85",
  },

];

const CertificationsSection = () => {
  return (
    <FullScreenSection
      className="certifications-section"
      isDarkBackground
      p={8}
      spacing={8}
    >
      <Heading as="h1" id="certifications-section">
        Certifications & Badges
      </Heading>

      <Box className="certifications-list" >
      {certifications.map((certification) => (
        <CertificateCard
          key={certification.title}
          title={certification.title}
          dateIssued={certification.dateIssued}
          skills={certification.skills}
          embededCode={certification.embededCode}
          url={certification.url}
        />
      ))}
    </Box>
    </FullScreenSection>
  );
};

export default CertificationsSection;