"use client";
import { Box, Container } from "@chakra-ui/react";
import DocumentSubmitted from "@/components/DocumentSubmitted";
import AboutThisPlan from "@/components/AboutThisPlan";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import { AboutThisPlanCardContent, AboutThisPlanContent } from "@/component-contents/incometax-Salary-house-property/AboutThisPlan";
import { Documents } from "@/component-contents/incometax-Salary-house-property/DocumentSubmitted";
import { ContentWithPriceCardContents } from "@/component-contents/incometax-Salary-house-property/ContentWithPriceCard";
import FAQSection from "@/components/FAQSection";
import { FAQs } from "@/component-contents/incometax-Salary-house-property/FAQSection";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";

export default function SalaryHouseProperty() {
  return (
    <>
      <Container>
      <Box my={{ base: 16, lg: 24 }}><ContentWithPriceCard contents={ContentWithPriceCardContents} /></Box>
      <Box my={{ base: 16, lg: 24 }}><AboutThisPlan title="About This Plan" planContents={AboutThisPlanCardContent} aboutContents={AboutThisPlanContent}/></Box> 
      <Box my={{ base: 16, lg: 24 }}><DocumentSubmitted title="Salary & House Property" documents={Documents}  /></Box>
      <Box my={{ base: 16, lg: 24 }}><FAQSection
            heading="Frequently Asked Questions"
            servicesDatas={FAQs} /></Box>
      </Container>
      <BGWithQueriesForm />
    </>
  );
}