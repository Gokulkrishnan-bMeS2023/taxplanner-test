"use client";

import {
  PlanDescription,
  PlanDetails,
} from "@/component-contents/dsc-digital-signature-encrypted-organisation/AboutThisPlan";
import { PriceDetails } from "@/component-contents/dsc-digital-signature-encrypted-organisation/ContentWithPriceCard";
import { Documents } from "@/component-contents/dsc-digital-signature-encrypted-organisation/DocumentsToBeSubmitted";
import { FAQs } from "@/component-contents/dsc-digital-signature-encrypted-organisation/FAQSection";
import DocumentsToBeSubmitted from "@/components/DocumentsToBeSubmitted";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import AboutThisPlan from "@/components/AboutThisPlan";
import FAQSection from "@/components/FAQSection";
import { Box, Container } from "@chakra-ui/react";

export default function DSCDigitalSignatureEncryptedOrganisation() {
  return (
    <Container>
      <Box my={{ base: 16, lg: 24 }}>
        <ContentWithPriceCard contents={PriceDetails} />
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
