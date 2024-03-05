"use client";
import { Box, Container } from "@chakra-ui/react";
import AboutThisPlan from "@/components/AboutThisPlan";
import FAQSection from "@/components/FAQSection";
import BGWithQueriesForm from "@/components/BGWithQueriesForm";
import ContentWithPriceCard from "@/components/ContentWithPriceCard";
import { ContentWithPriceCardContents } from "@/component-contents/itr-u-updated-income-tax-return/ContentWithPriceCard";
import { FAQs } from "@/component-contents/itr-u-updated-income-tax-return/FAQSection";
import { AboutThisPlanCardContent, AboutThisPlanContent } from "@/component-contents/itr-u-updated-income-tax-return/AboutThisPlan";

export default function ItrIncomeTax() {
  return (
    <>
      <Container maxW={{ base: "540px", md: "720px", lg: "960px", xl: "1140px", "2xl": "1320px" }} px={6}>
      <Box my={{ base: 16, lg: 24 }}><ContentWithPriceCard contents={ContentWithPriceCardContents} /></Box>
      <Box my={{ base: 16, lg: 24 }}><AboutThisPlan title="About This Plan" planContents={AboutThisPlanCardContent} aboutContents={AboutThisPlanContent}/></Box> 
      <Box my={{ base: 16, lg: 24 }}><FAQSection
            heading="Frequently Asked Questions"
            servicesDatas={FAQs}/></Box>
      </Container>
      <BGWithQueriesForm />
    </>
  );
}