"use client";

import {
  Heading,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import AnimatedText from "../Animation/Text-Animation";
import Navbar from "../Navbar";

interface headerProps {
  heading: string;
}

const Header = ({ heading }: headerProps) => {
  const pathname = usePathname();

  const handleBack = () => {
    history.back();
  };

  return (
    <>
      <Navbar />
      <Box
        backgroundImage="url('/assets/header.jpg')"
        backgroundSize="cover"
        backgroundPosition="top left"
        bgRepeat="no-repeat"
        pt={"6rem"}
        pb={"3rem"}
      >
        <Container
          maxW={{
            base: "540px",
            md: "720px",
            lg: "960px",
            xl: "1140px",
            "2xl": "1320px",
          }}
          px={6}
        >
          <AnimatedText>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", lg: "6xl", xl: "6xl" }}
              mt="4"
              mb="6"
              fontWeight="700"
              line-height={1.2}
              color="#011A41"
            >
              {heading}
            </Heading>
          </AnimatedText>
          <Box display={"flex"} flexWrap={"wrap"}>
            <Breadcrumb
              mb={0}
              display={"flex"}
              flexWrap={"wrap"}
              flexDirection={"column"}
            >
              <BreadcrumbItem>
                <BreadcrumbLink
                  style={{ fontWeight: "500", color: "#01acf1" }}
                  _hover={{ textDecoration: "none" }}
                  href="/"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              {pathname === "/contact" || (
                <BreadcrumbItem>
                  <BreadcrumbLink 
                    style={{ fontWeight: "500" }}
                    _hover={{ textDecoration: "none" }}
                    onClick={handleBack}
                  >
                    Services
                  </BreadcrumbLink>
                </BreadcrumbItem>
              )}
              <BreadcrumbItem>
                <BreadcrumbLink
                  style={{
                    fontWeight: "500",
                    color: "#6c757d",
                    textWrap: "nowrap",
                  }}
                  aria-current="page"
                >
                  {heading}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;
