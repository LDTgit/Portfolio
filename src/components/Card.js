import { Heading, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from '@chakra-ui/react'
import '../styles/Card.css';

import React from "react";

const Card = ({ title, techStack, description, imageSrc, url }) => {
  return (
    <VStack backgroundColor="white" borderRadius="10px" className="card">
        <Image borderRadius="10px" fit src={imageSrc} alt={title} />
        <div style={{ margin: '0.8rem'}}>
          <Heading as="h5" size="sm" color="black" style={{ marginBottom: '0.8rem'}}>{title}</Heading>

          <HStack className="tech-stack" align="start" spacing={1} style={{ marginBottom: '0.8rem'}}>
            <Text color="#333333" fontSize='xs'><strong>Tech Stack:</strong></Text>
            {techStack.map((tech, index) => (
              <Text key={index} color="#292727" fontSize='xs' spacing={2}>{tech}</Text>
            ))}
          </HStack>
          <Text color="grey" fontSize='sm' style={{ marginBottom: '0.8rem', textAlign: "justify"}}>{description}</Text>
          <Text as="b" color="black" fontSize='xs'><Link href={url}>View the source code <FontAwesomeIcon icon={faArrowRight} size="1x" /></Link></Text>
        </div>
    </VStack>
  );
};

export default Card;
