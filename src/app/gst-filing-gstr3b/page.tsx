"use client";

import { PlanDescription, PlanDetails } from "@/component-contents/gst-filing-gstr3b/AboutThisPlan";
import { PriceDetails } from "@/component-contents/gst-filing-gstr3b/ContentWithPriceCard";
import { Documents } from "@/component-contents/gst-filing-gstr3b/DocumentsToBeSubmitted";
import { FAQs } from "@/component-contents/gst-filing-gstr3b/FAQSection";
import DocumentsToBeSubmitted from "@/components/DocumentsToBeSubmitted";
import { StyledContainer } from "@/components/Styled/StyledContainer";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import AboutThisPlan from "@/components/AboutThisPlan";
import FAQSection from "@/components/FAQSection";
import { Box } from "@chakra-ui/react";

export default function GSTFilingGSTR3B() {
  return (
    <>
      <StyledContainer>
        <Box my={{ base: 16, lg: 24 }}>
          <ContentWithPriceCard contents={PriceDetails} />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <AboutThisPlan title="About This Plan"
            aboutContents={PlanDescription}
            planContents={PlanDetails}
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <DocumentsToBeSubmitted contents={Documents} />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <FAQSection
            heading="Frequently Asked Questions"
            servicesDatas={FAQs}
          />
        </Box>
      </StyledContainer>
      <BGWithQueriesForm />
    </>
  );
}
