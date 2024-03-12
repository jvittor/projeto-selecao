import React from 'react';
import { ChakraProvider, Box, Grid, Text, Image } from '@chakra-ui/react';
import error from "../assets/404error.png";

function NotFoundPage() {
  return (
    <ChakraProvider>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bg="#121212"
        color="white"
      >
        <Grid templateColumns="1fr" textAlign="center">
          <Box b={20}>
            <Text fontSize="6xl">404</Text>
            <Text fontSize="xl">Página não encontrada</Text>
          </Box>
          <Image src={error} pb={20} boxSize={{ base: "400px", md: "500px" }} alt="Error" />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default NotFoundPage;
