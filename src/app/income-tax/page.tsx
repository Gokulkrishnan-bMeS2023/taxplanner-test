"use client";
import {
  incomeTaxSalariedPerson,
  incomeTaxCapitalGain,
  incomeTaxNRI,
  incomeTaxBusiness,
  incomeTaxTDS,
} from "@/component-contents/incometax";
import { Container, Heading, Flex } from "@chakra-ui/react";
import Animation from "@/components/Animation/Scroll-Animation";
import ServicesSubContainer from "@/components/ServicesSubMenuCards";

const Incometax = () => {
  return (
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
          <Animation>
            <Heading as={"h2"} mb={4} textAlign={{ base: "start" }}>
              Income Tax
            </Heading>
          </Animation>
        </Flex>
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }} gap={5} grow={1}>
          <Flex direction="column" gap={6} grow={1}>
            <ServicesSubContainer
              cartcontents={incomeTaxSalariedPerson}
              FilingType="SalariedPerson"
            />
            <ServicesSubContainer
              cartcontents={incomeTaxCapitalGain}
              FilingType="CapitalGain"
            />
            <ServicesSubContainer
              cartcontents={incomeTaxNRI}
              FilingType="NRI"
            />
          </Flex>
          <Flex direction="column" justifyContent="center" gap={6} grow={1}>
            <ServicesSubContainer
              cartcontents={incomeTaxBusiness}
              FilingType="Business"
            />
            <ServicesSubContainer
              cartcontents={incomeTaxTDS}
              FilingType="TDS"
            />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
export default Incometax;
