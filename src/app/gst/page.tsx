"use client";
import ServicesSubContainer from "@/components/ServicesSubMenuCards";
import {
  GSTRegistration,
  GSTAmendments,
  GSTReturns,
  GSTLUT,
  GSTRefunds,
} from "@/component-contents/gst";
import { Container, Heading, Flex } from "@chakra-ui/react";
import SlideTextAnimation from "@/components/Animation/Text-Animation2";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GST() {
  return (
    <>
      <Header heading="GST" />
      <Container>
        <Flex
          align={{ base: "left", lg: "center" }}
          direction={{ base: "column", lg: "row" }}
          justify={"center"}
          alignItems={{ base: "start", lg: "center" }}
          mb={20}
          mt={20}
          gap={{ base: "3rem" }}
        >
          <Flex grow={1}>
            <SlideTextAnimation>
              <Heading as={"h2"} mb={4} textAlign={{ base: "start" }}>
                GST
              </Heading>
            </SlideTextAnimation>
          </Flex>
          <Flex flexWrap={{ base: "wrap", md: "nowrap" }} gap={5} grow={1}>
            <Flex direction="column" gap={6} grow={1}>
              <ServicesSubContainer
                cartcontents={GSTRegistration}
                FilingType="GSTRegistration"
              />
              <ServicesSubContainer
                cartcontents={GSTAmendments}
                FilingType="Amendments"
              />
              <ServicesSubContainer
                cartcontents={GSTReturns}
                FilingType="GSTReturns"
              />
            </Flex>
            <Flex direction="column" justifyContent="center" gap={6} grow={1}>
              <ServicesSubContainer cartcontents={GSTLUT} FilingType="LUT" />
              <ServicesSubContainer
                cartcontents={GSTRefunds}
                FilingType="Refunds"
              />
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <Footer/>
    </>
  );
}
