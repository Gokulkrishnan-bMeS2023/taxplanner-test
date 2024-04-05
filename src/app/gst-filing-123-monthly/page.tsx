"use client";
import {
  PlanDescription,
  PlanDetails,
} from "@/component-contents/gst-filing-123-monthly/AboutThisPlan";
import { PriceDetails } from "@/component-contents/gst-filing-123-monthly/ContentWithPriceCard";
import { Documents } from "@/component-contents/gst-filing-123-monthly/DocumentsToBeSubmitted";
import { FAQs } from "@/component-contents/gst-filing-123-monthly/FAQSection";
import DocumentsToBeSubmitted from "@/components/DocumentsToBeSubmitted";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import FAQSection from "@/components/FAQSection";
import { Box, Container } from "@chakra-ui/react";
import Header from "@/components/Header";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";

export default function GSTFiling123Monthly() {
  return (
    <>
      <Header heading="GST Filing - GSTR - 1 (3 months)" />
      <Container>
        <Box my={{ base: 16, lg: 24 }}>
          <ContentWithPriceCard
            contents={PriceDetails}
            FilingType="GSTReturns"
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
          <FAQSection
            heading="Frequently Asked Questions"
            servicesDatas={FAQs}
          />
        </Box>
      </Container>
      <BGWithQueriesForm />
    </>
  );
}
