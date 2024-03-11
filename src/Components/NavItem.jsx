// NavItem.js
import React from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";

const NavItem = ({ icon, label }) => (
  <Box bg="#121212" w="100%" h="50px" mt={2} as="button" _hover={{ bg: "#444D55" }}>
    <HStack ml={{ base: 10, md: 8 }} spacing={4} align="center">
      <Image src={icon} boxSize={5} />
      <Text fontFamily={"Fira Code"} fontSize={"18px"} pr={5} color={"white"} fontStyle={"regular"} letterSpacing={"0.15px"}>
        {label}
      </Text>
    </HStack>
  </Box>
);

export default NavItem;
