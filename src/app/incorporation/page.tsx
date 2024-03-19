"use client";

import ServicesSubContainer from "@/components/ServicesSubMenuCards";
import {
  incorporation_Card1,
  incorporation_Card2,
  incorporation_Card3,
} from "@/component-contents/incorporation";
import { Container, Heading, Flex } from "@chakra-ui/react";
import Animation from "@/components/Animation/Scroll-Animation";

const Incorporation = () => {
  return (
    <Container>
      <Flex
        align={{ base: "left", lg: "center" }}
        direction={{ base: "column", lg: "row" }}
        mb={20}
        mt={20}
      >
        <Flex grow={1}>
          <Animation>
            <Heading as={"h2"} mb={4}>
              Incorporation
            </Heading>
          </Animation>
        </Flex>
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }} gap={5} grow={1}>
          <Flex direction="column" gap={6} grow={1}>
            <ServicesSubContainer cartcontents={incorporation_Card1} />
            <ServicesSubContainer cartcontents={incorporation_Card2} />
          </Flex>
          <Flex direction="column" justifyContent="center" gap={6} grow={1}>
            <ServicesSubContainer cartcontents={incorporation_Card3} />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
export default Incorporation;
