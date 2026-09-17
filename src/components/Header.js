import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import "../styles/Header.css";

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
  const [isOpen, setIsOpen] = useState(false);
  const scrollState = useRef();
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {

    const handleOutsideInteraction = (event) => {
      // Close when clicking outside the nav
      const isClickInsideNav = navRef.current && navRef.current.contains(event.target);
      const isClickInsideBurger = burgerRef.current && burgerRef.current.contains(event.target);
      if (isOpen && !isClickInsideNav && !isClickInsideBurger) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideInteraction);
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideInteraction);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);



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

 let lastScrollPosition = useRef(0);
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
          w="full"
          className="header-content"
        >
          <nav>
              <HStack spacing={8}>
                  {navItems}
              </HStack>
          </nav>
          {/* Buton Burger pentru mobil */}
          <button
            ref={burgerRef}
            className={`burger-btn ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigatia cu clasa dinamica */}
          <nav ref={navRef} className={`nav-links ${isOpen ? 'open' : ''}`}>
            <HStack spacing={8}>
              <a href="#certifications" value="certifications" onClick={handleClick("certifications")}>Certifications</a>
              <a href="#projects" value="projects" onClick={handleClick("projects")}>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
