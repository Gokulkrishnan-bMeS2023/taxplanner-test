"use client";
import ServicesSubContainer from "@/components/ServicesSubMenuCards";
import {
  other_ServicesCard1,
  other_ServicesCard2,
  other_ServicesCard3,
  other_ServicesCard4,
  other_ServicesCard5,
} from "@/component-contents/otherservices";
import { Container, Heading, Flex } from "@chakra-ui/react";
import SlideTextAnimation from "@/components/Animation/Text-Animation2";

const OtherServices = () => {
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
          <SlideTextAnimation>
            <Heading as={"h2"} mb={4} textAlign={{ base: "start" }}>
              Other Services
            </Heading>
          </SlideTextAnimation>
        </Flex>
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }} gap={5} grow={1}>
          <Flex direction="column" gap={6} grow={1}>
            <ServicesSubContainer
              cartcontents={other_ServicesCard1}
              FilingType="MSMERegistration"
            />
            <ServicesSubContainer
              cartcontents={other_ServicesCard2}
              FilingType="IECRegistration"
            />
            <ServicesSubContainer
              cartcontents={other_ServicesCard3}
              FilingType="DSC"
            />
          </Flex>
          <Flex direction="column" justifyContent="center" gap={6} grow={1}>
            <ServicesSubContainer
              cartcontents={other_ServicesCard4}
              FilingType="ROCFiling"
            />
            <ServicesSubContainer
              cartcontents={other_ServicesCard5}
              FilingType=""
            />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
export default OtherServices;
