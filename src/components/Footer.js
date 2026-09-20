import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          className="footer-content"
          px={12}
          color="white"
          maxWidth="1024px"
          height={16}
        >
          <p>LDT  © 2024</p>
          <Link to='/privacy-policy'>Politică Confidențialitate</Link>
          <Link to='/cookie-policy'>Politică Cookie-uri</Link>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
