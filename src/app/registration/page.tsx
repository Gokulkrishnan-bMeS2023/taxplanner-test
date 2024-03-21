"use client";
import { Box, Container } from "@chakra-ui/react";
import DocumentSubmitted from "@/components/DocumentSubmitted";
import AboutThisPlan from "@/components/AboutThisPlan";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import FAQSection from "@/components/FAQSection";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import { ContentWithPriceCardContents } from "@/component-contents/gst-registration/ContentWithPriceCard";
import { AboutThisPlanCardContent, AboutThisPlanContent } from "@/component-contents/gst-registration/AboutThisPlan";
import { Documents } from "@/component-contents/gst-registration/DocumentSubmitted";
import { FAQs } from "@/component-contents/gst-registration/FAQSection";


export default function GSTRegistration() {
  return (
    <>
      <Container>
      <Box my={{ base: 16, lg: 24 }}><ContentWithPriceCard contents={ContentWithPriceCardContents} /></Box>
      <Box my={{ base: 16, lg: 24 }}><AboutThisPlan title="About This Plan" planContents={AboutThisPlanCardContent} aboutContents={AboutThisPlanContent}/></Box> 
      <Box my={{ base: 16, lg: 24 }}><DocumentSubmitted title="Goods And Services Tax (GST) Registration" documents={Documents}  /></Box> 
      <Box my={{ base: 16, lg: 24 }}><FAQSection
            heading="Frequently Asked Questions"
            servicesDatas={FAQs}/></Box>
      </Container>
      <BGWithQueriesForm />
    </>
  );
}