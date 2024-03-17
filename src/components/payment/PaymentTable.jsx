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
  Grid,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FiEdit2, FiTrash } from "react-icons/fi";
import PaymentEditScreen from "./PaymentEdit";
import PaymentCreateScreen from "./PaymentCreate";
import mockPayment from "../mocksData/payment/paymentData.json";
import DeleteModal from "../payment/PaymentModal/DeletePaymentModal";

const PaymentTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showEditScreen, setShowEditScreen] = useState(false);
  const [paymentToEdit, setPaymentToEdit] = useState(null);
  const [showCreateScreen, setShowCreateScreen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const handleEditPayment = (payment) => {
    setPaymentToEdit(payment);
    setShowEditScreen(true);
  };

  const handleCreatePayment = () => {
    setShowCreateScreen(true);
  };

  const handleCloseCreateScreen = () => {
    setShowCreateScreen(false);
  };

  const handleCloseEditScreen = () => {
    setShowEditScreen(false);
  };

  const handleDeleteItem = () => {
    console.log("Item excluído:", itemToDelete);
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const handleShowDeleteModal = (item) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
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

  return (
    <Grid>
      {showEditScreen ? (
        <PaymentEditScreen payment={paymentToEdit} onClose={handleCloseEditScreen} />
      ) : showCreateScreen ? (
        <PaymentCreateScreen onCancel={handleCloseCreateScreen} />
      ) : (
        <>
          <Stack spacing={4} p={4}>
            <Text
              mt={5}
              ml={{ base: 3, md: 5 }}
              fontSize="24px"
              fontFamily={"arial"}
              fontStyle={"regular"}
              letterSpacing={"1px"}
            >
              Pagamentos
            </Text>
            {paymentData.length === 0 ? (
              <Flex direction="column" align="center" justify="center" height="70vh">
                <Text mb={4}>Não há pagamentos disponíveis.</Text>
                <Button onClick={handleCreatePayment} colorScheme="teal" bg={"#1976D2"} _hover={{ bg: "#444D55" }}>
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
                  onClick={handleCreatePayment}
                >
                  Criar Pedido
                </Button>
                <Stack w={{ base: "90%", md: "97%" }}>
                  <Input
                    placeholder="Pesquisa de pagamento"
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    ml={{ base: 3, md: 5 }}
                  />
                </Stack>
                <Box>
                  <Table
                    variant="simple"
                    size="20"
                    w={{ base: "90%", md: "98%" }}
                    position={"relative"}
                    margin={{ base: "20px", md: "20px" }}
                    mt={5}
                  >
                    <Thead>
                      <Tr fontSize={{ base: "10px", md: "15px" }}>
                        <Th>Nome</Th>
                        <Th>Descrição</Th>
                        <Th pr={{ base: 25, md: 50 }}>Valor</Th>
                        <Th>Ação</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {filteredData.slice(startIndex, endIndex).map((item) => (
                        <Tr key={item.name} fontSize={{ base: "14px", md: "15px" }}>
                          <Td>{item.name}</Td>
                          <Td>{item.description}</Td>
                          <Td>{item.value}</Td>
                          <Td>
                            <Stack direction="row">
                              <IconButton
                                icon={<FiEdit2 />}
                                aria-label="Editar"
                                size="sm"
                                onClick={() => handleEditPayment(item)}
                              />
                              <IconButton
                                display={{ base: "none", md: "center" }}
                                ml={2}
                                icon={<FiTrash />}
                                aria-label="Excluir"
                                size="sm"
                                onClick={() => handleShowDeleteModal(item)}
                              />
                            </Stack>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                    <Tfoot>
                      <Tr>
                        <Th colSpan={3} fontSize={"15px"} left={5}>
                          <Stack direction={["column", "row"]} spacing={2}>
                            <label htmlFor="rowsPerPage">
                              <Text whiteSpace="nowrap" mt={{ base: 0, md: 2 }}>
                                Rows per page:{" "}
                              </Text>
                            </label>
                            <Select
                              id="rowsPerPage"
                              value={rowsPerPage}
                              onChange={handleChangeRowsPerPage}
                              size="sm"
                              w={[20, 32]}
                              ml={["center", 2]}
                              mt={{ base: 0, md: 1 }}
                              align={["flex-start", "center"]}
                            >
                              <option value={5}>5</option>
                              <option value={10}>10</option>
                              <option value={20}>20</option>
                            </Select>
                            <Text
                              whiteSpace="nowrap"
                              direction="row"
                              position={{ base: "absolute", md: "relative" }}
                              ml={{ base: "auto", md: 0 }}
                              right={{ base: 15, md: 0 }}
                              mt={{ base: 0, md: 2 }}
                            >
                              {`${startIndex + 1}-${endIndex} of ${filteredData.length} `}
                            </Text>
                            <Stack
                              direction="row"
                              position={{ base: "absolute", md: "relative" }}
                              ml={{ base: "auto", md: 0 }}
                              right={{ base: 1, md: 0 }}
                              mt={{ base: 7, md: 0 }}
                            >
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
          <DeleteModal
            isOpen={showDeleteModal}
            onClose={() => setShowDeleteModal(false)}
            onDelete={handleDeleteItem}
          />
        </>
      )}
    </Grid>
  );
};

export default PaymentTable;
