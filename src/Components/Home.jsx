import React from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import LogoCompany from "../assets/logo.png"

const Navbar = () => {
  return (
    <Grid
    templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
    gridTemplateRows={'50px 1fr 30px'}
    
    gridTemplateColumns={'300px 1fr'}
    h='100vh'
    gap='0'
    color='black'
    fontWeight='bold'
  >
    <GridItem pl='4' bg='#424242' area={'header'}>
      <Text
      fontFamily={"Fira Code"}
      fontSize={"20px"}
      color={"white"}
      pt={2.5}
      
      >
        gepetto
      </Text>
    </GridItem>
    <GridItem bg='#121212' area={'nav'} height={'full'}>
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
          <Text
          fontFamily={"Fira Code"}
          fontSize={"16px"}
          pr={5}
          color={"white"}
          fontStyle={"regular"}
          letterSpacing={"0.15px"}
          >Pagamento</Text>
        </Box>
        <Box
        g="#121212"
        w={"100%"}
        h={"50px"}
        mt={2}
        as="button"
        _hover={{
          bg: "#444D55", 
        }}
        >
          <Text
          fontFamily={"Fira Code"}
          fontSize={"16px"}
          pr={5}
          color={"white"}
          >
            Saldo
          </Text>
        </Box>
    </GridItem>
    <GridItem pl='2' bg='white'>
      Main
    </GridItem>
    <GridItem bg='white' area={'footer'}>
      </GridItem>
  </Grid>
  );
};

export default Navbar;