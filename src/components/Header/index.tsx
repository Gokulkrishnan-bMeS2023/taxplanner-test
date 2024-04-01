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
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../Navbar"));

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
        pt="6rem"
        pb="3rem"
        mb={"3rem"}
        px={{ base: "", md: "0.75rem", lg: "0.75rem" }}
        mx={"auto"}
        width={"100%"}
      >
        <Container
          className="header_container"
          maxW={{
            base: "540px",
            md: "720px",
            lg: "960px",
            xl: "1140px",
            "2xl": "1345px",
          }}
          px={"1.5rem"}
          width={"100%"}
          mx={"auto"}
        >
          <AnimatedText>
            <Heading
              as="h1"
              mt={0}
              mb={"0.5rem"}
              fontWeight="700"
              line-height={1.1}
              color="#011A41"
            >
              {heading}
            </Heading>
          </AnimatedText>
          <AnimatedText>
            <Breadcrumb mb={"1.5rem"}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  style={{ fontWeight: "500" }}
                  _hover={{ textDecoration: "none", color: "#2D50D6" }}
                  href="/"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              {pathname === "/contact" || (
                <BreadcrumbItem>
                  <BreadcrumbLink
                    style={{ fontWeight: "500" }}
                    _hover={{ textDecoration: "none", color: "#2D50D6" }}
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
                    color: "#01acf1",
                  }}
                  isCurrentPage
                  aria-current="page"
                >
                  {heading}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </AnimatedText>
        </Container>
      </Box>
    </>
  );
};

export default Header;
