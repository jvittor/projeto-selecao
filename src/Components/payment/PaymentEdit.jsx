import React, { useState } from "react";
import { Stack, Text, InputGroup, InputLeftAddon, Input, Select, Button, Icon, Flex } from "@chakra-ui/react";
import mockBalance from "../mocksData/balance/balanceData.json";
import DeletePaymentModal from "../payment/PaymentModal/DeletePaymentModal"; // Importe o componente DeletePaymentModal
import { MdDelete } from 'react-icons/md'

const PaymentEdit = ({ onClose }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Estado para controlar a abertura do modal de exclusão

    //test de mock
    const balanceName = mockBalance.balance[0].name;

    const handleDeletePayment = () => {
        setIsDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };
      
    
    return (
        <Stack>
            <Text 
            mt={5} 
            ml={{ base: 8, md: 5 }} 
            fontSize="24px" 
            fontFamily={"Roboto"} 
            fontStyle={"regular"} 
            letterSpacing={"0.15px"}
            
            >
                <Flex align="center" justifyContent="space-between">
                    Editar Pagamento
                    <Icon display={{base: "block", md: "none"}} as={MdDelete} mr={10} onClick={handleDeletePayment} color="red" />
                    <DeletePaymentModal isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal} />
                </Flex>
            </Text>
            
            <Stack mt={5} ml={{ base: 8, md: 5 }} spacing={4}>
                <Input type="text" placeholder="Nome" w={{base: "93%", md: "98%"}}/>
                <Input type="text" placeholder="Descrição" w={{base: "93%", md: "98%"}}/>
                <InputGroup w={{base: "93%", md: "98%"}}>
                    <InputLeftAddon>
                        R$
                    </InputLeftAddon>
                    <Input type='number' placeholder='Digite o valor' />
                </InputGroup>
                <Select 
                    w={{base: "93%", md: "98%"}} 
                    placeholder={balanceName}
                    isDisabled
                >
                </Select>
                
                <Button
                position="absolute"
                bottom={4}
                right={{ base: 7, md: 4 }}
                colorScheme="teal"
                bg="#1976D2"
                _hover={{ bg: "#444D55" }}
                >
                    Atualizar
                </Button>
                <Button
                position="absolute"
                bottom={4}
                colorScheme="teal"
                bg="#1976D2"
                _hover={{ bg: "#444D55" }}
                w="108px"
                onClick={onClose}
                >
                    Cancelar
                </Button>
            </Stack>
        </Stack>
    );
}

export default PaymentEdit;
