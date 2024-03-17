import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  Flex,
  Text,
  Stack,
  useMediaQuery 
} from "@chakra-ui/react";
import { MdDelete } from 'react-icons/md'

const DeletePaymentModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{base: "xs", md: "md"}}>
      <ModalOverlay />
      <ModalContent>
      <ModalHeader>
        <Flex align="center">
            <Icon as={MdDelete} boxSize={6} color="red.500" mr={2} />
            <Text mr={4} fontWeight="normal">Excluir pedido?</Text>
        </Flex>
        </ModalHeader>
        <ModalBody>
        <Stack whiteSpace="nowrap">
            <Text fontSize={"18px"}>
            Essa ação não poderá ser revertida, <br />
            Tem certeza que deseja excluir?
            </Text>
        </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onDelete}>
            Excluir
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeletePaymentModal;
