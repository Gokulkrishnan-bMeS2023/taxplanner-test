"use client";

import ServicesSubContainer from "@/components/ServicesSubMenuCards";
import {
  income_taxCard1,
  income_taxCard2,
  income_taxCard3,
  income_taxCard4,
  income_taxCard5,
} from "@/component-contents/incometax";
import { Container, Heading, Flex } from "@chakra-ui/react";
import Animation from "@/components/Animation/Scroll-Animation";

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
            <ServicesSubContainer cartcontents={income_taxCard1} />
            <ServicesSubContainer cartcontents={income_taxCard2} />
            <ServicesSubContainer cartcontents={income_taxCard3} />
          </Flex>
          <Flex direction="column" justifyContent="center" gap={6} grow={1}>
            <ServicesSubContainer cartcontents={income_taxCard4} />
            <ServicesSubContainer cartcontents={income_taxCard5} />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
export default Incometax;
