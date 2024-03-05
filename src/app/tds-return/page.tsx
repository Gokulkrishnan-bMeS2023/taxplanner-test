import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import { contentWithPriceCardContents } from "@/component-contents/tds-return/ContentWithPriceCard";
import {
  aboutPlanCardContent,
  aboutPlanContent,
} from "@/component-contents/tds-return/AboutThisPlan";
import { Container } from "@chakra-ui/react";

const TDSReturn = () => {
  return (
    <>
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
        <ContentWithPriceCard contents={contentWithPriceCardContents} />
        <AboutThisPlan
          aboutContents={aboutPlanContent}
          planContents={aboutPlanCardContent}
          title="About this plan"
        />
      </Container>
    </>
  );
};

export default TDSReturn;
