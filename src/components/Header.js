import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faGithub, faLinkedin, faEnvelope)

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: laura.dumitrescu.tudor@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/LDTgit",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/laura-dumitrescu-tudor-86a9a5115",
  },

];

const navItems = socials.map((item, index )=> {
  return <a key={index} href={item.url}><FontAwesomeIcon icon={item.icon} size="2x" /></a>
})

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollState = useRef();
  let lastScrollPosition = 0;
  let navIsShowing = true;

  useEffect(() => {
    const handleScroll = () => {
      (lastScrollPosition<window.scrollY)?(navIsShowing=false):(navIsShowing=true);
      if (navIsShowing==true){
        scrollState.current.style.transform = 'translateY(0)'
      } else {
        scrollState.current.style.transform = 'translateY(-200px)'
      }
      lastScrollPosition=window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      ref={scrollState}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
              <HStack spacing={8}>
                  {navItems}
              </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects" value="projects" onClick={handleClick("projects")}>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
