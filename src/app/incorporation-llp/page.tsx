import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import DocumentComponent from "@/components/DocumentSubmitted";
import FAQsection from "@/components/FAQSection";
import { contentWithPriceCardContents } from "@/component-contents/incorporation-llp/ContentWithPriceCard";
import {
  aboutPlanCardContent,
  aboutPlanContent,
} from "@/component-contents/incorporation-llp/AboutThisPlan";
import { documents } from "@/component-contents/incorporation-llp/DocumentSubmitted";
import { FAQs } from "@/component-contents/incorporation-llp/FAQSection";
import { Box, Container } from "@chakra-ui/react";

const IncorporationLLP = () => {
  return (
    <Container>
      <Box my={{ base: 16, lg: 24 }}>
        <ContentWithPriceCard contents={contentWithPriceCardContents} FilingType="LLP"/>
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
          title="Limited Liability Partnership (LLP) Registration"
          documents={documents}
        />
      </Box>
      <Box my={{ base: 16, lg: 24 }}>
        <FAQsection
          servicesDatas={FAQs}
          heading={"Frequently Asked Questions"}
        />
      </Box>
    </Container>
  );
};

export default IncorporationLLP;
