import { Heading, HStack, Image, Text, VStack, Box} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box
    backgroundColor="white"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="md"
    >
      {/* Image Section */}
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        width="100%"
      />
      {/* Content Section */}
      <VStack spacing={4} align="flex-start" p={4} height="100%">
        <VStack spacing={2} align="flex-start">
          <Heading as="h3" size="md" color="black">{title}</Heading>
          <Text fontSize="sm" color="gray.600">{description}</Text>
        </VStack>
        {/* Footer */}
        <HStack spacing={2} align="center" color="teal.500" cursor="pointer">
          <Text fontSize="sm" fontWeight="bold">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>      
    </Box>
  );
};

export default Card;
