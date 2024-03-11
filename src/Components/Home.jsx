import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Grid
    templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
    gridTemplateRows={'50px 1fr 30px'}
    gridTemplateColumns={'300px 1fr'}
    h='100vh'
    gap='1'
    color='blackAlpha.700'
    fontWeight='bold'
  >
    <GridItem pl='2' bg='orange.300' area={'header'}>
      HeaderNavbar
    </GridItem>
    <GridItem pl='4' bg='pink.300' area={'nav'} height={'full'}>
      Nav
    </GridItem>
    <GridItem pl='2' bg='green.300' area={'main'}>
      Main
    </GridItem>
    <GridItem pl='2' bg='blue.300' area={'footer'}>
      Footer
    </GridItem>
  </Grid>
  );
};

export default Navbar;