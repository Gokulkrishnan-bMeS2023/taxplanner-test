"use client";
import { Box, Container } from "@chakra-ui/react";
import DocumentSubmitted from "@/components/DocumentSubmitted";
import AboutThisPlan from "@/components/AboutThisPlan";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import FAQSection from "@/components/FAQSection";
import { ContentWithPriceCardContents } from "@/component-contents/incometax-nri/ContentWithPriceCard";
import { AboutThisPlanCardContent, AboutThisPlanContent } from "@/component-contents/incometax-nri/AboutThisPlan";
import { Documents } from "@/component-contents/incometax-nri/DocumentSubmitted";
import { FAQs } from "@/component-contents/incometax-nri/FAQSection";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";

export default function NRI() {
  return (
    <>
      <Container maxW={{ base: "540px", md: "720px", lg: "960px", xl: "1140px", "2xl": "1320px" }} px={6}>
       <Box my={{ base: 16, lg: 24 }}><ContentWithPriceCard contents={ContentWithPriceCardContents} /></Box>
       <Box my={{ base: 16, lg: 24 }}><AboutThisPlan title="About This Plan" planContents={AboutThisPlanCardContent} aboutContents={AboutThisPlanContent}/></Box> 
       <Box my={{ base: 16, lg: 24 }}><DocumentSubmitted title="NRI" documents={Documents} /></Box> 
       <Box my={{ base: 16, lg: 24 }}><FAQSection
            heading="Frequently Asked Questions"
            servicesDatas={FAQs} /></Box>
      </Container>
      <BGWithQueriesForm />
    </>
  );
}