import ServicesSubContainer from "@/components/ServicesSubContainer";
import {
  income_taxCard1,
  income_taxCard2,
  income_taxCard3,
  income_taxCard4,
  income_taxCard5,
} from "@/component-contents/incometax";
import { Container, Heading, Flex } from "@chakra-ui/react";

const Incometax = () => {
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
