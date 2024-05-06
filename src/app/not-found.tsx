import DashboardNavbar from "@/components/DashboardNavbar";
import Navbar from "@/components/Navbar";
import { Button, Center, Heading, Flex, Box, Text } from "@chakra-ui/react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tax Planner - Not Found",
  description: "",
};

export default function NotFound() {
  const user = true;

  const ButtonName = user ? "Back to Dashboard" : "Back to Home ";
  const redirectURl = user ? "/dashboard" : "/";
  return (
    <>
      {user ? <DashboardNavbar /> : <Navbar />}

      <Center background={"#f9f9f9"} height={"100vh"}>
        <Flex direction={"column"}>
          <Heading as={"h1"} textAlign={"center"} color="#01acf1">
            404
          </Heading>
          <Heading as={"h6"} my={6} textAlign={"center"}>
            Page Not Found
          </Heading>
          <Text
            color={"gray.500"}
            mb={6}
            fontSize={{ base: "small", md: "medium", lg: "large" }}
          >
            The page you&apos;re looking for does not seem to exist
          </Text>

          <Button
            as={Link}
            href={redirectURl}
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
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            {ButtonName}
          </Button>
        </Flex>
      </Center>
    </>
  );
}
