import Navbar from "@/components/Navbar";
import { Button, Center, Heading, Flex, Box, Text } from "@chakra-ui/react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tax Planner - Not Found",
  description: "",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <Center background={"#f9f9f9"} height={"100vh"} position={"relative"}>
        <Box
          bg={"#fff"}
          height={"97px"}
          content=""
          width={"100%"}
          position={"fixed"}
          left={0}
          top={0}
        ></Box>
        <Flex direction={"column"}>
          <Heading as={"h1"} textAlign={"center"} color="#01acf1">
            404
          </Heading>
          <Heading as={"h6"} my={6} textAlign={"center"}>
            Page Not Found
          </Heading>
          <Text color={"gray.500"} mb={6}>
            The page you&apos;re looking for does not seem to exist
          </Text>
          <Button
            as={Link}
            href={"/"}
            bgColor="#01acf1"
            color={"white"}
            my={6}
            p={6}
            w={"fit-content"}
            border="1px solid #fff"
            alignSelf={"center"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bgColor: "#fff",
              border: "1px solid #01acf1",
              color: "#01acf1",
              bg: "#e5f6fd",
            }}
          >
            Back to home
          </Button>
        </Flex>
      </Center>
    </>
  );
}
