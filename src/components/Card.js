import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from '@chakra-ui/react'

import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <VStack backgroundColor="white" borderRadius="10px">
        <Image borderRadius="10px" fit src={imageSrc} alt={title} />
        <div style={{ margin: '0.8rem'}}>
          <Heading as="h5" size="sm" color="black" style={{ marginBottom: '0.8rem'}}>{title}</Heading>
          <Text color="grey" fontSize='sm' style={{ marginBottom: '0.8rem', textAlign: "justify"}}>{description}</Text>
          <Text href="www.google.com" as="b" color="black" fontSize='xs'><Link href={url}>View the source code <FontAwesomeIcon icon={faArrowRight} size="1x" /></Link></Text>
        </div>
    </VStack>
  );
};

export default Card;
