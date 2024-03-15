"use client";

import ServicesSubContainer from "@/components/ServicesSubContainer";
import {
  gst_Card1,
  gst_Card2,
  gst_Card3,
  gst_Card4,
  gst_Card5,
} from "@/component-contents/gst";
import { Container, Heading, Flex } from "@chakra-ui/react";
import Animation from "@/components/Animation/Scroll-Animation";

const GST = () => {
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
              GST
            </Heading>
          </Animation>
        </Flex>
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }} gap={5} grow={1}>
          <Flex direction={{ base: "column", lg: "column" }} gap={6} grow={1}>
            <ServicesSubContainer cartcontents={gst_Card1} />
            <ServicesSubContainer cartcontents={gst_Card2} />
            <ServicesSubContainer cartcontents={gst_Card3} />
          </Flex>
          <Flex direction="column" justifyContent="center" gap={6} grow={1}>
            <ServicesSubContainer cartcontents={gst_Card4} />
            <ServicesSubContainer cartcontents={gst_Card5} />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
export default GST;
