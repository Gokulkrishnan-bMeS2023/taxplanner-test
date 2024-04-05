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
import Header from "@/components/Header";

export default function NRI() {
  return (
    <>
      <Header heading="NRI" />
      <Container>
       <Box my={{ base: 16, lg: 24 }}><ContentWithPriceCard contents={ContentWithPriceCardContents} FilingType="NRI"/></Box>
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