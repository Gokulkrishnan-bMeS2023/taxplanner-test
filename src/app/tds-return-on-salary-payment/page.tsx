import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import DocumentComponent from "@/components/DocumentSubmitted";
import { contentWithPriceCardContents } from "@/component-contents/roc-filing/ContentWithPriceCard";
import {
  aboutPlanCardContent,
  aboutPlanContent,
} from "@/component-contents/roc-filing/AboutThisPlan";
import { documents } from "@/component-contents/roc-filing/DocumentSubmitted";
import { Box, Container } from "@chakra-ui/react";

const TDSReturnonSalaryPayment = () => {
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
        <Box my={{ base: 16, lg: 24 }}>
          <DocumentComponent
            title="TDS Return on Salary Payment (Form 24Q)"
            documents={documents}
          />
        </Box>
      </Container>
    </>
  );
};

export default TDSReturnonSalaryPayment;
