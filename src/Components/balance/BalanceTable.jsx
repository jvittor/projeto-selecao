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
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const data = [
  // test datA

];

const BalanceTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const filteredData = data.filter((item) =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase())
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
    // test
  }

  return (
    
    <Grid>
    <Stack spacing={4} p={4}>

    <Text mt={5} ml={{ base: 3, md: 5 }} fontSize="24px" fontFamily={"Roboto"} fontStyle={"regular"} letterSpacing={"0.15px"}>Saldos</Text>
  
      
      {data.length === 0 ? (
      <Flex direction="column"
      align="center"
      justify="center"
      height="70vh"
      >
        <Text mb={4}>Não há saldos disponíveis.</Text>
        <Button onClick={handleCreatePedido} colorScheme="teal" bg={"#1976D2"} _hover={{ bg: "#444D55" }}>
          Criar Saldo
        </Button>
      </Flex>
    ) : (
      <>
      <Box>
        <Input
          placeholder="Pesquisa de pagamento"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <Box overflowX="auto">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Descrição</Th>
              <Th>Valor</Th>
              <Th>Ação</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData
              .slice(startIndex, endIndex)
              .map((item) => (
                <Tr key={item.nome}>
                  <Td>{item.nome}</Td>
                  <Td>{item.descricao}</Td>
                  <Td>{item.valor}</Td>
                  <Td>
                    <Stack direction="row">
                      <IconButton
                        icon={<FiEdit2 />}
                        aria-label="Editar"
                        size="sm"
                      />
                      <IconButton
                        icon={<FiTrash2 />}
                        aria-label="Excluir"
                        size="sm"
                      />
                    </Stack>
                  </Td>
                </Tr>
              ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th colSpan={3} >
                <Stack direction={["column", "row"]} spacing={2} align={["flex-start", "center"]}>
                  <label htmlFor="rowsPerPage">
                    <Text whiteSpace="nowrap">Rows per page: </Text>
                  </label>
                    <Select
                      id="rowsPerPage"
                      value={rowsPerPage}
                      onChange={handleChangeRowsPerPage}
                      size="sm"
                      w={[20, 32]}
                      ml={['center', 2]}
                      align={["flex-start", "center"]}
                    >
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                    </Select>
                  <Text ml={[0, 2]} whiteSpace="nowrap">
                    {`${startIndex + 1}-${endIndex} of ${filteredData.length} `}
                  </Text>
                  <Stack direction="row">
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
  </Grid>
  );
};

export default BalanceTable;
