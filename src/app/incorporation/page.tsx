"use client";
import ServicesSubContainer from "@/components/ServicesSubMenuCards";
import {
  incorporationCompany,
  incorporationLLP,
  incorporationPartnership,
} from "@/component-contents/incorporation";
import { Container, Heading, Flex } from "@chakra-ui/react";
import Animation from "@/components/Animation/Scroll-Animation";

const Incorporation = () => {
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
        minH={"100vh"}
      >
        <Flex grow={1}>
          <Animation>
            <Heading as={"h2"} mb={4} textAlign={{ base: "start" }}>
              Incorporation
            </Heading>
          </Animation>
        </Flex>
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }} gap={5} grow={1}>
          <Flex direction="column" gap={6} grow={1}>
            <ServicesSubContainer
              cartcontents={incorporationCompany}
              FilingType="Company"
            />
            <ServicesSubContainer
              cartcontents={incorporationLLP}
              FilingType="LLP"
            />
          </Flex>
          <Flex direction="column" justifyContent="center" gap={6} grow={1}>
            <ServicesSubContainer
              cartcontents={incorporationPartnership}
              FilingType="Partnership"
            />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
export default Incorporation;
