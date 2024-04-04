"use client";
import { Box, Container } from "@chakra-ui/react";
import DocumentSubmitted from "@/components/DocumentSubmitted";
import AboutThisPlan from "@/components/AboutThisPlan";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import FAQSection from "@/components/FAQSection";
import { FAQs } from "@/component-contents/incometax-capital-gain/FAQSection";
import { Documents } from "@/component-contents/incometax-capital-gain/DocumentSubmitted";
import { ContentWithPriceCardContents } from "@/component-contents/incometax-capital-gain/ContentWithPriceCard";
import {
  AboutThisPlanCardContent,
  AboutThisPlanContent,
} from "@/component-contents/incometax-capital-gain/AboutThisPlan";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import Header from "@/components/Header";

export default function CapitalGain() {
  return (
    <>
      <Header heading="Capital Gain" />
      <Container>
        <Box my={{ base: 16, lg: 24 }}>
          <ContentWithPriceCard
            contents={ContentWithPriceCardContents}
            FilingType="CapitalGain"
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <AboutThisPlan
            title="About This Plan"
            planContents={AboutThisPlanCardContent}
            aboutContents={AboutThisPlanContent}
          />
        </Box>
        <Box my={{ base: 16, lg: 24 }}>
          <DocumentSubmitted title="Capital Gain" documents={Documents} />
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
