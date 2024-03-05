import { Button, Center, Heading, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Center minHeight={"100vh"} bg={"linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)"}>
        <Flex direction={"column"}>
          <Heading
            as={"h1"}
            fontSize={{ base: "70px", md: "120px", lg: "140px" }}
            textAlign={"center"}
            color="#01acf1"
          >
            404
          </Heading>
          <Heading
            as={"h1"}
            my={6}
            fontSize={{ base: "24px", md: "32px", lg: "37px", xl: "42px" }}
            textAlign={"center"}
          >
            Page Not Found
          </Heading>
          <Button
            as={Link}
            href={"/"}
            bgColor="#01acf1"
            color={"white"}
            my={6}
            p={6}
            w={"fit-content"}
            alignSelf={"center"}
            _hover={{ bgColor: "#01acf1" }}
          >
            Back to home
          </Button>
        </Flex>
      </Center>
    </>
  );
}
