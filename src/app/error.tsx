"use client";

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Box height={"100vh"}>
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="100vh"
        gap={"10px"}
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Something went wrong!
        </AlertTitle>
        <AlertDescription maxWidth="sm">{error?.message}</AlertDescription>
        <Flex gap={"10px"}>
          <Button
            colorScheme="red"
            onClick={() => reset()}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Try again
          </Button>
          <Button
            colorScheme="blue"
            bg={"#01acf1"}
            as={Link}
            href={"/"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Back To Home
          </Button>
        </Flex>
      </Alert>
    </Box>
  );
}
