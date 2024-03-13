import React, { useState } from "react";
import { Flex, Grid, GridItem, Text, Wrap, WrapItem, Avatar, useBreakpointValue, Divider, Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import PaymentIcon from "../../assets/PaymentIcon.png";
import BalanceIcon from "../../assets/BalanceIcon.png";
import LogoutIcon from "../../assets/LogoutIcon.png";
import NavItem from "../NavItem";
import PaymentTable from "../PaymentTable";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const navDisplay = useBreakpointValue({ base: isNavOpen ? "flex" : "none", md: "flex" });
  const displayValue = useBreakpointValue({ base: isNavOpen ? "none" : "block", md: "block" });

  return (
    <Grid
      templateAreas={`"header header" "nav main" "nav footer"`}
      gridTemplateRows={['50px auto 30px']}
      gridTemplateColumns={isNavOpen ? '300px 1fr' : '300px 1fr'} 
      h='100vh'
      gap='0'
      color='black'
      fontWeight='bold'
    >
      <GridItem pl='4' bg='#424242' area={'header'} pr={0}>
        <Flex justifyContent="space-between" alignItems="center" h="100%" w="100%" p={5}>
          <HamburgerIcon fontSize="24px" color="white" display={["flex", "flex", "none"]} onClick={toggleNav} />
          <Text opacity={navDisplay ? '100%' : '0%'} fontFamily={"Fira Code"} fontSize={"25px"} color={"white"} mr={{ base: 0, md: 0 }}>
            gepettopay
          </Text>
          <Wrap display={["none", "none", "flex"]} opacity={1} transition="opacity 0.3s ease-in-out">
            <WrapItem>
              <Avatar name="Might Guy" boxSize={10} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80" />
            </WrapItem>
          </Wrap>
        </Flex>
      </GridItem>
      <GridItem bg="#121212" area={'nav'} h={'full'} display={navDisplay} flexDirection="column" w={isNavOpen ? '300px' : '300px'}>
        <NavItem icon={PaymentIcon} label="Pagamento" />
        <NavItem icon={BalanceIcon} label="Saldo" />
        <Divider opacity={0.1} mt={2} mb={2}/>
        <NavItem icon={LogoutIcon} label="Sair da conta" />
      </GridItem>
      <GridItem pl='2' bg='white' area={'main'} h={'full'} colSpan={isNavOpen ? 2 : 2} display={displayValue}>
        <Text mt={5} ml={{ base: 8, md: 5 }} fontSize="24px" fontFamily={"Roboto"} fontStyle={"regular"} letterSpacing={"0.15px"}>Pagamentos</Text>
        <Box>
          <PaymentTable />
        </Box>
      </GridItem>
      <GridItem bg='white' area={'footer'}></GridItem>
    </Grid>
  );
};

export default Navbar;
