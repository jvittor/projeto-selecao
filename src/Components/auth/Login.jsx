import React from 'react';
import { ChakraProvider, Box, Grid, GridItem, Input, Button, Card, CardHeader, CardBody, Image, Text, Link} from '@chakra-ui/react';
import Logo from '../../assets/logo.png';

function LoginForm() {
  return (
    <ChakraProvider>
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="#121212">
        <Card width="400px">
          <CardHeader textAlign="center" fontSize="2xl">
            <Image mx="auto" src={Logo} alt="Logo" />
            Login
          </CardHeader>
          <CardBody>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem colSpan={2}>
                <Input type="text" placeholder="Nome" size="md" variant="filled" />
              </GridItem>
              <GridItem colSpan={2}>
                <Input type="password" placeholder="Senha" size="md" variant="filled" />
              </GridItem>
              <GridItem colSpan={2}>
                <Button bg={"black"} size="md" width="100%" _hover={{ bg: "#444D55" }}>
                    <Text color={"white"}>Entrar</Text>
                    </Button>
              </GridItem>
              <GridItem colSpan={2} textAlign={"center"}>
                <Text>Não se cadastrou ainda? <Link color="black" href="/registrar">Click aqui</Link></Text>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
      </Box>
    </ChakraProvider>
  );
}

export default LoginForm;
