"use client";

import {
  PlanDescription,
  PlanDetails,
} from "@/component-contents/gst-returns-lite-yearly/AboutThisPlan";
import { PriceDetails } from "@/component-contents/gst-returns-lite-yearly/ContentWithPriceCard";
import { Documents } from "@/component-contents/gst-returns-lite-yearly/DocumentsToBeSubmitted";
import { FAQs } from "@/component-contents/gst-returns-lite-yearly/FAQSection";
import DocumentsToBeSubmitted from "@/components/DocumentsToBeSubmitted";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import FAQSection from "@/components/FAQSection";
import { Box, Container } from "@chakra-ui/react";

export default function GSTReturnsLiteYearly() {
  return (
    <Container>
      <Box my={{ base: 16, lg: 24 }}>
        <ContentWithPriceCard
          contents={PriceDetails}
          FilingType="GSTReturnsLiteOne"
        />
      </Box>
      <Box my={{ base: 16, lg: 24 }}>
        <AboutThisPlan
          title="About This Plan"
          aboutContents={PlanDescription}
          planContents={PlanDetails}
        />
      </Box>
      <Box my={{ base: 16, lg: 24 }}>
        <DocumentsToBeSubmitted contents={Documents} />
      </Box>
      <Box my={{ base: 16, lg: 24 }}>
        <FAQSection heading="Frequently Asked Questions" servicesDatas={FAQs} />
      </Box>
    </Container>
  );
}
