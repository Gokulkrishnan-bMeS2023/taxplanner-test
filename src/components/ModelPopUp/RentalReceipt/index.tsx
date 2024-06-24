"use client";
import React, { useRef } from "react";
import * as Yup from "yup";
import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Stack,
  Box,
  Tooltip,
  Select,
} from "@chakra-ui/react";

const RentalReceipt: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const initialRef = useRef<HTMLInputElement>(null);
  const finalRef = useRef<HTMLButtonElement>(null);
  const [size, setSize] = React.useState("xl");

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={size}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Seek Help</ModalHeader>
          <Divider
            mt="0.1rem"
            mb="1.2rem"
            border="0"
            borderTop="1px solid rgba(0, 0, 0, 0.1)"
          />
          <ModalCloseButton />
          <Text
            px="4"
            textAlign="center"
            alignItems="center"
            justifyContent="center"
          >
            Our receipt without watermark at additional cost of Rs.500.00 only
          </Text>
          <Divider
            mt="1.5rem"
            mb="1.2rem"
            border="0"
            borderTop="1px solid rgba(0, 0, 0, 0.1)"
          />
          <ModalFooter>
            <Stack direction="row" spacing="3">
              <Button
                onClick={onClose}
                bg="white"
                color="#2D50D6"
                border=" 1px solid #2D50D6"
                _hover={{
                  bg: "#2D50D6",
                  borderColor: "#2D50D6",
                  color: "#fff",
                }}
              >
                Cancel
              </Button>
              <Button
                color="#fff"
                type="submit"
                border="1px solid #2D50D6"
                bg="#2D50D6"
                _hover={{
                  bg: "#02ABEF",
                  borderColor: "#02ABEF",
                  color: "#fff",
                }}
              >
                Buy Now
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RentalReceipt;