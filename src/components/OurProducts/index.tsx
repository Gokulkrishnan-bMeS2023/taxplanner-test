import { Container } from "@chakra-ui/react";
import FAQSection from "../FAQSection";
import { FAQs } from "@/component-contents/home-ourproducts/FAQSection";

const OurProducts: React.FC = () => {

  return (
    <>
       <Container maxW={{ base: "540px", md: "720px", lg: "960px", xl: "1140px", "2xl": "1320px" }} px={6}>
       <FAQSection servicesDatas={FAQs} heading="Our Products" />   
      </Container>   
    </>
  );
};

export default OurProducts;
