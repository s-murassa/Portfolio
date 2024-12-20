import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

// **Step 5 (bonus)**

  const headerRef = useRef(null); 
  useEffect(() => { 
    let prevScrollPos = window.scrollY; 

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;

      if (!headerElement) return;
      
      // Determine scroll direction and apply transform
      if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        headerElement.style.transform = "translateY(0)";
      } else {
        // Scrolling down
        headerElement.style.transform = "translateY(-200px)";
      }
      // Update the previous scroll position
      prevScrollPos = currentScrollPos;
    };

    // Attach scroll listener
    window.addEventListener('scroll', handleScroll); 

    // Clean up the event listener on component unmount
    return () => { 
      window.removeEventListener('scroll', handleScroll) 
    } 
  }, []); 

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

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s" // Smooth animation
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
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={4}>
            {socials.map((social, index) => (
              <a key={index} href={social.url}>
              <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8} style={{ marginLeft: "auto" }}>
              {/* Add links to Projects and Contact me section */}
              <a
                href= "/#projects-section"
                onClick={e => {
                  handleClick("projects-section");
                }}
              >Projects</a>
              <a
                href= "/#contactme-section"
                onClick={e => {
                  handleClick("contactme-section");
                }}
              >Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
