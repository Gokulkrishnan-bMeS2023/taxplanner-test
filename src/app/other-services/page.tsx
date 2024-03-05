import ServicesSubContainer from "@/components/ServicesSubContainer";
import {
  other_ServicesCard1,other_ServicesCard2,other_ServicesCard3,other_ServicesCard4,other_ServicesCard5
} from "@/component-contents/otherservices";
import { Container, Heading, Flex } from "@chakra-ui/react";

const OtherServices = () => {
  return (
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
      <Flex
        align={{ base: "left", lg: "center" }}
        direction={{ base: "column", lg: "row" }}
        mb={20}
        mt={20}
      >
        <Flex grow={1}>
          <Heading as={"h2"} mb={4}>
            Income Tax
          </Heading>
        </Flex>
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }} gap={5} grow={1}>
          <Flex direction={{ base: "column", lg: "column" }} gap={6} grow={1}>
            <ServicesSubContainer cartcontents={other_ServicesCard1} />
            <ServicesSubContainer cartcontents={other_ServicesCard2} />
            <ServicesSubContainer cartcontents={other_ServicesCard3} />
          </Flex>
          <Flex direction="column" justifyContent="center" gap={6} grow={1}>
            <ServicesSubContainer cartcontents={other_ServicesCard4} />
            <ServicesSubContainer cartcontents={other_ServicesCard5} />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
export default OtherServices;
