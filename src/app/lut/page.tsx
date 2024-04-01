"use client";
import { Box, Container } from "@chakra-ui/react";
import DocumentSubmitted from "@/components/DocumentSubmitted";
import AboutThisPlan from "@/components/AboutThisPlan";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import FAQSection from "@/components/FAQSection";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import {
  AboutThisPlanCardContent,
  AboutThisPlanContent,
} from "@/component-contents/gst-lut/AboutThisPlan";
import { ContentWithPriceCardContents } from "@/component-contents/gst-lut/ContentWithPriceCard";
import { Documents } from "@/component-contents/gst-lut/DocumentSubmitted";
import { FAQs } from "@/component-contents/gst-lut/FAQSection";

export default function Lut() {
  return (
    <>
      <Container>
        <Box my={{ base: 16, lg: 24 }}>
          <ContentWithPriceCard
            contents={ContentWithPriceCardContents}
            FilingType="LUT"
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
          <DocumentSubmitted title="GST LUT" documents={Documents} />
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
