"use client";
import { Box, Container, Center, Text, Link } from "@chakra-ui/react";

// CopyrightSection

const Footer = () => {
  return (
    <Box as="div" bg={"#000B1C"} color={"#DFE4FD"} py={"1.5rem"}>
      <Container>
        <Center>
          <Box as="div" className="row">
            <Box
              as="div"
              textAlign={{ base: "center", md: "start" }}
              mb={{ base: 3, md: 0 }}
            >
              <Center>
                <Text textAlign={"center"}>
                  Copyright © Tax Planner <br />
                  Powered by{" "}
                  <Link
                    as="b"
                    target="_blank"
                    _hover={{ color: "#01acf1" }}
                    borderBottom={"1px solid #DFE4FD"}
                    href="https://www.bmesolutions.in/"
                  >
                    BM e-Solutions
                  </Link>
                  .
                </Text>
              </Center>
            </Box>
          </Box>
        </Center>
      </Container>
    </Box>
  );
};

export default Footer;
