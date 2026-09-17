import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from '@chakra-ui/react'

import React from "react";

const CertificateCard = ({ title, dateIssued, skills, embededCode, url }) => {
  return (
    <VStack backgroundColor="white" borderRadius="10px">
        <div style={{ margin: '0.8rem'}}>
          <Heading as="h5" size="sm" color="black" style={{ marginBottom: '0.8rem'}}>{title}</Heading>
          <Text color="grey" fontSize='sm' style={{ marginBottom: '0.8rem', textAlign: "justify"}}>{dateIssued}</Text>
          <Text color="grey" fontSize='sm' style={{ marginBottom: '0.8rem', textAlign: "justify"}}>{skills.join(", ")}</Text>
          <div dangerouslySetInnerHTML={{ __html: embededCode }} />
          <Text as="b" color="black" fontSize='xs'><Link href={url}>View the certificate <FontAwesomeIcon icon={faArrowRight} size="1x" /></Link></Text>
        </div>
    </VStack>
  );
};

export default CertificateCard;
