import React, { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
  Wrap,
  WrapItem,
  Avatar,
  useBreakpointValue,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import PaymentIcon from "../../assets/PaymentIcon.png";
import BalanceIcon from "../../assets/BalanceIcon.png";
import LogoutIcon from "../../assets/LogoutIcon.png";
import NavItem from "../NavItem";
import PaymentTable from "../payment/PaymentTable";
import BalanceTable from "../balance/BalanceTable";
import PaymentCreate from "../payment/PaymentCreate";

const Layout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const navDisplay = useBreakpointValue({ base: isNavOpen ? "flex" : "none", md: "flex" });
  const displayValue = useBreakpointValue({ base: isNavOpen ? "none" : "block", md: "block" });
  const [activeTable, setActiveTable] = useState("payments");
  const [showPaymentCreate, setShowPaymentCreate] = useState(false);

  const handleMenuClick = (menu) => {
    setActiveTable(menu);
  };

  const handleCreatePedido = () => {
    setShowPaymentCreate(true); 
  };

  return (
    <Grid
      templateAreas={`"header header" "nav main" "nav footer"`}
      gridTemplateRows={["50px auto 30px"]}
      gridTemplateColumns={isNavOpen ? "300px 1fr" : "300px 1fr"}
      h="100vh"
      gap="0"
      color="black"
      fontWeight="bold"
    >
      <GridItem pl="4" bg="#424242" area={"header"} pr={0}>
        <Flex justifyContent="space-between" alignItems="center" h="100%" w="100%" p={5}>
          <HamburgerIcon fontSize="24px" color="white"  display={["flex", "flex", "none"]} onClick={toggleNav}/>
          <Text opacity={navDisplay ? "100%" : "0%"} fontFamily={"Fira Code"} fontSize={"25px"} color={"white"} mr={{ base: 4, md: 0 }}>
            gepettopay
          </Text>
          <Wrap display={["none", "none", "flex"]} opacity={1} transition="opacity 0.3s ease-in-out">
            <WrapItem>
              <Avatar name="Might Guy" mr={3} boxSize={8} src="https://i.stack.imgur.com/l60Hf.png" />
            </WrapItem>
          </Wrap>
        </Flex>
      </GridItem>
      <GridItem bg="#121212" area={"nav"} h={"full"} display={navDisplay} flexDirection="column" w={isNavOpen ? "300px" : "300px"}>
        <Flex onClick={() => handleMenuClick("payments")}>
          <NavItem icon={PaymentIcon} label="Pagamentos" />
        </Flex>
        <Flex onClick={() => handleMenuClick("balances")}>
          <NavItem icon={BalanceIcon} label="Saldo" />
        </Flex>
        <Divider opacity={0.1} mt={2} mb={2} />
        <NavItem icon={LogoutIcon} label="Sair da conta" />
        <NavItem label="Acessar Conta" />
      </GridItem>
      <GridItem pl="2" bg="white" area={"main"} h={"full"} colSpan={isNavOpen ? 2 : 2} display={displayValue}>
        <Box>
          {activeTable === "payments" && !showPaymentCreate && <PaymentTable />}
          {activeTable === "balances" && <BalanceTable />}
          {showPaymentCreate && <PaymentCreate onCancel={() => setShowPaymentCreate(false)} />}
        </Box>
        <Box></Box>
      </GridItem>
      <GridItem bg="white" area={"footer"}></GridItem>
    </Grid>
  );
};

export default Layout;
