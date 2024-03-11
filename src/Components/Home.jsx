import React, { useState } from "react";
import { Image, Flex, Box, Grid, GridItem, Text, Wrap, WrapItem, Avatar, useBreakpointValue, HStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MoneyIcon from "../assets/MoneyIcon.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const navDisplay = useBreakpointValue({ base: isNavOpen ? "flex" : "none", md: "flex" });

  return (
    <Grid
    templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
    gridTemplateRows={['50px auto 30px']}
    gridTemplateColumns={isNavOpen ? '300px 1fr' : '300px 1fr'}
    h='100vh'
    gap='0'
    color='black'
    fontWeight='bold'
  >
    <GridItem pl='4' bg='#424242' area={'header'}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h="100%"
        w="100%"
        p={5}
        
      >
        <HamburgerIcon
          mt={3}
          fontSize="24px"
          color="white"
          display={["flex", "flex", "none"]}
          onClick={toggleNav}
        />
        <Text
          opacity={navDisplay ? '100%' : '0%'}
          fontFamily={"Fira Code"}
          fontSize={"25px"}
          color={"white"}
          
          mr={{ base: 5, md: 0 }}
        >
          gepetto
        </Text>
        <Wrap
        display={useBreakpointValue({ base: 'none', md: isNavOpen ? 'flex' : 'none' })}
        opacity={isNavOpen ? 1 : 0}
        transition="opacity 0.3s ease-in-out"
        
        >
          <WrapItem>
            <Avatar
              name="Might Guy"
              boxSize={10}
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80"
            />
          </WrapItem>
        </Wrap>
      
        
      </Flex>
    </GridItem>
    <GridItem
        bg="#121212"
        area={'nav'}
        height={'full'}
        display={navDisplay}
        flexDirection="column"
        w={isNavOpen ? '300px' : '300px'}

      >
        <Box
          bg="#121212"
          w={"100%"}
          h={"50px"}
          mt={2}
          as="button"
          _hover={{
            bg: "#444D55",
          }}
        >
          <HStack ml={{ base: 10, md: 8 }} spacing={4} align="center">
            <Image src={MoneyIcon} boxSize={5} />
            <Text
              fontFamily={"Fira Code"}
              fontSize={"18px"}
              pr={5}
              color={"white"}
              fontStyle={"regular"}
              letterSpacing={"0.15px"}
            >
              Pagamento
            </Text>
          </HStack>
        </Box>
        <Box
          bg="#121212"
          w={"100%"}
          h={"50px"}
          mt={2}
          as="button"
          _hover={{
            bg: "#444D55",
          }}
        >
        <HStack ml={{ base: 10, md: 8 }} spacing={4} align="center">
            <Image src={MoneyIcon} boxSize={5} />
            <Text
              fontFamily={"Fira Code"}
              fontSize={"18px"}
              color={"white"}
              fontStyle={"regular"}
              letterSpacing={"0.15px"}
            >
              Saldo
            </Text>
          </HStack>
        </Box>
      </GridItem>
      <GridItem pl='2' bg='white' area={'main'} h={'full'}  colSpan={isNavOpen ? 1 : 2}>
        {/* Main content */}
      </GridItem>
      <GridItem bg='white' area={'footer'}>
        {/* Footer content */}
      </GridItem>
    </Grid>
  );
};

export default Navbar;
