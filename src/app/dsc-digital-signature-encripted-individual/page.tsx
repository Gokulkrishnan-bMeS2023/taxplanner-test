"use client";

import {
  PlanDescription,
  PlanDetails,
} from "@/component-contents/dsc-digital-signature-encripted-individual/AboutThisPlan";
import { PriceDetails } from "@/component-contents/dsc-digital-signature-encripted-individual/ContentWithPriceCard";
import { Documents } from "@/component-contents/dsc-digital-signature-encripted-individual/DocumentsToBeSubmitted";
import { FAQs } from "@/component-contents/dsc-digital-signature-encripted-individual/FAQSection";
import DocumentsToBeSubmitted from "@/components/DocumentsToBeSubmitted";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import FAQSection from "@/components/FAQSection";
import { Box, Container } from "@chakra-ui/react";
import Header from "@/components/Header";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Footer from "@/components/Footer";

export default function DSCDigitalSignatureEncryptedIndividual() {
  return (
    <>
      <Header heading="Digital Signature for Encripted Individual" />
      <Container>
        <Box my={{ base: 16, lg: 24 }}>
          <ContentWithPriceCard
            contents={PriceDetails}
            FilingType="DSCIndividual"
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
      <Footer/>
    </>
  );
}
