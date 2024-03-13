import React from 'react';
import { ChakraProvider, Box, Grid, GridItem, Input, Button, Card, CardHeader, CardBody, Image, Text } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';
import Logo from '../../assets/logo.png';

function RegisterForm() {
    const handleArrowClick = () => {
        window.location.href = '/entrar';
        };
  return (
    <ChakraProvider>
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="#121212">
        <Card width="400px">
          <span
            style={{
              cursor: 'pointer',
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              transform: 'scale(1)',
              marginLeft: '10px',
              marginTop: '10px',
            }}
          >
            <FiArrowLeft
              size={20}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onClick={handleArrowClick}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </span>
          <CardHeader textAlign="center" fontSize="2xl">
            <Image mx="auto" src={Logo} alt="Logo" />
              Cadastro
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
            </Grid>
          </CardBody>
        </Card>
      </Box>
    </ChakraProvider>
  );
}

export default RegisterForm;
