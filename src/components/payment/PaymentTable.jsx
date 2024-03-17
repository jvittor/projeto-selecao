import React, { useState } from "react";
import {
  Box,
  Table,
  Td,
  Th,
  Thead,
  Tr,
  Tbody,
  Tfoot,
  Select,
  Stack,
  Text,
  Input,
  IconButton,
  Button,
  Flex,
  Grid
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import { FiEdit2 } from "react-icons/fi";
import PaymentCreate from "./PaymentCreate";
import mockPayment from "../mocksData/payment/paymentData.json";

const PaymentTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPaymentCreate, setShowPaymentCreate] = useState(false);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };


  const paymentData = mockPayment.payment || [];
  const filteredData = paymentData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, filteredData.length);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleCreatePedido = () => {
    setShowPaymentCreate(true); 
  }

  return (
    <Grid>
      {showPaymentCreate ? ( 
        <PaymentCreate onCancel={() => setShowPaymentCreate(false)} />
      ) : (
        <Stack spacing={4} p={4}>
          <Text mt={5} ml={{ base: 3, md: 5 }} fontSize="24px" fontFamily={"Roboto"} fontStyle={"regular"} letterSpacing={"0.15px"}>Pagamentos</Text>
          {paymentData.length === 0 ? (
            <Flex direction="column" align="center" justify="center" height="70vh">
              <Text mb={4}>Não há pagamentos disponíveis.</Text>
              <Button onClick={handleCreatePedido} colorScheme="teal" bg={"#1976D2"} _hover={{ bg: "#444D55" }}>
                Criar Pedido
              </Button>
            </Flex>
          ) : (
            <>
              <Button
                position="absolute"
                top={20}
                right={{ base: 10, md: 8 }}
                colorScheme="teal"
                bg="#1976D2"
                _hover={{ bg: "#444D55" }}
                onClick={handleCreatePedido}
              >
                Criar Pedido
              </Button>
              <Stack w={{base : "90%", md: "97%"}}>
                <Input
                  placeholder="Pesquisa de pagamento"
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  ml={{ base: 3, md: 5 }}
                />
              </Stack>
              <Box>
                <Table variant="simple" size="50">
                  <Thead>
                    <Tr fontSize={{ base: "14px", md: "15px"}}>
                      <Th>Nome</Th>
                      <Th >Descrição</Th>
                      <Th>Valor</Th>
                      <Th >Ação</Th>
                    </Tr>
                  </Thead>
                  <Tbody> 
                    {filteredData
                      .slice(startIndex, endIndex)
                      .map((item) => (
                        <Tr key={item.name} fontSize={{ base: "14px", md: "15px"}}>
                          <Td >{item.name}</Td>
                          <Td >{item.description}</Td>
                          <Td>{item.value}</Td>
                          <Td pl={2}>
                            <Stack direction="row">
                              <IconButton
                                icon={<FiEdit2 />}
                                aria-label="Editar"
                                size="sm"
                              />

                            </Stack>
                          </Td>
                        </Tr>
                      ))}
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th colSpan={3} fontSize={"15px"} left={5} >
                        <Stack direction={["column", "row"]} spacing={2} >
                          <label htmlFor="rowsPerPage">
                            <Text whiteSpace="nowrap" mt={{base: 0, md: 2}}>Rows per page: </Text>
                          </label>
                          <Select
                            id="rowsPerPage"
                            value={rowsPerPage}
                            onChange={handleChangeRowsPerPage}
                            size="sm"
                            w={[20, 32]}
                            ml={['center', 2]}
                            mt={{base: 0, md: 1}}
                            align={["flex-start", "center"]}
                          >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                          </Select>
                          <Text whiteSpace="nowrap" direction="row" position={{base: "absolute", md: "relative"}} ml={{ base: "auto", md: 0 }} right={{base: 15, md: 0}} mt={{ base: 0, md: 2 }}>
                            {`${startIndex + 1}-${endIndex} of ${filteredData.length} `}
                          </Text>
                          <Stack direction="row" position={{base: "absolute", md: "relative"}} ml={{ base: "auto", md: 0 }} right={{base: 5, md: 0 }} mt={{ base: 5, md: 0 }}>
                            <IconButton
                              icon={<ChevronLeftIcon />}
                              onClick={handlePrevPage}
                              isDisabled={currentPage === 1}
                            />
                            <IconButton
                              icon={<ChevronRightIcon />}
                              onClick={handleNextPage}
                              isDisabled={currentPage === totalPages}
                            />
                          </Stack>
                        </Stack>
                      </Th>
                      <Th display={["none", "table-cell"]}></Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </Box>
            </>
          )}
        </Stack>
      )}
    </Grid>
  );
};

export default PaymentTable;
