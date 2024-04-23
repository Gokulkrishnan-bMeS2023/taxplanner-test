"use client";
import {
  PlanDescription,
  PlanDetails,
} from "@/component-contents/dsc-digital-signature-dgft/AboutThisPlan";
import { PriceDetails } from "@/component-contents/dsc-digital-signature-dgft/ContentWithPriceCard";
import { Documents } from "@/component-contents/dsc-digital-signature-dgft/DocumentsToBeSubmitted";
import { FAQs } from "@/component-contents/dsc-digital-signature-dgft/FAQSection";
import DocumentsToBeSubmitted from "@/components/DocumentsToBeSubmitted";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import FAQSection from "@/components/FAQSection";
import { Box, Container } from "@chakra-ui/react";
import Header from "@/components/Header";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Footer from "@/components/Footer";

export default function DSCDigitalSignatureDGFT() {
  return (
    <>
      <Header heading="Digital Signature" />
      <Container>
        <Box my={{ base: 16, lg: 24 }}>
          <ContentWithPriceCard contents={PriceDetails} FilingType="DSCDGFT" />
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
