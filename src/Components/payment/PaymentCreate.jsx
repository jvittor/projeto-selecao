import React from "react";
import { Stack, Text, InputGroup, InputLeftAddon, Input, Select, Button } from "@chakra-ui/react";
import mockBalance from "../mocksData/balance/balanceData.json";

const PaymentCreate = ({ onCancel }) => {

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
                Criar Pedido
            </Text>
            <Stack mt={5} ml={{ base: 8, md: 5 }} spacing={4}>
                <Input type="text" placeholder="Nome" w={{base: "90%", md: "98%"}}/>
                <Input type="text" placeholder="Descrição" w={{base: "90%", md: "98%"}}/>
                <InputGroup w={{base: "90%", md: "98%"}}>
                    <InputLeftAddon>
                        R$
                    </InputLeftAddon>
                    <Input type='number' placeholder='Digite o valor' />
                </InputGroup>
                <Select 
                    w={{base: "90%", md: "98%"}} 
                    placeholder='Selecione um saldo'
                >
                    {mockBalance.balance.map((balance) => (
                        <option 
                            key={balance.balanceId} 
                            value={`${balance.name} - R$ ${balance.valueRemaining}`}
                        >
                            {`${balance.name} - R$ ${balance.valueRemaining}`}
                        </option>
                    ))}
                </Select>
                <Button
                position="absolute"
                bottom={4}
                right={{ base: 7, md: 4 }}
                colorScheme="teal"
                bg="#1976D2"
                _hover={{ bg: "#444D55" }}
                >
                    Criar Pedido
                </Button>
                <Button
                position="absolute"
                bottom={4}
                colorScheme="teal"
                bg="#1976D2"
                _hover={{ bg: "#444D55" }}
                w="115px"
                onClick={onCancel}
                >
                    Cancelar
                </Button>
            </Stack>
        </Stack>
    );
}

export default PaymentCreate;
