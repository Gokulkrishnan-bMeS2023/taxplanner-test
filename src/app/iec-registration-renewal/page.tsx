import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import DocumentComponent from "@/components/DocumentSubmitted";
import { contentWithPriceCardContents } from "@/component-contents/iec-registration-renewal/ContentWithPriceCard";
import {
  aboutPlanCardContent,
  aboutPlanContent,
} from "@/component-contents/iec-registration-renewal/AboutThisPlan";
import { documents } from "@/component-contents/iec-registration-renewal/DocumentSubmitted";
import { FAQs } from "@/component-contents/iec-registration-renewal/FAQSection";
import { Box, Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const FAQsection = dynamic(() => import("@/components/FAQSection"));
const AboutThisPlan = dynamic(() => import("@/components/AboutThisPlan"));

const IecRegistrationRenewal = () => {
  return (
    <Container>
      <Box my={{ base: 16, lg: 24 }}>
        <ContentWithPriceCard contents={contentWithPriceCardContents} FilingType="IECRegistration"/>
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
          title="IEC Registration Renewal"
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

export default IecRegistrationRenewal;
