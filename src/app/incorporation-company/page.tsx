import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import DocumentComponent from "@/components/DocumentSubmitted";
import FAQsection from "@/components/FAQSection";
import { contentWithPriceCardContents } from "@/component-contents/incorporation-company/ContentWithPriceCard";
import {
  aboutPlanCardContent,
  aboutPlanContent,
} from "@/component-contents/incorporation-company/AboutThisPlan";
import { documents } from "@/component-contents/incorporation-company/DocumentSubmitted";
import { FAQs } from "@/component-contents/incorporation-company/FAQSection";
import { Box, Container } from "@chakra-ui/react";

const IncorporationCompany = () => {
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
            title="Incorporation Company"
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
    </>
  );
};

export default IncorporationCompany;
