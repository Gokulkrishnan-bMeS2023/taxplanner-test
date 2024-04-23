"use client";

import {
  PlanDescription,
  PlanDetails,
} from "@/component-contents/dsc-digital-signature-nri/AboutThisPlan";
import { PriceDetails } from "@/component-contents/dsc-digital-signature-nri/ContentWithPriceCard";
import { Documents } from "@/component-contents/dsc-digital-signature-nri/DocumentsToBeSubmitted";
import { FAQs } from "@/component-contents/dsc-digital-signature-nri/FAQSection";
import DocumentsToBeSubmitted from "@/components/DocumentsToBeSubmitted";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import FAQSection from "@/components/FAQSection";
import { Box, Container } from "@chakra-ui/react";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DSCDigitalSignatureNRI() {
  return (
    <>
      <Header heading="Digital Signature for Foreign citizens and NRI - Class 3" />
      <Container>
        <Box my={{ base: 16, lg: 24 }}>
          <ContentWithPriceCard contents={PriceDetails} FilingType="DSCNRI" />
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
      <Footer/>
    </>
  );
}
