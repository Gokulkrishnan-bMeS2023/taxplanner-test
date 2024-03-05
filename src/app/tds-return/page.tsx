import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import { contentWithPriceCardContents } from "@/component-contents/tds-return/ContentWithPriceCard";
import {
  aboutPlanCardContent,
  aboutPlanContent,
} from "@/component-contents/tds-return/AboutThisPlan";
import { Box, Container } from "@chakra-ui/react";

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
        <Box my={{ base: 16, lg: 24 }}>
          <ContentWithPriceCard contents={contentWithPriceCardContents} />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <AboutThisPlan
            aboutContents={aboutPlanContent}
            planContents={aboutPlanCardContent}
            title="About this plan"
          />
        </Box>
      </Container>
    </>
  );
};

export default TDSReturn;
